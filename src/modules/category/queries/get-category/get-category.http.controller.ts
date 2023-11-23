import { Result } from '@libs/ddd/domain/utils/result.util';
import { routesV1 } from '@modules/category/category.routes';
import { CategoryEntity } from '@modules/category/domain/entities/category.entity';
import { CategoryHttpResponse } from '@modules/category/queries/get-category/category.response.dto';
import { GetCategorytQuery } from '@modules/category/queries/get-category/get-category.query';
import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Category')
@ApiBearerAuth('jwt-token')
@Controller(routesV1.version)
export class GetCategoryHttpController {
  constructor(private readonly queryBys: QueryBus) {}

  @Get(routesV1.category.resourceById)
  @ApiOperation({ summary: 'get category by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CategoryHttpResponse,
  })
  
  async getCategoryById(
    @Param('id') id: string,
  ): Promise<CategoryHttpResponse> {
    const query = new GetCategorytQuery({ id });
    const result: Result<CategoryEntity> = await this.queryBys.execute(query);

    /* Returning Response classes which are responsible
       for whitelisting data that is sent to the product */
    return new CategoryHttpResponse(result.unwrap());
  }
}
