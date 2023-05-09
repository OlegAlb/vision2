import React from 'react';

import { AuthStore } from './modules/auth/AuthStore';
import { ProfileStore } from './modules/profile/ProfileStore';

class RootStore {
  authStore: AuthStore;
  profileStore: ProfileStore;

  constructor() {
    this.authStore = new AuthStore();
    this.profileStore = new ProfileStore();
  }

  sync = async () => {
    await Promise.all(
      Object.values(this).map(store => {
        return store?.sync ? store?.sync() : Promise.resolve();
      }),
    );
  };
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);