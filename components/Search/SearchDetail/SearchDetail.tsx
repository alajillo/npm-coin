import useDetail from './useDetail';
function SearchDetail({ packageName }: { packageName: string }) {
    const packageInfo = useDetail(packageName);
    return (
        <div>
            <h2>{packageName}</h2>
            <h3>{packageInfo.downloads}</h3>
        </div>
    );
}

export default SearchDetail;
