import FormValidationHelper from '../../../helpers/FormValidationHelper';
import { Gender } from '../types/authTypes';

export const RegisterForm = {
  name: '',
  phone: '',
  gender: Gender.male,
  height: '',
  age: '',

  isFormValid: function () {
    return (
      FormValidationHelper.isRequired(this.name) &&
      FormValidationHelper.isPhoneValid(this.phone) &&
      FormValidationHelper.isRequired(this.phone) &&
      FormValidationHelper.isRequired(this.gender) &&
      FormValidationHelper.isNumber(this.height) &&
      FormValidationHelper.isRequired(this.height) &&
      FormValidationHelper.isNumber(this.age) &&
      FormValidationHelper.isRequired(this.age)
    );
  },
};

export interface RegisterForm {
  name: string;
  phone: string;
  gender: Gender;
  height: string;
  age: string;

  isFormValid: () => boolean;
}

export enum RegisterFormFields {
  name = 'name',
  phone = 'phone',
  gender = 'gender',
  height = 'height',
  age = 'age',
}
