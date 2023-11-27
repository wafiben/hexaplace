import { CategoryInMemoryRepository } from '@modules/category/database/category.in-memory.repository';
import { CategoryEntity } from '@modules/category/domain/entities/category.entity';
import { GetCategorytQuery } from '@modules/category/queries/get-category/get-category.query';
import { GetCategoryQueryHandler } from '@modules/category/queries/get-category/get-category.query-handler';
import { FakeCategoryBuilder } from '@tests/category/fake-category.builder';

describe('get Category', () => {
  let categoryInMemoryRepository: CategoryInMemoryRepository;
  let getCategoryQueryHandler: GetCategoryQueryHandler;

  beforeEach(() => {
    categoryInMemoryRepository = new CategoryInMemoryRepository();
    getCategoryQueryHandler = new GetCategoryQueryHandler(
      categoryInMemoryRepository,
    );
  });

  it('get category by id', async () => {
    // given
    const createdCategory: CategoryEntity = await FakeCategoryBuilder.builder(
      categoryInMemoryRepository,
    ).build();

    const getCategoryQuery: GetCategorytQuery = new GetCategorytQuery({
      id: createdCategory.id.value,
    });

    const category = await getCategoryQueryHandler.execute(getCategoryQuery);

    expect(category.isOk).toEqual(true);
    expect(category.unwrap()).toEqual(createdCategory);
  });
});
