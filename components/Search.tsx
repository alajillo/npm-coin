import React, { ChangeEvent, useCallback, useState, useMemo } from 'react';
import npmSearch from '../utils/npmSearch';
import { debounce } from 'lodash-es';
import axios from 'axios';
export default function Search() {
    const [keyword, setKeyword] = useState('');
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getList = useMemo(
        () =>
            debounce(async (text: string) => {
                if (text) {
                    setIsLoading(true);
                    const result: any = await axios.get(
                        'http://localhost:3000/api/search',
                        {
                            params: {
                                keyword: text,
                            },
                        }
                    );
                    setIsLoading(false);
                    setList(result.data);
                }
            }, 300),
        []
    );

    const onInput = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const text = e.target.value;
            setKeyword(text);
            getList(text);
        },
        [setKeyword, getList]
    );
    return (
        <div>
            <h1 className="text-3xl font-bold text-red-500 text-opacity-60">
                Hello world!
            </h1>
            <input type="text" value={keyword} onInput={onInput} />
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
