import AbstractDto from '../../../base/AbstractDto';
import { Nullable } from '../../../base/types/BaseTypes';

export default class ProfileDto extends AbstractDto {
  name: Nullable<string> = null;
  phone: Nullable<string> = null;
  height: Nullable<string> = null;
  age: Nullable<string> = null;
  gender: Nullable<string> = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
