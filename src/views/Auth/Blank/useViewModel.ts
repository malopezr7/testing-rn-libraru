import {useCallback} from 'react';
import {useAuthRepository} from 'features/Auth';

const useViewModel = () => {
  const {login} = useAuthRepository();
  const handleFakeLogin = useCallback(() => {
    login({email: 'fake@email.com', password: 'fakePassword'});
  }, [login]);

  return {handleFakeLogin};
};

export default useViewModel;
