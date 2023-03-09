import i18n from 'i18next';
import {ref, string} from 'yup';

export const validatePassword = string()
  .matches(new RegExp('^([^\\s]{8,})$'), i18n.t('yup.invalid.passwordLength'))
  .required(i18n.t('yup.required.password'));

export const confirmationPassword = (field: string = 'password') =>
  string()
    .required(i18n.t('yup.required.field'))
    .oneOf([ref(field)], i18n.t('yup.confirmation.password'));
