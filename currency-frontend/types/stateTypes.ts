import { ICurrency, ICurrencyOption, ICurrencyRates, IHistoricalResponse } from "./openExchangeResponseTypes";

export interface IApplicationState{
    historicalData:IHistoricalResponse
    liveData:ICurrencyRates;
    exchange:IExchange;
}

export interface IExchange{
    currencies: ICurrencyOption[];
    base: string;
    targets: string[];
}