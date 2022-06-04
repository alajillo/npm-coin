import { PackageInfo } from '../types/type';
function SuggestionList({
    isLoading,
    list,
    selectedIndex,
    onSelect,
}: {
    isLoading: boolean;
    list: PackageInfo[];
    selectedIndex: number;
    onSelect: (key: number) => void;
}) {
    return (
        <ul className=" bg-lime-200 overscroll-none overflow-auto w-11/12 p-2">
            {!isLoading ? (
                list.map((item, key) => (
                    <li
                        onClick={(e) => {
                            console.log(e.target);
                            onSelect(key);
                        }}
                        key={key}
                        className={`flex flex-col mb-2 ${
                            key === selectedIndex ? 'bg-gray-200' : ''
                        } hover:bg-gray-200`}
                    >
                        <span className="text-xl">{item.name}</span>
                        <span className="text-sm">{item.description}</span>
                    </li>
                ))
            ) : (
                <span className="text-xl">loading...</span>
            )}
        </ul>
    );
}

export default SuggestionList;
