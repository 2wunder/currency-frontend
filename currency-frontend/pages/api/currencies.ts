// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { getCurrencySelectOptions } from '../../helpers/componentDataParser';
import { getCurrenciesApiURL } from '../../helpers/urlManipulator';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET"){
        const currencies = await fetch(getCurrenciesApiURL()).then(res=>res.text()).then(res=>JSON.parse(res));
        const convertedResponseObj= getCurrencySelectOptions(currencies);
        console.log("currencies response => ", convertedResponseObj);
        res.status(200).json(convertedResponseObj);
    }
    else{
        res.status(404);
    }
}