import { ChangeEvent, useMemo } from 'react';
import useSearch from '@Search/useSearch';
import { debounce } from 'lodash-es';
export default function Search() {
    const { list, search, isLoading } = useSearch();
    const onInput = useMemo(
        () =>
            debounce((e: ChangeEvent<HTMLInputElement>) => {
                search(e.target.value);
            }, 400),
        [search]
    );

    return (
        <div>
            <h1 className="text-3xl font-bold text-red-500 text-opacity-60">
                Hello world!
            </h1>
            <input type="text" onInput={onInput} />
            <ul>
                {!isLoading ? (
                    list.map((item: any, key) => <li key={key}>{item.name}</li>)
                ) : (
                    <span>loading...</span>
                )}
            </ul>
        </div>
    );
}
