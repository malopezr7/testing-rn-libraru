import type {Props} from './types';
import {BlankTab} from '.';

export default {
  title: 'Screen: TabMain',
  component: BlankTab,
  args: {} as Props,
};

export const ScreenTabBase = (props: Props) => <BlankTab {...props} />;
