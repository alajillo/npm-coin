import SuggestionList from '@components/SuggestionList';
import PackageDetail from '@components/PackageDetail';
import Slot from '@components/Slot';
export default function Home() {
    console.log('env test : ', process.env.VERCEL_URL);
    return (
        <>
            <SuggestionList />
            <PackageDetail />
            <Slot count={78123} />
        </>
    );
}
