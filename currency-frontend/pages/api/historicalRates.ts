// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { getDaysArray, requestedConvertedRates } from '../../helpers/openExchangeResponseParser';
import { getHistoricalApiURL } from '../../helpers/urlManipulator';
import { IHistoricalQuery } from '../../types/openExchnageRequestTypes';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST"){
        console.log("historical request => ", req.body);
        const historicalRequestQuery = req.body as IHistoricalQuery;
        const dateRange = getDaysArray(historicalRequestQuery.start, historicalRequestQuery.end);
        let convertedResponseObj={};
        const hisResponseArray = await Promise.all(
            dateRange.map(date=>fetch(getHistoricalApiURL(date.toISOString().slice(0,10))))
        )
        const hisResultArray = await Promise.all(
            hisResponseArray.map(async(res,i)=>{
                const currentRes = await res.text().then(res=>JSON.parse(res));
                const currentDate = dateRange[i].toISOString().slice(0,10);
                convertedResponseObj = {...convertedResponseObj, 
                    ...{[currentDate]:requestedConvertedRates(currentRes, historicalRequestQuery.base, historicalRequestQuery.targets)}}
                    return currentRes;
            })
        )
        console.log("historicalRatesResponse => ", convertedResponseObj);
        res.status(200).json(convertedResponseObj);
    }
    else{
        res.status(404);
    }
}