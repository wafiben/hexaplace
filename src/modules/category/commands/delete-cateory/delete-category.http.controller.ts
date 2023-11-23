import { routesV1 } from '@modules/category/category.routes';
import { DeleteCategoryCommand } from '@modules/category/commands/delete-cateory/delete-category.command';
import { Controller, Delete, HttpStatus, Param } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Category')
@ApiBearerAuth('jwt-token')
@Controller(routesV1.version)
export class DeleteCategoryHttpController {
  constructor(private readonly commandBus: CommandBus) {}
  @Delete(routesV1.category.deleteById)
  @ApiOperation({ summary: 'delete a category' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: `product is deleted`,
  })
  
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: `when product is not found`,
  })
  async deleteCategoryById(@Param('id') id: string): Promise<void> {
    const command = new DeleteCategoryCommand({ id: id });
    await this.commandBus.execute(command);
  }
}
