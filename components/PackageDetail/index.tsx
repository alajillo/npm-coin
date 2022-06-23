import useCount from './useCount';
import { store } from '@components/Search/store';
import PackageDetailView from './View';

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
