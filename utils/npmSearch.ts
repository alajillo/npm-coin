import axios from 'axios';

const API_END_POINT = 'https://api.npms.io/v2/search';
const SIZE = 5;

async function npmSearch(keyword: string) {
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
