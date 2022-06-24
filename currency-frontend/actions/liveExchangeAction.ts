import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { SET_LIVE_RATES } from "../constants/actionTypes";
import { getLiveFetchURL } from "../helpers/urlManipulator";
import { ICurrencyRates } from "../types/openExchangeResponseTypes";

export const getLiveExchangeRates = (base: string, targets: string[], dispatch:Dispatch<any>) => {  
    const eventSource = new EventSource(getLiveFetchURL(base, targets));
    eventSource.onmessage = e => {
        console.log(e);
        dispatch(setLiveExchangeRates(JSON.parse(e.data)));
      };
    eventSource.onerror = e => console.log("error = ", e);
    eventSource.onopen = e => console.log("onopen = ", e);
    return eventSource;
}

export const setLiveExchangeRates = (payload:ICurrencyRates)=>{
    console.log("live Payload = ", payload);
    return {
        type: SET_LIVE_RATES,
        payload
    };
}