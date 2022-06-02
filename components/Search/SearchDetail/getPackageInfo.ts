import axios from 'axios';
const API_END_POINT = 'https://api.npmjs.org/downloads/point/last-day';
async function getPackageInfo(packageName: string) {
    const packageInfo = await axios.get(`${API_END_POINT}/${packageName}`);
    return packageInfo.data;
}

export default getPackageInfo;
