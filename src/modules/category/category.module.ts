import { LoggerModule } from '@infrastructure/logger/logger.module';
import {
  categoryReadRepositoryProvider,
  categoryWriteRepositoryProvider,
} from '@modules/category/category.providers';
import { CreateCategoryCommandHandler } from '@modules/category/commands/create-category/create-category.command-handler';
import { CreateCategoryHttpController } from '@modules/category/commands/create-category/create-category.http.controller';
import { DeleteCategoryHttpController } from '@modules/category/commands/delete-cateory/delete-category.http.controller';
import { ModifyCategoryCommandHandler } from '@modules/category/commands/put-category/modify-category.handler';
import { ModifyCategoryHttpController } from '@modules/category/commands/put-category/modify-category.http.controller';
import { CategoryOrmEntity } from '@modules/category/database/category.orm-entity';
import { GetCategoriesHttpController } from '@modules/category/queries/get-categories/get-categories.http.controller';
import { GetCategoryHttpController } from '@modules/category/queries/get-category/get-category.http.controller';
import { GetCategoryQueryHandler } from '@modules/category/queries/get-category/get-category.query-handler';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoryUnitOfWorkSingletonProvider } from './category.providers';

const httpControllers = [
  CreateCategoryHttpController,
  ModifyCategoryHttpController,
  GetCategoryHttpController,
  GetCategoriesHttpController,
  DeleteCategoryHttpController,
];

const queryHandlers = [GetCategoryQueryHandler];
/* 
const domainEventHandlers = [
  productApprovedDomainEventHandlerProvider,
  productRejectdDomainEventHandlerProvider,
];





const adapters = [
  productApprovedNotificationProvider,
  productRejectedNotificationProvider,
]; */

const commandHandlers = [
  CreateCategoryCommandHandler,
  ModifyCategoryCommandHandler,
];
const unitsOfWork = [categoryUnitOfWorkSingletonProvider];

const repositories = [
  categoryReadRepositoryProvider,
  categoryWriteRepositoryProvider,
];

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryOrmEntity]),
    CqrsModule,
    LoggerModule,
  ],
  controllers: [...httpControllers],
  providers: [
    ...commandHandlers,
    ...unitsOfWork,
    ...queryHandlers,
    ...repositories,
    /*
    ...domainEventHandlers,
    ...adapters, */
  ],
})
export class CategoryModule {}
