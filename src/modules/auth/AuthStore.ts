import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { makeAutoObservable, set } from 'mobx';
import { AuthForm, AuthFormFields } from './forms/AuthForm';

import { Nullable } from '../../base/types/BaseTypes';
import { ConfirmForm, ConfirmFormFields } from './forms/ConfirmForm';
import { RegisterForm, RegisterFormFields } from './forms/RegisterForm';
import { Profile } from '../profile/models/Profile';
import UpdateProfileDto from '../profile/dto/UpdateProfileDto';
import { UpdateProfile } from '../profile/models/UpdateProfile';
import ProfileDto from '../profile/dto/ProfileDto';


export class AuthStore {
  authUser: Nullable<FirebaseAuthTypes.User> = null;

  authForm = AuthForm;
  registerForm = RegisterForm;
  confirmForm = ConfirmForm;

  constructor() {
    makeAutoObservable(this);
  }

  checkAuth = () => {
    auth().onAuthStateChanged(authuser => {
      this.setAuthUser(authuser)
    });
  }

  setAuthUser = (authUser: Nullable<FirebaseAuthTypes.User>) => {
    this.authUser = authUser
  };

  updateProfile = () => {
    const updateData = UpdateProfileDto.populate({
      displayName: this.registerForm.name
    }) as UpdateProfileDto;

    auth().currentUser?.updateProfile(updateData as FirebaseAuthTypes.UpdateProfile);
  }

  register = async (userId:string) => {
    const registerData = ProfileDto.populate(this.registerForm);

    await firestore().collection('Users').doc(userId).set(registerData);
  }

  handleAuthStateChanged = (callback: (user: Nullable<FirebaseAuthTypes.User>) => void) => {
    auth().onAuthStateChanged(callback)
  }

  loginWithPhoneNumber = (phone: string) => {
    return auth().signInWithPhoneNumber(phone)
  }

  logout = async () => {
    await auth().signOut();
    this.resetAuthUser();
  };

  resetAuthUser = () => {
    this.authUser = null;
  }

  changeAuthForm = (key: AuthFormFields, value: any) => {
    set(this.authForm, key, value);
  };

  changeRegisterForm = (key: RegisterFormFields, value: any) => {
    set(this.registerForm, key, value);
  };

  changeConfirmForm = (key: ConfirmFormFields, value: any) => {
    set(this.confirmForm, key, value);
  };

  resetAuthForm = () => {
    this.authForm = AuthForm;
  }
}
