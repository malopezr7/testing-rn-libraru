import type {FC} from 'react';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBarBottom} from 'common';
import {BlankTab} from 'views/Main/Tabs';
import {tabStackScreenOptions} from './constants';

const {Navigator, Screen} = createBottomTabNavigator();

const tabBar = (props: BottomTabBarProps) => <TabBarBottom {...props} />;

const TabBarStack: FC = () => (
  <Navigator
    tabBar={tabBar}
    initialRouteName="Zero"
    screenOptions={tabStackScreenOptions}>
    <Screen name="Zero" component={BlankTab} />
    <Screen name="One" component={BlankTab} />
    <Screen name="Two" component={BlankTab} />
    <Screen name="Three" component={BlankTab} />
  </Navigator>
);

export default TabBarStack;
