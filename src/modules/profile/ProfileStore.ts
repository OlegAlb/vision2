import { makeAutoObservable } from 'mobx';

import { Profile } from './models/Profile';
import { Nullable } from '../../base/types/BaseTypes';

export class ProfileStore {
  userLoader: boolean = false;
  profile: Nullable<Profile> = null;

  constructor() {
    makeAutoObservable(this);
  }

  changeProfile = () => {
    // this.setProfile(this.userService.changeProfile());
  };

  setLoading = (value: boolean) => {
    this.userLoader = value;
  };

  setProfile = (profile: Profile) => {
    this.profile = profile;
  };
}
