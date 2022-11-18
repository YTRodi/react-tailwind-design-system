import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Textarea from './';

export default {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    characterLimit: {
      control: {
        type: 'number',
      },
      defaultValue: undefined,
    },
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const WithoutCharacterLimit = Template.bind({});
WithoutCharacterLimit.args = {};

export const WithCharacterLimit = Template.bind({});
WithCharacterLimit.args = {
  characterLimit: 10,
};
