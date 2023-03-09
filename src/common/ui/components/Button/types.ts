import type {StyleProp, ViewStyle} from 'react-native';

export type ButtonVariant = 'primary' | 'secondary';

export type Props = {
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  title?: string;
  variant?: ButtonVariant;
};

export type ContainerProps = {
  variant: NonNullable<Props['variant']>;
};

export type TextProps = {
  variant: NonNullable<Props['variant']>;
};
