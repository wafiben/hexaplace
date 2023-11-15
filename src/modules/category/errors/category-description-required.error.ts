import { ArgumentInvalidException } from '@src/libs/exceptions';

export class CategoryDescriptionRequiredError extends ArgumentInvalidException {
  static readonly msg = 'CATEGORY.DESCRIPTION_CAN_NOT_BE_EMPTY_ERROR';

  constructor(metadata?: unknown) {
    super(CategoryDescriptionRequiredError.msg, metadata);
  }
}
