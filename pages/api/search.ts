import type { NextApiRequest, NextApiResponse } from 'next';
import npmSearch from '../../utils/npmSearch';
async function responseNpmSearch(res: NextApiResponse<any>, keyword: string) {
    const result = await npmSearch(keyword);
    res.status(200).json(result);
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const keyword = req.query.keyword as string;
    responseNpmSearch(res, keyword);
}
