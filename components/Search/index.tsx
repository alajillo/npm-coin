import SearchView from './view';
import useSearch from '@hooks/useSearch';
import { Provider } from 'react-redux';
import { store } from './store';
function Search() {
    const { keyword, handleInput } = useSearch();
    return (
        <>
            <Provider store={store}>
                <SearchView keyword={keyword} handleInput={handleInput} />
            </Provider>
        </>
    );
}

export default Search;
