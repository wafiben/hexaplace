import { Query } from '@libs/ddd/domain/base-classes/query-handler.base';

// Query is a plain object with properties
export class GetCategorytQuery extends Query {
  readonly id: string;

  constructor(props: GetCategorytQuery) {
    super();
    this.id = props.id;
  }
}
