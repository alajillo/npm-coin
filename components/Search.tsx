import { useCallback, useState } from 'react';
import npmSearch from '../utils/npmSearch';
import { debounce } from 'lodash-es';
export default function Search() {
    const [list, setList] = useState([]);
    const onInput = debounce(async (e) => {
        const result = await npmSearch(e.target.value);
        setList(result);
    }, 500);
    return (
        <div>
            <h1 className="text-3xl font-bold text-red-500 text-opacity-60">
                Hello world!
            </h1>
            <input type="text" onInput={onInput} />
            <ul>
                {list.map((item: any, key) => (
                    <li key={key}>{item.package.name}</li>
                ))}
            </ul>
        </div>
    );
}
