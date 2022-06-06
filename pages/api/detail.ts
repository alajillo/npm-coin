import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_END_POINT = 'https://api.npmjs.org/downloads/point/last-day';

async function getNpmDetail(packageName: string) {
    const result = await axios.get(`${API_END_POINT}/${packageName}`);
    return result.data;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const packageName = req.query.packageName as string;
        const result = await getNpmDetail(packageName);
        res.status(200).json(result);
    } catch (e) {
        res.status(200).json({});
    }
}
