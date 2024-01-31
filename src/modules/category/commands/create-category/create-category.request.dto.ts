import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export interface CreateCategory {
  id?: string;
  name: string;
  description: string;
  parentId?: string;
}

export class CreateCategoryRequest implements CreateCategory {
  @ApiProperty({
    description: 'category id',
  })
  @IsString()
  readonly id: string;

  @ApiProperty({
    description: 'category name',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Product description' })
  @IsString()
  readonly description: string;
  @ApiProperty({
    description: 'parent id category',
  })
  @IsString()
  @IsOptional()
  readonly parentId?: string;
}

export class CreateCategorytHttpRequest
  extends CreateCategoryRequest
  implements CreateCategory {}
