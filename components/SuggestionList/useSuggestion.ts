import { useState, useEffect, useMemo } from 'react';
import { PackageInfo } from 'types/package';
import Api from '@api/index';
import { debounce } from 'lodash';
const useSuggestion = (keyword: string) => {
    const [suggestionList, setSuggestionList] = useState<PackageInfo[]>([]);
    const [isLoading, setIsloading] = useState<boolean>(false);
    const changeSuggestionList = useMemo(
        () =>
            debounce(async (keyword) => {
                setIsloading(true);
                try {
                    if (!keyword) throw new Error('empty text');
                    const list = await Api.getNpmSuggestion(keyword);
                    setSuggestionList(list);
                } catch (e) {
                    setSuggestionList([]);
                }
                setIsloading(false);
            }, 500),
        []
    );
    useEffect(() => {
        changeSuggestionList(keyword);
    }, [changeSuggestionList, keyword]);
    return { suggestionList, isLoading };
};

export default useSuggestion;
