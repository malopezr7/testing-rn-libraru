import type {FC} from 'react';
import PlusIcon from './PlusIcon';

import type {IconProps} from './types';

const createSvgIcons = <T extends {[name: string]: FC<IconProps>}>(
  cfg: T,
): Record<keyof T, FC<IconProps>> => cfg;

export const icons = createSvgIcons({
  plus: PlusIcon,
});
