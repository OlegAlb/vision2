import AbstractDto from '../../../base/AbstractDto';
import { Nullable } from '../../../base/types/BaseTypes';

export default class UpdateProfileDto extends AbstractDto {
  displayName: Nullable<string> = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
