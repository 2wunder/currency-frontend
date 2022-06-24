import { ICurrency, ICurrencyOption, ICurrencyRates, ILatestRatesResponse } from "../types/openExchangeResponseTypes";

export const requestedConvertedRates = (liveData:ILatestRatesResponse, base: string, rates: Array<string>)=>{
    console.log("currency exchange rates request details = ", base, rates);
    let responseRates:ICurrencyRates;
    if(rates.length > 0) {
        responseRates = rates.reduce((a,v)=>({...a,[v]:getTargetedRate(liveData, base.toString(), v)}),{});
    }
    else{
        responseRates = {rates:getTargetedRate(liveData, base.toString(), rates.toString())};
    }
    console.log("return object =>", responseRates);
    return responseRates;
}

const getTargetedRate = (liveData:ILatestRatesResponse, requestedBase: string, requestedTargetRate: string)=>{
    console.log("getTargetedRate =>", requestedBase, requestedTargetRate);
    if(liveData.base === requestedBase){
        return parseFloat(liveData.rates[requestedTargetRate].toFixed(2));
    }
    if(liveData.base !== requestedBase){
        if(requestedTargetRate === liveData.base){
            return parseFloat((1/liveData.rates[requestedBase]).toFixed(2));
        }
        else{
            return parseFloat(((1/liveData.rates[requestedBase])*liveData.rates[requestedTargetRate]).toFixed(2));
        }
    }
}

export const getDaysArray = function(start:string, end:string) {
    let arr:Date[],dt:Date;
    for(arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
};