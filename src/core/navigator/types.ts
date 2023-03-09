import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreensParams {}
  }
}

export type ScreensParams = {
  Blank: undefined;
};

export type RootTabParamList = {
  Zero: undefined;
  One: undefined;
  Two: undefined;
  Three: undefined;
};

export type MainStackScreenProps<Screen extends keyof ScreensParams> =
  NativeStackScreenProps<ScreensParams, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<ScreensParams>
  >;

export type Props = {};
