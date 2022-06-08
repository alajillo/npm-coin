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
        <ul className=" bg-violet-200 overflow-y-scroll w-full p-2 fixed top-8 rounded">
            {!isLoading ? (
                list.map((item, key) => (
                    <li
                        onClick={() => {
                            onSelect(key);
                        }}
                        key={key}
                        className={`
                        flex flex-col mb-2 hover:bg-violet-50 p-2 rounded
                         ${key === selectedIndex ? 'bg-violet-50' : ''}
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
