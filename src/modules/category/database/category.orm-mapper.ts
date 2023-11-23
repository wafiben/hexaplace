import {
  EntityProps,
  OrmEntityProps,
  OrmMapper,
} from '@libs/ddd/infrastructure/database/base-classes/orm-mapper.base';
import { CategoryOrmEntity } from '@modules/category/database/category.orm-entity';
import {
  CategoryEntity,
  CategoryProps,
} from '../domain/entities/category.entity';
import { CategorytId } from '../domain/value-objects/category-id.value-object';

export class CategoryOrmMapper extends OrmMapper<
  CategoryEntity,
  CategoryOrmEntity
> {
  protected toOrmProps(
    entity: CategoryEntity,
  ): OrmEntityProps<CategoryOrmEntity> {
    
    const props = entity.getPropsCopy();

    return {
      name: props.name,
      description: props.description,
    };
  }

  protected toDomainProps(
    ormEntity: CategoryOrmEntity,
  ): EntityProps<CategoryProps> {
    const id = new CategorytId(ormEntity.id);

    const props: CategoryProps = {
      name: ormEntity.name,
      description: ormEntity.description,
    };
    return { id, props };
  }
}
