export interface IDateRange{
    start: string;
    end: string;
}

export interface ICurrencyExchange{
    base: string;
    targets: string[];
}

export interface IHistoricalQuery extends ICurrencyExchange, IDateRange{}