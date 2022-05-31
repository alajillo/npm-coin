import axios from 'axios';

const API_END_POINT = ' https://www.npmjs.com/search/suggestions';

async function npmSearch(keyword: string) {
    const result = await axios.get(API_END_POINT, {
        params: {
            q: keyword,
        },
    });
    return result.data;
}

export default npmSearch;
