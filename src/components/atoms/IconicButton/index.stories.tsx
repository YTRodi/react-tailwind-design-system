import { Cog6ToothIcon } from '@heroicons/react/20/solid';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import IconicButton from './';

export default {
  title: 'IconicButton',
  component: IconicButton,
  args: {
    icon: <Cog6ToothIcon />,
  },
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
      defaultValue: 'primary',
    },
    size: {
      control: {
        type: 'select',
        options: ['big', 'medium', 'small'],
      },
      defaultValue: 'medium',
    },
    loading: {
      type: 'boolean',
      defaultValue: false,
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof IconicButton>;

const Template: ComponentStory<typeof IconicButton> = (args) => (
  <IconicButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Big = Template.bind({});
Big.args = {
  size: 'big',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
