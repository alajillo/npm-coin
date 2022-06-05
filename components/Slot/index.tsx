import SlotItem from './SlotItem';

type SlotProps = {
    count: number;
    duration: number;
};

function Slot({ count, duration }: SlotProps) {
    const countArray: string[] = String(count).split('');

    return (
        <div className="flex">
            {countArray.map((value: string, key: number) => (
                <SlotItem
                    key={key}
                    targetNumber={Number(value)}
                    duration={(key + 1) * duration}
                    size={10}
                    textColor="#38bdf8"
                />
            ))}
        </div>
    );
}

export default Slot;
