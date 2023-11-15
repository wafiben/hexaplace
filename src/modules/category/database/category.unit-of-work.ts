import { LoggerPort } from '@libs/ddd/domain/ports/logger.port';
import { TypeormUnitOfWork } from '@libs/ddd/infrastructure/database/base-classes/typeorm-unit-of-work';
import { final } from '@libs/decorators/final.decorator';
import { Inject, Injectable } from '@nestjs/common';
import { CategoryWriteRepositoryPort } from '../ports/category.repository.port';
import { CategoryUnitOfWorkPort } from '../ports/category.unit-of-work.port';
import { CategoryOrmRepository } from './category.orm-repository';
import { CategoryOrmEntity } from './category.orm-entity';

@Injectable()
@final
export class CategoryUnitOfWork
  extends TypeormUnitOfWork
  implements CategoryUnitOfWorkPort
{
  constructor(
    @Inject('LoggerPort')
    protected readonly logger: LoggerPort,
  ) {
    super(logger);
  }
  getWriteCategoryRepository(
    correlationId: string,
  ): CategoryWriteRepositoryPort {
    return new CategoryOrmRepository(
      this.getOrmRepository(CategoryOrmEntity, correlationId),
      this.logger,
    ).setCorrelationId(correlationId);
  }
}

/* getWriteProductRepository(correlationId: string): ProductWriteRepositoryPort {
  return new ProductOrmRepository(
    this.getOrmRepository(ProductOrmEntity, correlationId),
    this.logger,
  ).setCorrelationId(correlationId);
} */
