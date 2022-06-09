import PackageDetailView from './view';
import useCount from '@hooks/useCount';
import { store } from '@components/Search/store';
type PackageDetailProps = {
    packageName: string;
};
function PackageDetail({ packageName }: PackageDetailProps) {
    const packageDownloads = useCount(packageName)!;
    return (
        <PackageDetailView
            packageName={packageName}
            packageDownloads={packageDownloads?.downloads}
        />
    );
}

export default PackageDetail;
