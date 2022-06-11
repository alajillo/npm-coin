import { useCallback, useState } from 'react';
import store from '../components/Search/store';
const useSearch = () => {
	const packageName = store.getState();
	const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            const nextText = e.target.value;
			store.dispatch('changePackage',{value : nextText });
        },
        [store]
    );
    return { packageName, handleInput };
};

export default useSearch;
