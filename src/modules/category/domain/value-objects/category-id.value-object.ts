import { UUID } from '@libs/ddd/domain/value-objects/uuid.value-object';

export class CategorytId extends UUID {
  static generate(): CategorytId {
    return new CategorytId(UUID.generate().value);
  }
}
