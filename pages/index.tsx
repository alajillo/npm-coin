import SuggestionList from '@components/SuggestionList';
import PackageDetail from '@components/PackageDetail';
import React, { useState } from 'react';
export default function Home() {
    const [keyword, setKeyword] = useState('');
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const nextText = e.target.value;
        setKeyword(nextText);
    };
    return (
        <div className="flex flex-col">
            <input
                className="w-1/2 h-1/2"
                type="text"
                value={keyword}
                onChange={handleInput}
            />
            <SuggestionList keyword={keyword} />
            <PackageDetail packageName="react" />
        </div>
    );
}
