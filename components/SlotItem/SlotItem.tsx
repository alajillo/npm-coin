import React from 'react';
import useSlotItem from './useSlotItem';
interface SlotItemProps {
    duration: number;
    targetNumber: number;
}
function SlotItem({ duration, targetNumber }: SlotItemProps) {
    const canvas = useSlotItem(duration, targetNumber);
    return <canvas ref={canvas} className="w-20 h-28 p-0"></canvas>;
}

export default SlotItem;
