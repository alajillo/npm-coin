import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_END_POINT = 'https://api.npmjs.org/downloads/point/last-day';

async function getNpmDetail(packageName: string) {
    const result = await axios.get(`${API_END_POINT}/${packageName}`);
    return result.data;
}

async function responseNpmdetail(
    res: NextApiResponse<any>,
    packageName: string
) {
    const result = await getNpmDetail(packageName);
    res.status(200).json(result);
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const packageName = req.query.packageName as string;
    responseNpmdetail(res, packageName);
}
