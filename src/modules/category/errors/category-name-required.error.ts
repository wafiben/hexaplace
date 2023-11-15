import { ArgumentInvalidException } from '@src/libs/exceptions';

export class CategoryNameRequiredError extends ArgumentInvalidException {
  static readonly msg = 'CATEGORY.NAME_CAN_NOT_BE_EMPTY_ERROR';

  constructor(metadata?: unknown) {
    super(CategoryNameRequiredError.msg, metadata);
  }
}
