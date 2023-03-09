import styled, {css} from 'styled-components/native';
import {Text} from 'common';
import {BorderlessButton} from 'react-native-gesture-handler';
import type {LabelProps} from './types';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled(BorderlessButton).attrs(() => ({
  activeOpacity: 1,
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const focusedLabelStyles = css`
  color: ${({theme}) => theme.colors.red};
`;

export const Label = styled(Text).attrs(() => ({
  family: undefined,
}))<LabelProps>`
  font-size: 12px;
  line-height: 17px;
  margin-top: 8px;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  ${({focused}) => focused && focusedLabelStyles}
`;
