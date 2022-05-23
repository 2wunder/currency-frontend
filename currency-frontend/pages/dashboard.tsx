import HistoricalExchangeRatesComponent from "./modules/dashboard/historicalExchangeRates/historicalExchangeRatesComponent";
import LiveExchangeRatesComponent from "./modules/dashboard/liveExchangeRates/liveExchangeRatesComponent";
import Navigation from "./common/navigation/navigationComponent";
import CurrencySelectorComponent from "./modules/currencySelector/currencySelectorComponent";

const Dashboard:React.FC = ()=>{
return(
    <div className="flex-container">
        <div className='flex-item-full-column'>
            <Navigation />
        </div>
        <div className="flex-item-full-column">
            <CurrencySelectorComponent/>
        </div>
        <div className="flex-item-full-column">
            <LiveExchangeRatesComponent/>
        </div>
        <div className="flex-item-full-column">
            <HistoricalExchangeRatesComponent/>
        </div>
        
    </div>
);
}

export default Dashboard;