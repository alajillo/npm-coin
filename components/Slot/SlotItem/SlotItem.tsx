import React from 'react';

interface SlotItemProps {
    name: string;
}
function SlotItem({ name }: SlotItemProps) {
    return <div className=" text-blue-800">{name}</div>;
}

export default SlotItem;
