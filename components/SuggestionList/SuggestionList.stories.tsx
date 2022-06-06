import SuggestionListView from './view';
import { PackageInfo } from 'types/package';
export default {
    title: 'components/suggestionList',
    component: SuggestionListView,
};
const dummypackageInfoList: PackageInfo[] = [
    {
        name: 'dummy',
        description: 'dummy description',
    },
    {
        name: 'dummy',
        description: 'dummy description',
    },
    {
        name: 'dummy',
        description: 'dummy description',
    },
];
export const light = () => (
    <SuggestionListView
        isLoading={false}
        selectedIndex={-1}
        list={dummypackageInfoList}
        onSelect={console.log}
    />
);
