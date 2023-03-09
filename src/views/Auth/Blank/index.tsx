import type {FC} from 'react';
import {Button, Container, Text} from './styles';
import type {Props} from './types';
import useViewModel from './useViewModel';

export const BlankAuth: FC<Props> = () => {
  const {handleFakeLogin} = useViewModel();
  return (
    <Container>
      <Text>Auth screen</Text>
      <Button
        testID="login_button"
        title="Fake login"
        onPress={handleFakeLogin}
      />
    </Container>
  );
};
