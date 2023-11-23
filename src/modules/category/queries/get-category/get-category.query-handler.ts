import { QueryHandlerBase } from '@libs/ddd/domain/base-classes/query-handler.base';
import { Result } from '@libs/ddd/domain/utils/result.util';
import { ProductReadRepositoryPort } from '@modules/catalog/ports/product.repository.port';
import { CategorytId } from '@modules/category/domain/value-objects/category-id.value-object';
import { GetCategorytQuery } from '@modules/category/queries/get-category/get-category.query';
import { Inject } from '@nestjs/common';
import { QueryHandler } from '@nestjs/cqrs';
import { CategoryEntity } from '@modules/category/domain/entities/category.entity';
import { CategoryReadRepositoryPort } from '@modules/category/ports/category.repository.port';


@QueryHandler(GetCategorytQuery)
export class GetCategoryQueryHandler extends QueryHandlerBase {
  constructor(
    @Inject('CategoryReadRepositoryPort')
    private readonly categoryRepo: ProductReadRepositoryPort,
  ) {
    super();
  }

  /* Since this is a simple query with no additional business
     logic involved, it bypasses application's core completely
     and retrieves products directly from a repository.
   */
     async handle(query: GetCategorytQuery): Promise<Result<any /* ProductReadRepositoryPort */>> {
        const product = await this.categoryRepo.findOneByIdOrThrow(
          new CategorytId(query.id),
        );
        return Result.ok(product);
      }
}
