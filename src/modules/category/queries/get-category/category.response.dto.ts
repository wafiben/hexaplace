import { ResponseBase } from '@libs/ddd/interface-adapters/base-classes/response.base';
import { CategoryEntity } from '@modules/category/domain/entities/category.entity';
import { ApiProperty } from '@nestjs/swagger';

export interface GetCategoryById {
  id?: string;
  name: string;
  description: string;
  parentId?: string;
}

export class CategoryResponse extends ResponseBase implements GetCategoryById {
  constructor(category: CategoryEntity) {
    super(category);
    /* Whitelisting returned data to avoid leaks.
       If a new property is added, like password or a
       credit card number, it won't be returned
       unless you specifically allow this.
       (avoid blacklisting, which will return everything
        but blacklisted items, which can lead to a data leak).
    */
    const props = category.getPropsCopy();
    this.name = props.name;
    this.description = props.description;
  }

  @ApiProperty({
    example: 'category 1',
    description: 'category name',
  })
  name: string;

  @ApiProperty({
    example: 'Awesome category',
    description: 'category description',
  })
  description: string;
}

export class CategoryHttpResponse
  extends CategoryResponse
  implements GetCategoryById {}
