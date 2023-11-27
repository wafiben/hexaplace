import { DateVO } from '@libs/ddd/domain/value-objects/date.value-object';
import { CategoryEntity } from '@modules/category/domain/entities/category.entity';
import { CategorytId } from '@modules/category/domain/value-objects/category-id.value-object';
import { CategoryWriteRepositoryPort } from '@modules/category/ports/category.repository.port';

export class FakeCategoryBuilder {
  private id?: string;

  private name?: string;

  private description?: string;

  /* private parentId?: string; */

  private createdDate?: DateVO;

  private constructor(
    private CategoryWriteRepository: CategoryWriteRepositoryPort,
  ) {}

  public static builder(
    categoryWriteRepository: CategoryWriteRepositoryPort,
  ): FakeCategoryBuilder {
    return new FakeCategoryBuilder(categoryWriteRepository);
  }

  public withId(id?: string): FakeCategoryBuilder {
    this.id = id;
    return this;
  }

  public withName(name?: string): FakeCategoryBuilder {
    this.name = name;
    return this;
  }

  public withDescription(description?: string): FakeCategoryBuilder {
    this.description = description;
    return this;
  }

  public withCreatedDate(createdDate?: DateVO): FakeCategoryBuilder {
    this.createdDate = createdDate;
    return this;
  }

  async build(): Promise<CategoryEntity> {
    let categoryEntity: CategoryEntity = CategoryEntity.create({
      id: this.id || CategorytId.generate().value,
      createdDate: this.createdDate || undefined,
      name: this.name || 'test' /* faker.commerce.categoryName(), */,
      description:
        this.description ||
        'test description' /*  faker.commerce.productDescription(), */,
    });

    return this.CategoryWriteRepository.save(categoryEntity);
  }
}
