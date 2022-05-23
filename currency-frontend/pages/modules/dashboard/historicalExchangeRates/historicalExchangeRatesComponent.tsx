import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DatePicker from "react-datepicker";
import { getHistoricalExchangeRates } from "../../../actions/historicalExchangeAction";
import { getHistoricalChartData, getRandomColor } from "../../../helpers/componentDataParser";
import { IApplicationState } from "../../../types/stateTypes";
import "react-datepicker/dist/react-datepicker.css";
import { DATE_FORMAT_FOR_HISTORICAL_RATES } from "../../../constants/formats";
import { getLiveExchangeRates } from "../../../actions/liveExchangeAction";

const HistoricalExchangeRatesComponent:React.FC = ()=>{
    const base = useSelector((state:IApplicationState)=>state.exchange.base);
    const targets = useSelector((state:IApplicationState)=>state.exchange.targets);

    const dispatch = useDispatch();
    const historicalRates = useSelector((state:IApplicationState)=>state.historicalData);
    const [barElements, setBarElements] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect((): any =>{
        if(base !=='' && targets.length > 0 && startDate && endDate){
            getHistoricalExchangeRates({start:startDate, end:endDate, base, targets})
            .then(res=>dispatch(res));
        }
       
    },[base, targets, startDate, endDate]);

    const renderBarElements = (historicalRates)=>{
        const chartData = getHistoricalChartData(historicalRates);
        if(chartData.length>0){
            return Object.keys(chartData[0].rates).map((key,index)=><Bar key={index} dataKey={key} stackId="a" fill={getRandomColor()} />);
        }
    }

    const chartData = useMemo(():any =>{
        if(Object.keys(historicalRates).length !== 0){
            setBarElements(renderBarElements(historicalRates));
            return getHistoricalChartData(historicalRates);
        }
        return [];        
    },[historicalRates]);

    return(
        <div className="shadow-card">
            <div className="flex-container space-evenly">
                <div className="label-20">
                    Historical Exchange Rates from
                </div>
                <div className="w-300">
                    <DatePicker
                        dateFormat={DATE_FORMAT_FOR_HISTORICAL_RATES}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>
                <div className="label-20">
                    to
                </div>
                <div className="w-300">
                    <DatePicker
                        dateFormat={DATE_FORMAT_FOR_HISTORICAL_RATES}
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                    />  
                </div>
            </div>
            {chartData.length>0 &&
                <div className="flex-item-full-column" style={{height:'500px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {barElements}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            }
            </div>   
        );
}
export default HistoricalExchangeRatesComponent;