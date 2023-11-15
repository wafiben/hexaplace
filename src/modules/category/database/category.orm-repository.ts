import { BaseEntityProps } from '@libs/ddd/domain/base-classes/entity.base';
import { LoggerPort } from '@libs/ddd/domain/ports/logger.port';
import {
  TypeormRepositoryBase,
  WhereCondition,
} from '@libs/ddd/infrastructure/database/base-classes/typeorm.repository.base';
import { final } from '@libs/decorators/final.decorator';
import { DeepPartial } from '@libs/types';
import { ProductOrmEntity } from '@modules/catalog/database/product.orm-entity';
import { CategoryOrmMapper } from '@modules/category/database/category.orm-mapper';
import {
  CategoryEntity,
  CategoryProps,
} from '@modules/category/domain/entities/category.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryReadRepositoryPort } from '../ports/category.repository.port';
import { CategoryOrmEntity } from './category.orm-entity';

@Injectable()
@final
export class CategoryOrmRepository
  extends TypeormRepositoryBase<CategoryEntity, CategoryProps, CategoryOrmEntity>
  implements CategoryReadRepositoryPort
{
  protected relations: string[] = [];

  constructor(
    @InjectRepository(CategoryOrmEntity)
    private readonly categoryRepository: Repository<CategoryOrmEntity>,
    @Inject('LoggerPort')
    protected readonly logger: LoggerPort,
  ) {
    super(
      categoryRepository,
      new CategoryOrmMapper(CategoryEntity, CategoryOrmEntity),
      logger,
    );
  }
  find(x: any) {
    throw new Error('Method not implemented.');
  }
  protected prepareQuery(
    params: DeepPartial<BaseEntityProps & CategoryProps>,
  ): WhereCondition<CategoryOrmEntity> {
    throw new Error('Method not implemented.');
  }
}

/* @Injectable()
@final
export class ProductOrmRepository
  extends TypeormRepositoryBase<ProductEntity, ProductProps, ProductOrmEntity>
  implements ProductReadRepositoryPort
{
  protected relations: string[] = [];

  constructor(
    @InjectRepository(ProductOrmEntity)
    private readonly productRepository: Repository<ProductOrmEntity>,
    @Inject('LoggerPort')
    protected readonly logger: LoggerPort,
  ) {
    super(
      productRepository,
      new ProductOrmMapper(ProductEntity, ProductOrmEntity),
      logger,
    );
  }

  async findOneByIdOrThrow(id: ProductId): Promise<ProductEntity> {
    return super.findOneByIdOrThrow(id);
  }

  async findProducts(query: GetProductsQuery): Promise<ProductEntity[]> {
    const where: QueryParams<ProductOrmEntity> = removeUndefinedProps(query);
    const products = await this.repository.find({ where });
    return products.map((product) => this.mapper.toDomainEntity(product));
  }

  // Used to construct a query
  protected prepareQuery(
    params: QueryParams<ProductProps>,
  ): WhereCondition<ProductOrmEntity> {
    const where: QueryParams<ProductOrmEntity> = {};
    if (params.name) {
      where.name = params.name;
    }
    return where;
  }
} */
