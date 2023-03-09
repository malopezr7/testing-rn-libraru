import type {Props} from './types';
import {BlankAuth} from '.';

export default {
  title: 'Screen: BlankAuth',
  component: BlankAuth,
  args: {} as Props,
};

export const ScreenAuthBase = (props: Props) => <BlankAuth {...props} />;
