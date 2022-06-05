import React from 'react';
import useSlotItem from '@hooks/useSlotItem';
interface SlotItemProps {
    duration: number;
    targetNumber: number;
}
function SlotItem({ duration, targetNumber }: SlotItemProps) {
    const canvasRef = useSlotItem(duration, targetNumber);
    return <canvas ref={canvasRef} className="w-20 h-28 p-0"></canvas>;
}

export default SlotItem;
