import axios from 'axios';
import { PackageInfo } from 'types/package';
class Api {
    private static API_END_POINT: string =
        process.env.VERCEL_ENV === 'production'
            ? process.env.VERCEL_URL!
            : 'http://localhost:3000';
    public static async getNpmSuggestion(keyword: string) {
        const result = await axios.get<PackageInfo[]>(
            `${this.API_END_POINT}/api/search`,
            {
                params: {
                    keyword,
                },
            }
        );
        return result.data;
    }
    public static async getNpmDetail(packageName: string) {
        const packageInfo = await axios.get<PackageInfo>(
            `${this.API_END_POINT}/api/detail`,
            {
                params: {
                    packageName,
                },
            }
        );
        return packageInfo.data;
    }
}

export default Api;
