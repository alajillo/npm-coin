type PackageDetailViewProps = {
    packageName: string;
    packageDownloads: number;
};
function PackageDetailView({
  packageName,
  packageDownloads,
}: PackageDetailViewProps) {
  return (
    <div>
      <h1>
        이름 :
        {packageName}
      </h1>
      <p>
        다운로드 수 :
        {packageDownloads}
      </p>
    </div>
  );
}

export default PackageDetailView;
