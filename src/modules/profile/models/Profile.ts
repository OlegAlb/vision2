import AbstractModel from '../../../base/AbstractModel';

import { Nullable } from '../../../base/types/BaseTypes';

export class Profile extends AbstractModel {
  id: Nullable<number> = null;
  gender: Nullable<string> = null;

  constructor(props: any) {
    super();
    this.load(props);
  }
}
