import { CommandProps } from '@src/libs/ddd/domain/base-classes/command-props.base';
import { Command } from '@src/libs/ddd/domain/base-classes/command.base';

export class CreateCategoryCommand extends Command {
  readonly id?: string;

  readonly name: string;

  readonly description: string;

  readonly parentId?: string;

  constructor(props: CommandProps<CreateCategoryCommand>) {
    super(props);
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.parentId = props.parentId;
  }
}
