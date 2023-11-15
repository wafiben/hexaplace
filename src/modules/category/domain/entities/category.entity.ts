import { AggregateRoot } from '@libs/ddd/domain/base-classes/aggregate-root.base';
import { Guard } from '@libs/ddd/domain/guard';
import { DateVO } from '@libs/ddd/domain/value-objects/date.value-object';
import { CategoryCreatedDomainEvent } from '@modules/category/domain/events/category-created.domain-event';
import { CategoryNameRequiredError } from '@modules/category/errors/category-name-required.error';
import { CategoryDescriptionRequiredError } from '@modules/category/errors/category-description-required.error';
import { CategorytId } from '../value-objects/category-id.value-object';

export interface CreateCategoryProps {
  id?: string;
  createdDate?: DateVO;
  name: string;
  description: string;
  parentId?: string;
}

export interface CategoryProps {
  createdDate?: DateVO;
  name: string;
  description: string;
  parentId?: string;
}

export class CategoryEntity extends AggregateRoot<CategoryProps> {
  protected readonly _id: CategorytId;

  static create(create: CreateCategoryProps): any {
    const id: CategorytId = create.id
      ? new CategorytId(create.id)
      : CategorytId.generate();
    const props: CreateCategoryProps = {
      name: create.name,
      description: create.description,
      parentId: create.parentId,
    };
    const categoryEntity = new CategoryEntity({
      id,
      createdDate: create.createdDate,
      props,
    });

    categoryEntity.emitEvent(
      new CategoryCreatedDomainEvent({
        aggregateId: id.value,
        ...props,
      }),
    );

    return CategoryEntity;
  }

  /*   approve(): void {
    this.updateStatusIfApplicable(ProductStatus.APPROVED);
    this.emitEvent(
      new ProductApprovedDomainEvent({ aggregateId: this.id.value }),
    );
  } */

  /* reject(reason: string): void {
    this.updateStatusIfApplicable(ProductStatus.REJECTED);
    this.emitEvent(
      new ProductRejectedDomainEvent({
        aggregateId: this.id.value,
        reason,
      }),
    );
  } */

  /*   markAsDeleted(): void {
    this.updateStatusIfApplicable(ProductStatus.ARCHIVED);
  } */

  /*   private updateStatusIfApplicable(status: ProductStatus): void {
    if (this.props.status === ProductStatus.ARCHIVED) {
      throw new ProductAlreadyArchivedError();
    }
    this.props.status = status;
  } */

  validate(): void {
    if (Guard.isEmpty(this.props.name)) throw new CategoryNameRequiredError();
    if (Guard.isEmpty(this.props.description))
      throw new CategoryDescriptionRequiredError();
  }
}
