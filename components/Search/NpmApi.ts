import axios from 'axios';
const API_END_POINT = 'http://localhost:3000/api/search';
class NpmApi {
    private static API_END_POINT = API_END_POINT;
    constructor() {}
    public static async search(keyword: string) {
        const result = await axios.get(this.API_END_POINT, {
            params: {
                keyword,
            },
        });
        return result.data;
    }
}

export default NpmApi;
