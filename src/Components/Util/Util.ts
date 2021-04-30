export interface Form {
  type: string;
  minLength?: number;
  isValid: boolean;
  errorText?: string;
  label: string;
  name: string;
  errorMinLength?: string;
  value: string;
  error: boolean;
  required?: boolean;
}
export const checkValue = (el: Form, value: string) => {
  value.length === 0
    ? (el.errorText = `لطفا ${el.label} را وارد کنید`)
    : (el.errorText = "");
  return el.errorText;
};
export const checkMinlength = (el: Form, num: number) => {
  if (el.minLength) {
    el.minLength > num
      ? (el.errorMinLength = `${el.label} نباید کمتر از ${el.minLength} عدد باشد`)
      : (el.errorMinLength = "");
    return el.errorMinLength;
  }
};
export const checkVlidateElForError = (el: Form) => {
  let error = true;
  if (!el) {
    return true;
  }
  let valueEl = el.value.trim();
  if (el.value) {
    error = valueEl === "" && error;
  }
  if (el.minLength) {
    error = valueEl.length <= el.minLength - 1;
  }
  return error;
};
export const checkValidateEl = (el: Form) => {
  let isValid = true;
    if (!el) {
      return true;
    }
    if (el.value) {
      isValid = el.value.trim() !== '' && isValid;
    }
    if (el.minLength) {
      isValid = el.value.length <= el.minLength && isValid;
    }
    return isValid;
};
