import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ModifyCategoryHttpRequest {
  @ApiProperty({
    description: 'new category name',
    required: false,
  })
  @IsString()
  @IsOptional()
  readonly name?: string;

  @ApiProperty({
    description: 'new category description',
    required: false,
  })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({
    description: 'new parent id category',
    required: false,
  })
  @IsString()
  @IsOptional()
  readonly parentId?: string;
}
