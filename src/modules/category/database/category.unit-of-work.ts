import { LoggerPort } from '@libs/ddd/domain/ports/logger.port';
import { TypeormUnitOfWork } from '@libs/ddd/infrastructure/database/base-classes/typeorm-unit-of-work';
import { final } from '@libs/decorators/final.decorator';
import { Inject, Injectable } from '@nestjs/common';

import { CategoryWriteRepositoryPort } from '../ports/category.repository.port';
import { CategoryUnitOfWorkPort } from '../ports/category.unit-of-work.port';
import { CategoryOrmEntity } from './category.orm-entity';
import { CategoryOrmRepository } from './category.orm-repository';

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
  ): /* CategoryWriteRepositoryPort */ any {
/*     return new CategoryOrmRepository(
      this.getOrmRepository(CategoryOrmEntity, correlationId),
      this.logger,
    ).setCorrelationId(correlationId); */
  }
}
