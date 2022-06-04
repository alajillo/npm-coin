import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SlotItem from './SlotItem';

export default {
    title: 'Example/SlotItem',
    component: SlotItem,
} as ComponentMeta<typeof SlotItem>;

const Template: ComponentStory<typeof SlotItem> = () => (
    <>
        <div className="flex">
            <SlotItem targetNumber={1} duration={10} />
            <SlotItem targetNumber={2} duration={15} />
            <SlotItem targetNumber={3} duration={20} />
            <SlotItem targetNumber={4} duration={25} />
            <SlotItem targetNumber={5} duration={30} />
            <SlotItem targetNumber={6} duration={35} />
        </div>
    </>
);

export const Primary = Template.bind({});
