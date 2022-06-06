import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_END_POINT = ' https://www.npmjs.com/search/suggestions';

async function getNpmSuggestion(keyword: string) {
    const result = await axios.get(API_END_POINT, {
        params: {
            q: keyword,
        },
    });
    return result.data;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const keyword = req.query.keyword as string;
        const result = await getNpmSuggestion(keyword);
        res.status(200).json(result);
    } catch (e) {
        res.status(200).json([]);
    }
}
