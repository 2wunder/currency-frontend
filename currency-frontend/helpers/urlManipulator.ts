import { LIVE_FETCH_URL, OPEN_EXCHANGE_CURRENCIES_API_PATH, OPEN_EXCHANGE_LATEST_API_PATH, OPEN_EXCHNAGE_HISTORICAL_API_PATH } from "../constants/urls";

export const getLatestApiURL = ()=>{
    return `${process.env.OPEN_EXCHANGE_BASE_URL}${OPEN_EXCHANGE_LATEST_API_PATH.replace('{appid}', process.env.OPEN_EXCHANGE_APP_ID)}`;
}

export const getCurrenciesApiURL = ()=>{
    return `${process.env.OPEN_EXCHANGE_BASE_URL}${OPEN_EXCHANGE_CURRENCIES_API_PATH.replace('{appid}', process.env.OPEN_EXCHANGE_APP_ID)}`;
}

export const getHistoricalApiURL = (date: string)=>{
    return `${process.env.OPEN_EXCHANGE_BASE_URL}${OPEN_EXCHNAGE_HISTORICAL_API_PATH.replace('{date}', date).replace('{appid}', process.env.OPEN_EXCHANGE_APP_ID)}`;
}

export const getLiveFetchURL = (base: string, targets: string[])=>{
    return `${LIVE_FETCH_URL.replace('{base}', base).replace('{targets}', JSON.stringify(targets))}`
}