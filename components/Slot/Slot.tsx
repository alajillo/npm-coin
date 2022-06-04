import SlotItem from './SlotItem/SlotItem';

function Slot({ count }: { count: number }) {
    const countArray: string[] = String(count).split('');

    return (
        <div className="flex">
            {countArray.map((value: string, key: number) => (
                <SlotItem
                    key={key}
                    targetNumber={Number(value)}
                    duration={(key + 1) * 5}
                />
            ))}
        </div>
    );
}

export default Slot;
