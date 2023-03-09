import storage from 'common/data/mmkv';

const getItem = async (key: string) => storage.getString(key);

const setItem = async (key: string, value: string) => {
  try {
    storage.set(key, value);
    return true;
  } catch {
    return false;
  }
};

const removeItem = async (key: string) => {
  try {
    storage.delete(key);
    return true;
  } catch {
    return false;
  }
};

const setupApolloMMKVStorage = () => ({getItem, setItem, removeItem});

export default setupApolloMMKVStorage;
