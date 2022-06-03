import React from 'react';
import useSlotItem from './useSlotItem';
interface SlotItemProps {
    name: string;
}
function SlotItem({ name }: SlotItemProps) {
    const canvas = useSlotItem();
    return (
        <>
            <h1>{name}</h1>
            <canvas ref={canvas} className="w-28 h-28"></canvas>
        </>
    );
}

export default SlotItem;
