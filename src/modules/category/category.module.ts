import { LoggerModule } from '@infrastructure/logger/logger.module';
import { CreateCategoryCommandHandler } from '@modules/category/commands/create-category/create-category.command-handler';
import { CreateCategoryHttpController } from '@modules/category/commands/create-category/create-category.http.controller';
import { ModifyCategoryCommandHandler } from '@modules/category/commands/put-category/modify-category.handler';
import { ModifyCategoryHttpController } from '@modules/category/commands/put-category/modify-category.http.controller';
import { CategoryOrmEntity } from '@modules/category/database/category.orm-entity';
import { GetCategoriesHttpController } from '@modules/category/queries/get-categories/get-categories.http.controller';
import { GetCategoriesQueryHandler } from '@modules/category/queries/get-categories/get-categories.query-handler';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoryUnitOfWorkSingletonProvider } from './category.providers';

const httpControllers = [
  CreateCategoryHttpController,
  ModifyCategoryHttpController,
  GetCategoriesHttpController,
];

const queryHandlers = [GetCategoriesQueryHandler];
/* 
const domainEventHandlers = [
  productApprovedDomainEventHandlerProvider,
  productRejectdDomainEventHandlerProvider,
];



const repositories = [
  productReadRepositoryProvider,
  productWriteRepositoryProvider,
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
    /*   ...queryHandlers,
    ...domainEventHandlers,
    
    ...repositories,
    ...adapters, */
  ],
})
export class CategoryModule {}
