import type {FC} from 'react';
import {Button, Container, Text} from './styles';
import type {Props} from './types';
import useViewModel from './useViewModel';

export const BlankTab: FC<Props> = () => {
  const {handleLogout} = useViewModel();
  return (
    <Container>
      <Text>Tab screen</Text>
      <Button
        onPress={handleLogout}
        testID="logout_button"
        title="Fake logout"
      />
    </Container>
  );
};
