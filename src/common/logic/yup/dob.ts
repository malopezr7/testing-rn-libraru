import i18n from 'i18next';
import {date} from 'yup';

export const validateDob = date().required(i18n.t('yup.required.dob'));
