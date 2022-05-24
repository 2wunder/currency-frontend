export interface ILatestRatesResponse {
    disclaimer: string;
    license: string;
    timestamp: number;
    base: string;
    rates: ICurrencyRates;
}

export interface ICurrencyRates {
    [key: string]: number;
}

export interface IHistoricalResponse {
    [key: string]: ICurrencyRates;
}

export interface ICurrency {
    [key: string]: string;
}

export interface ICurrencyOption {
    value: string;
    label: string;
    fulllabel: string;
}