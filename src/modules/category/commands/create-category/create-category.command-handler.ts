import { CommandHandlerBase } from '@libs/ddd/domain/base-classes/command-handler.base';
import { CreateCategoryCommand } from '@modules/category/commands/create-category/create-category.command';
import { CategoryEntity } from '@modules/category/domain/entities/category.entity';
import { CategorytId } from '@modules/category/domain/value-objects/category-id.value-object';
import { CategoryReadRepositoryPort } from '@modules/category/ports/category.repository.port';
import { CategoryUnitOfWorkPort } from '@modules/category/ports/category.unit-of-work.port';
import { Inject } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryCommandHandler extends CommandHandlerBase {
  constructor(
    @Inject('CategoryUnitOfWorkPort')
    protected readonly unitOfWork: CategoryUnitOfWorkPort,
    @Inject('CategoryReadRepositoryPort')
    protected readonly categoryReadRepository: CategoryReadRepositoryPort,
  ) {
    super(unitOfWork);
  }

  async handle(command: CreateCategoryCommand): Promise<void> {
    if (command.parentId) {
      await this.getProductById(command);
    }

    const category = CategoryEntity.create({
      ...command,
    });
    await this.save(command.correlationId, category);
  }

  private async save(
    correlationId: string,
    category: CategoryEntity,
  ): Promise<void> {
    await this.unitOfWork
      .getWriteCategoryRepository(correlationId)
      .save(category);
  }

  private async getProductById(
    command: CreateCategoryCommand,
  ): Promise<CategoryEntity | undefined> {
    if (command.parentId) {
      const category = await this.categoryReadRepository.findOneByIdOrThrow(
        new CategorytId(command.parentId),
      );
      return category;
    } else {
      return ;
    }
  }
}
