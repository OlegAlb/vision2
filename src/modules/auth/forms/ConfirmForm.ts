import FormValidationHelper from '../../../helpers/FormValidationHelper';

export const ConfirmForm = {
  phone: '',
  code: '',

  isFormValid: function () {
    return (
      FormValidationHelper.isPhoneValid(this.phone) &&
      FormValidationHelper.isRequired(this.phone) &&
      FormValidationHelper.isCodeValid(this.code) &&
      FormValidationHelper.isRequired(this.code)
    );
  },
};

export interface ConfirmForm {
  phone: string;
  code: string;

  isFormValid: () => boolean;
}

export enum ConfirmFormFields {
  phone = 'phone',
  code = 'code',
}