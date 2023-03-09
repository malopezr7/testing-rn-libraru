import i18n from 'i18next';
import {string} from 'yup';

export const validateLastName = string().required(
  i18n.t('yup.required.lastName'),
);
