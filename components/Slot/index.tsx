import SlotItem from './SlotItem';

type SlotProps = {
    count: number;
};

function Slot({ count }: SlotProps) {
    const countArray: string[] = String(count).split('');

    return (
        <div className="flex">
            {countArray.map((value: string, key: number) => (
                <SlotItem
                    key={key}
                    targetNumber={Number(value)}
                    duration={(key + 1) * 1.5}
                />
            ))}
        </div>
    );
}

export default Slot;
