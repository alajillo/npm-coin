import SearchView from './view';
import useSearch from '@hooks/useSearch';
function Search() {
    const { keyword, handleInput } = useSearch();
    return <SearchView keyword={keyword} handleInput={handleInput} />;
}

export default Search;
