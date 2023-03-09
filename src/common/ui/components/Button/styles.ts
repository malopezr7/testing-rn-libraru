import styled from 'styled-components/native';
import {Text} from 'common';
import {RectButton} from 'react-native-gesture-handler';
import {backgroundColor, textColor} from './constants';
import type {ContainerProps, TextProps} from './types';

export const Container = styled.View<ContainerProps>`
  background-color: ${({variant}) => backgroundColor[variant]};
  border-radius: 16px;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 16px;
  height: 48px;
  justify-content: center;
`;

export const Title = styled(Text)<TextProps>`
  color: ${({variant}) => textColor[variant]};
`;
