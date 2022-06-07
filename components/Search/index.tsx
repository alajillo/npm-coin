import SuggestionList from '@components/SuggestionList';
import PackageDetail from '@components/PackageDetail';
import useSearch from '@hooks/useSearch';
function Search() {
    const { keyword, handleInput } = useSearch();
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

export default Search;
