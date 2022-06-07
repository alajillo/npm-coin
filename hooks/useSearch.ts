import { useCallback, useState } from 'react';
const useSearch = () => {
    const [keyword, setKeyword] = useState('');
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            const nextText = e.target.value;
            setKeyword(nextText);
        },
        [setKeyword]
    );
    return { keyword, handleInput };
};

export default useSearch;
