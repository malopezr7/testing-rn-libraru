import {colors} from 'core/theme/colors';
import type {ButtonVariant} from './types';

export const backgroundColor: Record<ButtonVariant, string> = {
  primary: colors.blue,
  secondary: colors.yellow,
};

export const textColor: Record<ButtonVariant, string> = {
  primary: colors.white,
  secondary: colors.black,
};
