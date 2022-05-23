import { NextApiRequest } from "next";
import { requestedConvertedRates } from "../helpers/openExchangeResponseParser";
import { getLatestApiURL } from "../helpers/urlManipulator";
import { NextApiResponseServerIO } from "../types/next";

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
    console.log("requested exchnage details",req.query);
    if (req.method === "GET") {

        res.writeHead(200, {
            'Content-Type': 'text/event-stream; charset=utf-8',
            'Cache-Control': 'no-cache'
          });
        
          const liveData = await getLiveCurrencyRates(); 
          setTimeout(()=>write(res,
            requestedConvertedRates(liveData, req.query['base'].toString(), JSON.parse(req.query['rates'].toString()))),
            parseInt(process.env.OPEN_EXCHANGE_LIVE_POLLING_INTERVAL));

      } else {
        res.writeHead(404);
        res.end();
      }
};

function write(res, data) {

    res.write('data: ' + JSON.stringify(data) + '\n\n');
    res.end();

  }

async function getLiveCurrencyRates(){
        const resData = await fetch(
            getLatestApiURL()
          ).then((response) => response.text()).then(result => JSON.parse(result));
          console.log("getLiveRates = ", resData)
          return resData;
}