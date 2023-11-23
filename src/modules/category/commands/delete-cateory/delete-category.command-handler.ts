import { CommandHandlerBase } from '@libs/ddd/domain/base-classes/command-handler.base';
import { Guard } from '@libs/ddd/domain/guard';
import { DeleteCategoryCommand } from '@modules/category/commands/delete-cateory/delete-category.command';
import { CategoryEntity } from '@modules/category/domain/entities/category.entity';
import { CategorytId } from '@modules/category/domain/value-objects/category-id.value-object';
import { CategoryIdInvalidError } from '@modules/category/errors/category-id-invalid.error';
import { CategoryReadRepositoryPort } from '@modules/category/ports/category.repository.port';
import { CategoryUnitOfWorkPort } from '@modules/category/ports/category.unit-of-work.port';
import { Inject } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';

@CommandHandler(DeleteCategoryCommand)
export class DeleteProductCommandHandler extends CommandHandlerBase {
  constructor(
    @Inject('CategoryUnitOfWorkPort')
    protected readonly unitOfWork: CategoryUnitOfWorkPort,
    @Inject('CategoryReadRepositoryPort')
    protected readonly categoryReadRepository: CategoryReadRepositoryPort,
  ) {
    super(unitOfWork);
  }
  async handle(command: DeleteCategoryCommand): Promise<void> {
    this.isValidOrThrow(command);
    const category = await this.getProductById(command);
    await this.delete(command.correlationId, category);
  }

  private async delete(
    correlationId: string,
    category: CategoryEntity,
  ): Promise<void> {
    await this.unitOfWork
      .getWriteCategoryRepository(correlationId)
      .delete(category);
  }

  private async getProductById(
    command: DeleteCategoryCommand,
  ): Promise<CategoryEntity> {
    const category = await this.categoryReadRepository.findOneByIdOrThrow(
      new CategorytId(command.id),
    );
    return category;
  }

  private isValidOrThrow(command: DeleteCategoryCommand): void {
    if (Guard.isEmpty(command.id)) throw new CategoryIdInvalidError();
  }
}
