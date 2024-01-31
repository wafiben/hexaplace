import { TypeormEntityBase } from '@libs/ddd/infrastructure/database/base-classes/typeorm.entity.base';
import { Column, Entity } from 'typeorm';

@Entity('category')
export class CategoryOrmEntity extends TypeormEntityBase {
  constructor(props?: CategoryOrmEntity) {
    super(props);
  }

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  parentid: string ;
}
