import { CommandHandlerBase } from '@libs/ddd/domain/base-classes/command-handler.base';
import { ModifyCategoryCommand } from '@modules/category/commands/put-category/modify-category.command';
import { CategoryEntity } from '@modules/category/domain/entities/category.entity';
import { CategoryUnitOfWorkPort } from '@modules/category/ports/category.unit-of-work.port';
import { Inject } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';

@CommandHandler(ModifyCategoryCommand)
export class ModifyCategoryCommandHandler extends CommandHandlerBase {
/*   constructor(
    @Inject('CategoryUnitOfWorkPort')
    protected readonly unitOfWork: CategoryUnitOfWorkPort,
  ) {
    super(unitOfWork);
  } */

  async handle(command: ModifyCategoryCommand): Promise<void> {
/*     const existingCategory = await this.unitOfWork
      .getWriteCategoryRepository(command.correlationId)
      .findById(command.categoryId);

    if (!existingCategory) {

      return;
    }

    const updatedCategory = existingCategory.modify({
      ...command,
    });

    await this.save(command.correlationId, updatedCategory); */
  }

  private async getProductById(
    command: ModifyCategoryCommand,
  ): Promise<any> {
    /* const product = await this.productReadRepository.findOneByIdOrThrow(
      new ProductId(command.productId),
    );
    return product; */
  }
}