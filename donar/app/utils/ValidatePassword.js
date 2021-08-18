import validator from 'validator';
export function ValidatePassword(password = '') {
  return validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 0,
    minUppercase: 0,
    minNumbers: 1,
    minSymbols: 0,
  });
}
