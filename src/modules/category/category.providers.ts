import { CategoryUnitOfWork } from '@modules/category/database/category.unit-of-work';
import { ClassProvider } from '@nestjs/common';
import { CategoryOrmRepository } from './database/category.orm-repository';

export const categoryUnitOfWorkSingletonProvider: ClassProvider = {
  provide: 'CategoryUnitOfWorkPort',
  useClass: CategoryUnitOfWork,
};

export const categoryReadRepositoryProvider: ClassProvider = {
  provide: 'CategoryReadRepositoryPort',
  useClass: CategoryOrmRepository,
};

export const categoryWriteRepositoryProvider: ClassProvider = {
  provide: 'CategoryWriteRepositoryPort',
  useClass: CategoryOrmRepository,
};
