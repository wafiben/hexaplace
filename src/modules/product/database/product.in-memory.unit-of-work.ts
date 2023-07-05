import { InMemoryUnitOfWork } from '@libs/ddd/infrastructure/database/base-classes/in-memory-unit-of-work';
import { final } from '@libs/decorators/final.decorator';
import { ProductInMemoryRepository } from '@modules/product/database/product.in-memory.repository';
import {
ProductReadRepositoryPort,
ProductWriteRepositoryPort
} from '@modules/product/ports/product.repository.port';
import { ProductUnitOfWorkPort } from '@modules/product/ports/product.unit-of-work.port';

@final
export class ProductInMemoryUnitOfWork
  extends InMemoryUnitOfWork
  implements ProductUnitOfWorkPort
{

  productInMemoryRepository = new ProductInMemoryRepository();

  getWriteProductRepository(correlationId: string): ProductWriteRepositoryPort {
    return this.productInMemoryRepository.setCorrelationId(correlationId);
  }

  getReadProductRepository(): ProductReadRepositoryPort {
    return this.productInMemoryRepository;
  }
}
