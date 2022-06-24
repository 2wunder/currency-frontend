import { ICurrency, ICurrencyOption, ICurrencyRates, IHistoricalResponse } from "../types/openExchangeResponseTypes";

export const getCurrencySelectOptions =  function(currencies:ICurrency){
    return Object.keys(currencies).map((key) => ({'value':key, 'label': key, 'fulllabel': currencies[key]}));
}

export const getTargetCurrenciesFromOptions = (currencyOptions:ICurrencyOption[])=>{
    return currencyOptions.map(v=>v.value);
}

export const getTargetCurrenciesFromValues = (currencies:string[], currencyOptions:ICurrencyOption[])=>{
    return currencies.map(v=>(currencyOptions.filter(x=>x.value===v)[0]));
}

export const getLiveChartData = (latestRates:ICurrencyRates)=>{
    return Object.keys(latestRates).map((key)=>({'value':latestRates[key], 'currency':key}));
}

export const getHistoricalChartData = (historicalRates:IHistoricalResponse)=>{
    return Object.keys(historicalRates).map((key)=>({...{'date':key, 'rates':historicalRates[key]},...historicalRates[key]}));
}

export const getRandomColor = ()=>{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }