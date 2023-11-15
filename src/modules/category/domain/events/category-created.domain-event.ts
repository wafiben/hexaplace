import { DomainEvent } from '@libs/ddd/domain/domain-events';
import { DomainEventProps } from '@src/libs/ddd/domain/domain-events/domain-event-props.base';


export class CategoryCreatedDomainEvent extends DomainEvent {
  constructor(props: DomainEventProps<CategoryCreatedDomainEvent>) {
    super(props);
  }
}
