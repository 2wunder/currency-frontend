import axios from "axios";
import { SET_BASE_CURRENCY, SET_CURRENCIES, SET_TARGET_CURRENCIES } from "../constants/actionTypes";
import { CURRENCIES_FETCH_URL } from "../constants/urls";

export const getCurrencies = async() => {
    const res = await axios.get(CURRENCIES_FETCH_URL);
    return {
        type: SET_CURRENCIES,
        payload: res.data
    };   
}

export const setBaseCurrency = (payload:string)=>({type: SET_BASE_CURRENCY, payload});

export const setTargetCurrencies = (payload:string[])=>({type: SET_TARGET_CURRENCIES, payload});