import axios from 'axios';
import { PackageInfo } from './type';
const API_END_POINT = process.env.LOCAL || process.env.NEXT_PUBLIC_VERCEL_URL;

class NpmApi {
    private static API_END_POINT = API_END_POINT;
    constructor() {}
    public static async search(keyword: string) {
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
}

export default NpmApi;
