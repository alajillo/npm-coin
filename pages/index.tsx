import SuggestionList from '@components/SuggestionList';
import React, { useState } from 'react';
export default function Home() {
    const [keyword, setKeyword] = useState('1234');
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const nextText = e.target.value;
        setKeyword(nextText);
    };
    return (
        <>
            <input
                className="w-1/2 h-1/2"
                type="text"
                value={keyword}
                onChange={handleInput}
            />
            <SuggestionList keyword={keyword} />
        </>
    );
}
