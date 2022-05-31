import { ChangeEvent, useMemo } from 'react';
import useSearch from '@Search/useSearch';
import { debounce } from 'lodash-es';
export default function Search() {
    const { list, search, isLoading } = useSearch();
    const onInput = useMemo(
        () =>
            debounce((e: ChangeEvent<HTMLInputElement>) => {
                search(e.target.value);
            }, 200),
        [search]
    );

    return (
        <div className="flex flex-col mx-4 mt-4">
            <h1 className="text-3xl font-bold text-red-500 text-opacity-60">
                Npm Search
            </h1>
            <input
                type="text"
                onInput={onInput}
                className="text-2xl mt-2 p-1"
            />
            <ul>
                {!isLoading ? (
                    list.map((item, key) => (
                        <li key={key} className="flex flex-col my-2">
                            <span className="text-xl">{item.name}</span>
                            <span className="text-sm">{item.description}</span>
                        </li>
                    ))
                ) : (
                    <span className="text-xl">loading...</span>
                )}
            </ul>
        </div>
    );
}
