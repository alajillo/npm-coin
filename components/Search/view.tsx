import SuggestionList from '@components/SuggestionList';
import PackageDetail from '@components/PackageDetail';

type SearchViewProps = {
    keyword: string;
    handleInput: React.ChangeEventHandler<HTMLInputElement>;
};
export default function SearchView({ keyword, handleInput }: SearchViewProps) {
    return (
        <div className="flex flex-col w-1/2 h-1/2 p-0">
            <input
                className="border-violet-400 border-2 rounded outline-violet-400 text-lg px-2"
                type="text"
                value={keyword}
                onChange={handleInput}
            />
            {keyword && <SuggestionList keyword={keyword} />}
            <PackageDetail packageName="react" />
        </div>
    );
}
