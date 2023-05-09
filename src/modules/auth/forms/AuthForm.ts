import FormValidationHelper from '../../../helpers/FormValidationHelper';

export const AuthForm = {
  phone: '',

  isFormValid: function () {
    return (
      FormValidationHelper.isPhoneValid(this.phone) &&
      FormValidationHelper.isRequired(this.phone)
    );
  },
};

export interface AuthForm {
  phone: string;

  isFormValid: () => boolean;
}

export enum AuthFormFields {
  phone = 'phone',
}
