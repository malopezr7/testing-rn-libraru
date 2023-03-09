import i18n from 'i18next';
import {string} from 'yup';

export const validateEmail = string()
  .trim()
  .email(i18n.t('yup.invalid.email'))
  .required(i18n.t('yup.required.email'));
