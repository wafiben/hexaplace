import { routesV1 } from '@modules/category/category.routes';
import { Body, Controller, HttpStatus, Param, Patch } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { ModifyCategoryCommand } from '@modules/category/commands/put-category/modify-category.command';
import { ModifyCategoryHttpRequest } from '@modules/category/commands/put-category/modify-category.request.dto';

@ApiTags('Category')
@ApiBearerAuth('jwt-token')
@Controller(routesV1.version)
export class ModifyCategoryHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch(`${routesV1.category.root}/:categoryId`)
  @ApiOperation({ summary: 'Modify a category' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'when the category is modified successfully',
  })
  async modify(
    @Param('categoryId') categoryId: string,
    @Body() body: ModifyCategoryHttpRequest,
  ): Promise<void> {
    const command = new ModifyCategoryCommand({
      categoryId,
      ...body,
    });
    await this.commandBus.execute(command);
  }
}
