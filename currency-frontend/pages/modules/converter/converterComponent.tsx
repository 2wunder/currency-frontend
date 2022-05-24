import { useState } from "react";
import { useSelector } from "react-redux";
import { CurrencyInputComponent } from "../../../common/currencyInput/currencyInputComponent";
import { IApplicationState } from "../../../types/stateTypes";

const ConverterComponent:React.FC = ()=>{
    const base = useSelector((state:IApplicationState)=>state.exchange.base);
    const targets = useSelector((state:IApplicationState)=>state.exchange.targets);
    const currenciesLiveValue = useSelector((state:IApplicationState)=>state.liveData);
    const [baseInputValue, setBaseInputValue] = useState(null);
    const [targetInputValues, setTargetInputValues] = useState([]);

    const baseCurrencyValueChange = (e, currency)=>{
        if(e.target.value && currenciesLiveValue[targets[0]]){
            const baseInput = parseFloat(e.target.value);
            setBaseInputValue(baseInput);
            const targetsManipulated = targets.map(v=>parseFloat((currenciesLiveValue[v]*baseInput).toFixed(2)));
            setTargetInputValues(targetsManipulated);
        }
    }
    const targetCurrencyValueChange = (e, currency)=>{
        if(e.target.value && currenciesLiveValue[currency]){
            const targetInput = parseFloat(e.target.value);
            const newBaseVal = parseFloat((targetInput/currenciesLiveValue[currency]).toFixed(2));
            setBaseInputValue(newBaseVal);
            const targetsManipulated = targets.map(v=>{
                        if(v !== currency){
                            return parseFloat((currenciesLiveValue[v]*newBaseVal).toFixed(2));
                        }
                        return parseFloat(targetInput.toFixed(2));
                    }
                );
            setTargetInputValues(targetsManipulated);
        }
    }
    return(<div className="flex-container">
        {base &&
            <div className="flex-item-left">
                <CurrencyInputComponent 
                    changeHandler={baseCurrencyValueChange}
                    currency={base}
                    value={baseInputValue}
                />
            </div>
        }
        {targets && targets.map((v,i)=><div key={i} className="flex-item-left">
                                            <CurrencyInputComponent 
                                                changeHandler={targetCurrencyValueChange}
                                                currency={v}
                                                value={targetInputValues.length>0 ? targetInputValues[i] : null}
                                            />
                                        </div>
        )}
    </div>);
}

export default ConverterComponent;