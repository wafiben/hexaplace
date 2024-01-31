import { routesV1 } from '@modules/category/category.routes';
import { CreateCategorytHttpRequest } from '@modules/category/commands/create-category/create-category.request.dto';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateCategoryCommand } from '@modules/category/commands/create-category/create-category.command';

@ApiTags('Category')
@ApiBearerAuth('jwt-token')
@Controller(routesV1.version)
export class CreateCategoryHttpController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post(routesV1.category.root)
  @ApiOperation({ summary: 'Create a category' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'when the category is created successfully',
  })
  async create(@Body() body: CreateCategorytHttpRequest): Promise<void> {
    const command = new CreateCategoryCommand({
      ...body,
    });
    await this.commandBus.execute(command);
  }
}
