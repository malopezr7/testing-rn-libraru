import {createRef} from 'react';
import type {NavigationContainerRef, RouteProp} from '@react-navigation/native';
import type {ScreensParams} from 'core/navigator/types';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export const navigate = <T extends keyof ScreensParams>(
  to: T,
  params?: RouteProp<ScreensParams, T>['params'],
) => {
  const canNavigate = navigationRef.current?.isReady();
  if (canNavigate) {
    return;
  }

  navigationRef.current?.navigate(to, params);
};
