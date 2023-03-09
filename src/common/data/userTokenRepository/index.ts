import storage from 'common/data/mmkv';
import {useMMKVString} from 'react-native-mmkv';

export const KEY_USER_TOKEN = 'user-token';

export const setToken = (data: string) => {
  storage.set(KEY_USER_TOKEN, data);
};

export const getToken = () => storage.getString(KEY_USER_TOKEN);

export const clearToken = () => {
  storage.delete(KEY_USER_TOKEN);
};

const useUserTokenRepository = () => {
  const [userToken] = useMMKVString(KEY_USER_TOKEN);

  return {logged: !!userToken, setToken, getToken, clearToken};
};

export default useUserTokenRepository;
