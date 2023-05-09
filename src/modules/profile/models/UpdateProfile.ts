import AbstractModel from '../../../base/AbstractModel';

import { Nullable } from '../../../base/types/BaseTypes';

export class UpdateProfile extends AbstractModel {
  displayName: Nullable<string> = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
