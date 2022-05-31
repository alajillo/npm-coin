import axios from 'axios';
import { PackageInfo } from './type';
const API_END_POINT = 'http://localhost:3000/api';
class NpmApi {
    private static API_END_POINT = API_END_POINT;
    constructor() {}
    public static async search(keyword: string) {
        const result = await axios.get<PackageInfo[]>(
            `${this.API_END_POINT}/search`,
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
