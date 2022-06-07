import SuggestionList from '@components/SuggestionList';
import PackageDetail from '@components/PackageDetail';

type SearchViewProps = {
    keyword: string;
    handleInput: React.ChangeEventHandler<HTMLInputElement>;
};
export default function SearchView({ keyword, handleInput }: SearchViewProps) {
    return (
        <div className="flex flex-col">
            <input
                className="w-1/2 h-1/2"
                type="text"
                value={keyword}
                onChange={handleInput}
            />
            {keyword && <SuggestionList keyword={keyword} />}
            <PackageDetail packageName="react" />
        </div>
    );
}
