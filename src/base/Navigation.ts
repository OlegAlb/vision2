import { createNavigationContainerRef } from '@react-navigation/native';
import { Tabs } from '../navigation/consts/tabs';

export interface NavigationParams {
  [key: string]: any;
}

export default class Navigation {
  static actionQueue: (() => void)[] = [];

  static navigationRef = createNavigationContainerRef<any>();

  static initialRoute: string = Tabs.TAB_LOOKS;

  static setInitialRoute = (route: string) => {
    this.initialRoute = route;
  };

  static navigate = (
      routeName: string,
      params?: NavigationParams,
  ) => {
    if(this.navigationRef.isReady()){
      this.navigationRef.navigate(routeName, params)
    }
  };

  static replace = (
    routeName: string, 
    params?: NavigationParams
  ) => {
    if(this.navigationRef.isReady()){
      this.navigationRef.reset({
        index: 0,
        routes: [{ name: routeName, params: params }],
      });
    }
  };

  static pop = () => {
    this.navigationRef.goBack();
  };

  static addActionQueue = (callback: () => void) => {
    this.actionQueue.push(callback)
  }

  static runActionQueue = () => {
    this.actionQueue.forEach(fn => fn())
  }
}
