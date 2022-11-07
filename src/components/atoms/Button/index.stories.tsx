import { PlusCircleIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      type: 'string',
      defaultValue: 'Button',
    },
    appearance: {
      control: {
        type: 'select',
        options: ['solid', 'text'],
      },
      defaultValue: 'solid',
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
      defaultValue: 'primary',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'big'],
      },
      defaultValue: 'medium',
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    loading: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

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

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading',
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  leftIcon: <PlusCircleIcon />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  rightIcon: <ChevronRightIcon />,
};
