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
        <>
            {list.length && (
                <ul className="bg-white border-violet-300 border-1 overflow-y-scroll fixed top-8 rounded inherit">
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
                                <span className="text-sm">
                                    {item.description}
                                </span>
                            </li>
                        ))
                    ) : (
                        <span className="text-xl">loading...</span>
                    )}
                </ul>
            )}
        </>
    );
}

export default SuggestionListView;
