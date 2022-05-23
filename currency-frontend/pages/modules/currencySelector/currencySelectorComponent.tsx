import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies, setBaseCurrency, setTargetCurrencies } from "../../actions/currenciesAction";
import { ICurrencyOption } from "../../types/openExchangeResponseTypes";
import { IApplicationState } from "../../types/stateTypes";
import { MultiSelect } from "react-multi-select-component";
import { BASE_CURRENCY_LABEL, SELECT_BASE_CURRENCY, SELECT_TARGETS, TARGET_CURRENCIES_LABEL } from "../../constants/labels";
import { getTargetCurrenciesFromOptions, getTargetCurrenciesFromValues } from "../../helpers/componentDataParser";
import BaseCurrencySelectorComponent from "../../common/baseCurrencySelector/baseCurrencySelectorComponent";
import { getLiveExchangeRates } from "../../actions/liveExchangeAction";

const CurrencySelectorComponent:React.FC = ()=>{
    const dispatch = useDispatch();
    const defaultOption = <option key={-1} value="">{SELECT_BASE_CURRENCY}</option>;
    const currencies = useSelector((state:IApplicationState)=>state.exchange.currencies);
    const base = useSelector((state:IApplicationState)=>state.exchange.base);
    const targets = useSelector((state:IApplicationState)=>state.exchange.targets);
    const [targetsSelected, setTargetsSelected] = useState([]);

    useEffect(()=>{
        getCurrencies().then(res=>dispatch(res));
        if(targets.length>0 && currencies.length>0){
            setTargetsSelected(getTargetCurrenciesFromValues(targets, currencies));
        }
    },[]);

    useEffect((): any => {
        let eventSource:EventSource;
        if(base !=='' && targets.length > 0){
            eventSource = getLiveExchangeRates(base, targets, dispatch);
        }
        return () => {
            if(eventSource) eventSource.close();
        }
      }, [base, targets]);

    const setSelectedTargets=(e:ICurrencyOption[])=>{
        setTargetsSelected(e);
        dispatch(setTargetCurrencies(getTargetCurrenciesFromOptions(e)));
    }

    const renderCurrenciesSelectOptions = (currencies)=>{
        if(currencies.length>0){
            const options = currencies.map((v:ICurrencyOption,i:number)=>{
                if(base !=='' && v.value === base){
                    return <option selected key={i} value={v.value}>{v.label}</option>;
                }
                return <option key={i} value={v.value}>{v.label}</option>;
            });
            options.unshift(defaultOption);
            return options;
        }
        return [defaultOption];
    }

    const baseCurrencyChange = (e)=>{
        dispatch(setBaseCurrency(e?.target?.value));
    }

    return(
    <div className="flex-container">
        <div className="flex-item-left">
            <BaseCurrencySelectorComponent
                changeHandler={baseCurrencyChange}
                options={renderCurrenciesSelectOptions(currencies)}
                label={BASE_CURRENCY_LABEL}
            />
        </div>
        <div className="flex-item-right">
            <div className="flex-container shadow-card">
                <div className="flex-item-left label-20">
                    {TARGET_CURRENCIES_LABEL}
                </div>
                <div className="flex-item-right">
                    <MultiSelect
                        options={currencies}
                        value={targetsSelected}
                        onChange={setSelectedTargets}
                        labelledBy={SELECT_TARGETS}
                    />
                </div>
            </div>
        </div>
    </div>);
}
export default CurrencySelectorComponent