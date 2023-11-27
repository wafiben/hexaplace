import { Logger } from '@infrastructure/logger/logger';
import { InMemoryRepositoryBase } from '@libs/ddd/infrastructure/database/base-classes/in-memory.repository.base';
import { final } from '@libs/decorators/final.decorator';

import { CategoryOrmEntity } from '@modules/category/database/category.orm-entity';
/* import { CategoryOrmMapper } from '@modules/catalog/database/category.orm-mapper'; */
import { GetProductsQuery } from '@modules/catalog/queries/get-products/get-products.query';
import {
  CategoryEntity,
  CategoryProps,
} from '@modules/category/domain/entities/category.entity';
import {
  CategoryReadRepositoryPort,
  CategoryWriteRepositoryPort,
} from '@modules/category/ports/category.repository.port';
import { CategoryOrmMapper } from './category.orm-mapper';

@final
export class CategoryInMemoryRepository
  extends InMemoryRepositoryBase<
    CategoryEntity,
    CategoryProps,
    CategoryOrmEntity
  >
  implements CategoryWriteRepositoryPort, CategoryReadRepositoryPort
{
  constructor() {
    super(
      new CategoryOrmMapper(CategoryEntity, CategoryOrmEntity),
      new Logger('CategoryRepository'),
    );
  }

  findProducts(query: GetProductsQuery): Promise<CategoryEntity[]> {
    const filteredProducts: CategoryOrmEntity[] = this.savedEntities.filter(
      (productOrmEntity: CategoryOrmEntity) =>
        !query.name || productOrmEntity.name.startsWith(query.name),
    );
    return Promise.resolve(this.toDomainEntities(filteredProducts));
  }
}
