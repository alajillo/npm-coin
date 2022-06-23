import React from 'react';
import useSlotItem from './useSlotItem';

type SlotItemProps = {
    duration: number;
    targetNumber: number;
    size: number;
    textColor: string;
};

function SlotItem({ duration, targetNumber, size, textColor }: SlotItemProps) {
    const canvasRef = useSlotItem(duration, targetNumber, textColor);
    return (
        <canvas
            ref={canvasRef}
            width={`${size * 3}`}
            height={`${size * 5}`}
        ></canvas>
    );
}

export default SlotItem;
