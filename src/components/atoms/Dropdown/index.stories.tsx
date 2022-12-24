import type { ComponentStory, ComponentMeta } from '@storybook/react';

import InputStory from '../Input/index.stories';

import Dropdown from './';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    ...InputStory.argTypes,
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {};

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
