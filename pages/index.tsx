import SuggestionList from '@components/SuggestionList';
import PackageDetail from '@components/PackageDetail';
import Slot from '@components/Slot';
export default function Home() {
    return (
        <>
            <SuggestionList />
            <PackageDetail />
            <Slot count={78123} />
        </>
    );
}
