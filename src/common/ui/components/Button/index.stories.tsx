import {action} from '@storybook/addon-actions';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button variant="primary" title="Primary" onPress={action('onPress')} />
);

export const PrimaryLoading = () => (
  <Button
    variant="primary"
    title="Primary loading"
    onPress={action('onPress')}
    loading
  />
);

export const Secondary = () => (
  <Button variant="secondary" title="Secondary" onPress={action('onPress')} />
);

export const SecondaryLoading = () => (
  <Button
    variant="secondary"
    title="Secondary loading"
    onPress={action('onPress')}
    loading
  />
);
