import { CommandProps } from '@src/libs/ddd/domain/base-classes/command-props.base';
import { Command } from '@src/libs/ddd/domain/base-classes/command.base';

export class DeleteCategoryCommand extends Command {
  readonly id: string;

  constructor(props: CommandProps<DeleteCategoryCommand>) {
    super(props);
    this.id = props.id;
  }
}
