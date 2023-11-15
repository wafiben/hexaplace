import { QueryHandlerBase } from '@libs/ddd/domain/base-classes/query-handler.base';
import { GetProductsQuery } from '@modules/catalog/queries/get-products/get-products.query';
import { QueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetProductsQuery)
export class GetCategoriesQueryHandler extends QueryHandlerBase {
  /* constructor(
    @Inject('ProductReadRepositoryPort')
    private readonly productReadRepository: ProductReadRepositoryPort,
  ) {
    super();
  }

  Since this is a simple query with no additional business
     logic involved, it bypasses application's core completely
     and retrieves products directly from a repository.
  
     async handle(query: GetProductsQuery): Promise<Result<ProductEntity[]>> {
      const products = await this.productReadRepository.findProducts(query);
      return Result.ok(products);
    } */

  async handle(query: GetProductsQuery): Promise<any> {}
}
