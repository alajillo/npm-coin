import axios from 'axios';
import { PackageInfo } from '../types/type';
const API_END_POINT = process.env.LOCAL || 'https://npm-coin.vercel.app';

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
