import { UnitOfWork } from '@libs/ddd/domain/ports/unit-of-work.port';
import { CategoryWriteRepositoryPort } from '@modules/category/ports/category.repository.port';

export interface CategoryUnitOfWorkPort extends UnitOfWork {
  getWriteCategoryRepository(
    correlationId: string,
  ): CategoryWriteRepositoryPort;
}
