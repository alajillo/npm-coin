import Api from '@api/index';
import { useCallback, useEffect, useState } from 'react';
import { PackageCount } from 'types/package';

const useCount = (packageName: string) => {
  const [packageDetail, setPackageDetail] = useState<PackageCount>();
  const updateDetail = useCallback(async () => {
    const result = await Api.getNpmCount(packageName);
    setPackageDetail(result);
  }, [packageName]);
  useEffect(() => {
    updateDetail();
  }, [updateDetail]);
  return packageDetail;
};

export default useCount;
