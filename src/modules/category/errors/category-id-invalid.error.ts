import { ArgumentInvalidException } from '@src/libs/exceptions';

export class CategoryIdInvalidError extends ArgumentInvalidException {
  static readonly msg = 'CATEGORY.ID_INVALID';

  constructor(metadata?: unknown) {
    super(CategoryIdInvalidError.msg, metadata);
  }
}
