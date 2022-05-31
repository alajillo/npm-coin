import axios from 'axios';

const API_END_POINT = 'https://api.npms.io/v2/search';
const SIZE = 3;

async function npmSearch(keyword: string) {
    if (!keyword.length) return;
    const result = await axios.get(API_END_POINT, {
        params: {
            q: `${keyword}`,
            from: 0,
            size: SIZE,
        },
    });
    return result.data.results;
}

export default npmSearch;
