import axios from 'axios';
import { PackageInfo, PackageCount } from 'types/package';
class Api {
    private static API_END_POINT: string = process.env.API_END_POINT!;
    public static async getNpmSuggestion(keyword: string) {
        const result = await axios.get<PackageInfo[]>(
            `${this.API_END_POINT}api/search`,
            {
                params: {
                    keyword,
                },
            }
        );
        return result.data;
    }
    public static async getNpmCount(packageName: string) {
        const packageInfo = await axios.get<PackageCount>(
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
