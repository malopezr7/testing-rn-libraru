import {useCallback} from 'react';
import {i18n} from 'core';
import type {DictionaryKey} from 'core/i18n/types';
import type {LogicParams} from './types';

const useLogic = ({jumpTo, routeName}: LogicParams) => {
  const onPress = useCallback(() => {
    jumpTo(routeName);
  }, [jumpTo, routeName]);

  const title = i18n.t(`tabs.${routeName}` as DictionaryKey);

  return {title, onPress};
};

export default useLogic;
