export default class FormValidationHelper {
  static isEmailValid = (email: string) => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;

    return reg.test(email);
  };

  static isPhoneValid = (phone: string) => {
    const reg = /^[\+][0-9]\s?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2}\s[0-9]{2}$/;

    return reg.test(phone);
  }

  static isCodeValid = (code: string) => {
    const reg = /^[0-9]{4}$/;

    return reg.test(code);
  }

  static isNumber = (age: string) => {
    return !isNaN(Number(age));
  } 

  static isRequired = (field: string) => {
    return field.length !== 0;
  };
}