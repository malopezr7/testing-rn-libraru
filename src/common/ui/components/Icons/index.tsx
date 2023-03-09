import type {FC} from 'react';
import React, {memo} from 'react';
import {icons} from './icons';
import type {Props} from './types';

const Icons: FC<Props> = ({name, ...props}) => {
  const IconComponent = icons[name];

  return <IconComponent {...props} />;
};

export default memo(Icons);
