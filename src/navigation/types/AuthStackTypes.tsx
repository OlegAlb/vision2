import { RouteProp } from '@react-navigation/native';

export type AuthStackParamList = {
  AUTH_CODE: {
    phone: string;
    isRegister?: boolean;
  };
};

export type AuthCodeRouteProps = RouteProp<AuthStackParamList, 'AUTH_CODE'>;
