import PackageDetailView from './view';
function PackageDetail() {
    return (
        <PackageDetailView
            packageName={'패키지 이름'}
            packageDownloads={123456}
        />
    );
}

export default PackageDetail;
