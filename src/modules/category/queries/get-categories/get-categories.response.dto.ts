import { ResponseBase } from '@libs/ddd/interface-adapters/base-classes/response.base';
import { CategoryEntity } from '@modules/category/domain/entities/category.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponse extends ResponseBase {
  constructor(category: CategoryEntity) {
    super(category);
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

export class ProductHttpResponse extends CategoryResponse {}
