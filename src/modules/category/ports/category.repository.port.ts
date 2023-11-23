import {
  ReadRepositoryPort,
  WriteRepositoryPort,
} from '@libs/ddd/domain/ports/repository.ports';
import {
  CategoryEntity,
  CategoryProps,
} from '@modules/category/domain/entities/category.entity';
import { CategorytId } from '../domain/value-objects/category-id.value-object';

export type CategoryWriteRepositoryPort = WriteRepositoryPort<CategoryEntity>;

export interface CategoryReadRepositoryPort
  extends ReadRepositoryPort<CategoryEntity, CategoryProps> {
  findOneByIdOrThrow(id: CategorytId): Promise<CategoryEntity>;
  /* findProducts(query: GetProductsQuery): Promise<CategoryEntity[]>; */
}
