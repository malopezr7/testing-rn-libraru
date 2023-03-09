import {InMemoryCache} from '@apollo/client';
import {MMKVStorageWrapper, persistCacheSync} from 'apollo3-cache-persist';
import fragmentMatcher from '../generated/fragmentMatcher';
import setupMMKVStorage from '../storage';

const setupCache = () => {
  const cache = new InMemoryCache({...fragmentMatcher});
  const mmkvStorage = setupMMKVStorage();
  const storage = new MMKVStorageWrapper(mmkvStorage);
  persistCacheSync({cache, storage});
  return cache;
};

export default setupCache;
