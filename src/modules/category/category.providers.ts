import { CategoryUnitOfWork } from '@modules/category/database/category.unit-of-work';
import { ClassProvider } from '@nestjs/common';

export const categoryUnitOfWorkSingletonProvider: ClassProvider = {
  provide: 'CategoryUnitOfWorkPort',
  useClass: CategoryUnitOfWork,
};
