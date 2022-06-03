import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SlotItem from './SlotItem';

export default {
    title: 'Example/SlotItem',
    component: SlotItem,
} as ComponentMeta<typeof SlotItem>;

const Template: ComponentStory<typeof SlotItem> = (args) => (
    <SlotItem {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    name: 'Slot Item Component',
};
