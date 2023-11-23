import { CommandHandlerBase } from '@libs/ddd/domain/base-classes/command-handler.base';
import { CreateCategoryCommand } from '@modules/category/commands/create-category/create-category.command';
import { CategoryEntity } from '@modules/category/domain/entities/category.entity';
import { CategoryUnitOfWorkPort } from '@modules/category/ports/category.unit-of-work.port';
import { Inject } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryCommandHandler extends CommandHandlerBase {
  constructor(
    @Inject('CategoryUnitOfWorkPort')
    protected readonly unitOfWork: CategoryUnitOfWorkPort,
  ) {
    super(unitOfWork);
  }

  async handle(command: CreateCategoryCommand): Promise<void> {
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
}
