import SearchView from './view';
import useSearch from './useSearch';
import { Provider } from 'react-redux';
import { store } from './store';
function Search() {
    const { packageName, handleInput } = useSearch();
    return (
        <>
            <Provider store={store}>
                <SearchView keyword={packageName} handleInput={handleInput} />
            </Provider>
        </>
    );
}

export default Search;
