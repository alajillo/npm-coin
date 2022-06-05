import { PackageInfo } from 'types/package';
import SuggestionListView from './view';
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
function SuggestionList() {
    return (
        <SuggestionListView
            isLoading={false}
            list={dummypackageInfoList}
            selectedIndex={0}
            onSelect={(key: number) => console.log(key)}
        />
    );
}

export default SuggestionList;
