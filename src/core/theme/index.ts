import {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {colors} from './colors';
import {device} from './device';

const theme = Object.freeze({
  colors,
  device,
});

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
