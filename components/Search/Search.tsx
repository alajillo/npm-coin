import { ChangeEvent, useMemo } from 'react';
import useSearch from '@Search/useSearch';
import useMoveSelect from './useMoveSelect';
import { debounce } from 'lodash-es';
import SuggestionList from './SuggestionList/SuggestionList';
import SearchDetail from './SearchDetail/SearchDetail';
export default function Search() {
    const { list, search, isLoading } = useSearch();
    const { selectedIndex, onKeyDown, setSelectIndex } = useMoveSelect();
    const onInput = useMemo(
        () =>
            debounce((e: ChangeEvent<HTMLInputElement>) => {
                search(e.target.value);
            }, 200),
        [search]
    );

    return (
        <div className="flex flex-col w-screen h-screen p-4">
            <h1 className="text-3xl font-bold text-red-500 text-opacity-60 mb-2">
                Npm Search
            </h1>
            <div
                className="relative flex-grow overflow-hidden flex flex-col items-center"
                onKeyDown={onKeyDown}
            >
                <input
                    type="text"
                    onInput={onInput}
                    className="text-2xl w-full"
                />
                <SuggestionList
                    selectedIndex={selectedIndex}
                    isLoading={isLoading}
                    list={list}
                    onSelect={(index: number) => setSelectIndex(index)}
                />
            </div>
            <SearchDetail
                packageName={
                    selectedIndex !== -1 ? list[selectedIndex].name : ''
                }
            />
        </div>
    );
}
