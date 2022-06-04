import useDetail from './useDetail';
import Slot from 'components/Slot/Slot';
function SearchDetail({ packageName }: { packageName: string }) {
    const packageInfo = useDetail(packageName);
    return (
        <div>
            <h1 className="text-3xl">{packageName}</h1>
            <Slot count={Number(packageInfo.downloads)} />
        </div>
    );
}

export default SearchDetail;
