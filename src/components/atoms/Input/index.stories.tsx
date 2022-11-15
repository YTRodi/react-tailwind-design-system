import { PlusCircleIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['big', 'medium', 'small'],
      },
      defaultValue: 'medium',
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {};

export const Big = Template.bind({});
Big.args = {
  size: 'big',
};

export const Invalid = Template.bind({});
Invalid.args = {
  isInvalid: true,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  leftIcon: <PlusCircleIcon />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  rightIcon: <ChevronRightIcon />,
};

export const LeftAndRightIcon = Template.bind({});
LeftAndRightIcon.args = {
  leftIcon: <PlusCircleIcon />,
  rightIcon: <ChevronRightIcon />,
};
