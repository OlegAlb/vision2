
import AbstractModel from '../../../base/AbstractModel';
import { Nullable } from '../../../base/types/BaseTypes';

export class AuthAccess extends AbstractModel {
  type: Nullable<string> = null;
  accessToken: Nullable<string> = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
