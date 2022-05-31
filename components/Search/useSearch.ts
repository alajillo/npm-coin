import { useState, useCallback } from 'react';
import NpmApi from '@Search/NpmApi';
function useSearch() {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const search = useCallback(async (keyword: string) => {
        setIsLoading(true);
        const result = await NpmApi.search(keyword);
        setIsLoading(false);
        setList(result);
    }, []);
    return { list, search, isLoading };
}

export default useSearch;
