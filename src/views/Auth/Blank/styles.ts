import styled from 'styled-components/native';
import {Button as ButtonBase} from 'common';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
`;

export const Text = styled.Text`
  text-align: center;
`;

export const Button = styled(ButtonBase)`
  margin-top: 20px;
`;
