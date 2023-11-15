import { CommandProps } from '@src/libs/ddd/domain/base-classes/command-props.base';
import { Command } from '@src/libs/ddd/domain/base-classes/command.base';

export class ModifyCategoryCommand extends Command {
  readonly categoryId: string;

  readonly name?: string;

  readonly description?: string;

  readonly parentId?: string;

  constructor(props: CommandProps<ModifyCategoryCommand>) {
    super(props);
    this.categoryId = props.categoryId;
    this.name = props.name;
    this.description = props.description;
    this.parentId = props.parentId;
  }
}
