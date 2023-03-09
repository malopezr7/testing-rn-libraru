import {useCallback} from 'react';
import {useAuthRepository} from 'features/Auth';

const useViewModel = () => {
  const {logout} = useAuthRepository();
  const handleLogout = useCallback(async () => {
    await logout();
  }, [logout]);

  return {handleLogout};
};

export default useViewModel;
