import { PackageInfo } from 'types/package';

type SuggestionListViewProps = {
    isLoading: boolean;
    list: PackageInfo[];
    selectedIndex: number;
    onSelect: (key: number) => void;
};
function SuggestionListView({
    isLoading,
    list,
    selectedIndex,
    onSelect,
}: SuggestionListViewProps) {
    return (
        <ul className=" bg-blue-300 overscroll-none overflow-auto w-11/12 p-2 fixed top-5">
            {!isLoading ? (
                list.map((item, key) => (
                    <li
                        onClick={() => {
                            onSelect(key);
                        }}
                        key={key}
                        className={`
                        flex flex-col mb-2 hover:bg-gray-100 p-2
                         ${key === selectedIndex ? 'bg-gray-100' : ''}
                         `}
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

export default SuggestionListView;
