import useSuggestion from './useSuggestion';
import SuggestionListView from './view';
import React from 'react';
type SuggestionListProps = {
    keyword: string;
};
const SuggestionList = ({ keyword }: SuggestionListProps) => {
    const { suggestionList, isLoading } = useSuggestion(keyword);
    return (
        <SuggestionListView
            isLoading={isLoading}
            list={suggestionList}
            selectedIndex={0}
            onSelect={(key: number) => console.log(key)}
        />
    );
};

export default React.memo(SuggestionList);
