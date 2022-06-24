import { combineReducers } from 'redux';
import currenciesReducer from './currenciesReducer';
import historicalExchangeRateReducer from './historicalExchangeRateReducer';
import liveExchangeRateReducer from './liveExchangeRateReducer';

export default combineReducers({
  historicalData: historicalExchangeRateReducer,
  liveData: liveExchangeRateReducer,
  exchange: currenciesReducer
})