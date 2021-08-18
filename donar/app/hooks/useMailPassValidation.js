import {useEffect, useState} from 'react';
import validator from 'validator';

//TODO: esto sacarlo, la validación tiene que ser parte de la lógica de negocio tiene que estar en el class component y pasarle handler via props
//TODO:  los requisitos de validación tienen que estar en otro archivo 
/*
{
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
      }
*/
export const useMailPassValidation = (
  mail = '',
  pass = '',
  confirmPass = pass,
) => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isStrongPassword, setIsStrongPassword] = useState(false);
  const [isEqualPassword, setIsEqualPassword] = useState(false);

  useEffect(() => {
    if (validator.isEmail(mail)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }

    if (
      validator.isStrongPassword(pass, {
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      setIsStrongPassword(true);
    } else {
      setIsStrongPassword(false);
    }

    if (pass === confirmPass) {
      setIsEqualPassword(true);
    } else {
      setIsEqualPassword(false);
    }
  }, [
    isValidEmail,
    isStrongPassword,
    isEqualPassword,
    mail,
    pass,
    confirmPass,
  ]);

  return {
    isValidEmail,
    isStrongPassword,
    isEqualPassword,
  };
};
