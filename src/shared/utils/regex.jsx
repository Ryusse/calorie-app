export const Regex = {
  email: /^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password:
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{10,}$/,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g,
  hasFiveCharacter: /\b\d{5}\b/g,
  hastJustNumber: /^[0-9]+$/g,
  hasAtLeastOneDigit: /\d/,
  hasAtLeastOneUppercase: /[A-Z]/,
  hasAtLeastOneLowercase: /[a-z]/,
  hasAtLeastSpecialCharacter: /[\W]/,
};
