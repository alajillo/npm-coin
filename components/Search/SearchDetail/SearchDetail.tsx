import useDetail from './useDetail';
import Slot from 'components/Slot/Slot';
function SearchDetail({ packageName }: { packageName: string }) {
    const packageInfo = useDetail(packageName);
    return (
        <div>
            <h2>{packageName}</h2>
            <Slot count={Number(packageInfo.downloads)} />
        </div>
    );
}

export default SearchDetail;
