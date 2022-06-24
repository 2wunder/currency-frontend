import ConverterComponent from "./modules/converter/converterComponent";
import Navigation from "../common/navigation/navigationComponent";
import CurrencySelectorComponent from "./modules/currencySelector/currencySelectorComponent";

const ExchangeRatesComponent:React.FC = ()=>{
    return(
    <div className="flex-container">
        <div className="flex-item-full-column">
            <Navigation/>
        </div>
        <div className="flex-item-full-column">
            <CurrencySelectorComponent/>
        </div>
        <div className="flex-item-full-column">
            <ConverterComponent/>
        </div>
    </div>
    );
}

export default ExchangeRatesComponent;