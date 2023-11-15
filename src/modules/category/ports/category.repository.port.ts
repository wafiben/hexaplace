import { WriteRepositoryPort } from '@libs/ddd/domain/ports/repository.ports';
import { CategoryEntity } from '../domain/entities/category.entity';

/* import { ProductId } from '../domain/value-objects/product-id.value-object'; */

/*  */

/*export interface ProductReadRepositoryPort
  extends ReadRepositoryPort<ProductEntity, ProductProps> {
  findOneByIdOrThrow(id: ProductId): Promise<ProductEntity>;
  findProducts(query: GetProductsQuery): Promise<ProductEntity[]>;
} /


export type CategoryWriteRepositoryPort = WriteRepositoryPort<CategoryEntity>;


/* export interface CategoryWriteRepositoryPort
  extends WriteRepositoryPort<CategoryEntity> {
  save(category: CategoryEntity): Promise<CategoryEntity>;
} */

export interface CategoryReadRepositoryPort {
  find(x: any): any;
}

/* export interface CategoryReadRepositoryPort
  extends WriteRepositoryPort<ProductEntity> {
    save(product: ProductEntity): Promise<void>;
} */
