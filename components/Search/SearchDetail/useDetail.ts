import { useEffect, useState } from 'react';
import getPackageInfo from '../utils/getPackageInfo';
type PackageInfo = {
    downloads: number | string;
};
function useDetail(packageName: string) {
    const [packageInfo, setPackageInfo] = useState<PackageInfo>({
        downloads: '',
    });
    useEffect(() => {
        getPackageInfo(packageName).then((packageInfo) => {
            setPackageInfo(packageInfo);
        });
    }, [packageName]);
    return packageInfo;
}

export default useDetail;
