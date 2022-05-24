import axios from "axios";
import { GET_HISTORICAL_RATES } from "../constants/actionTypes";
import { HISTORICAL_FETCH_URL } from "../constants/urls";

export const getHistoricalExchangeRates = async(postData) => {
    const res = await axios.post(HISTORICAL_FETCH_URL, postData);
    return {
        type: GET_HISTORICAL_RATES,
        payload: res.data
    };   
}