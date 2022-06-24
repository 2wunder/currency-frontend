import {  useMemo } from "react";
import {  useSelector } from "react-redux";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CURRENCY_LIVE_RATES } from "../../../../constants/labels";
import { getLiveChartData } from "../../../../helpers/componentDataParser";
import { IApplicationState } from "../../../../types/stateTypes";

const LiveExchangeRatesComponent: React.FC = () => {
  const latestRates = useSelector((state:IApplicationState)=>state.liveData);

     const chartData = useMemo(():any=>{
       if(Object.keys(latestRates).length !== 0){
        return getLiveChartData(latestRates);
       }
       return [];
      },[latestRates]);

    return(
    <div className="shadow-card">
      <div className="label-20">
        {CURRENCY_LIVE_RATES}
      </div>
       
        {chartData.length>0 &&
        
        <div className="flex-item-full-column" style={{height:'500px'}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="currency" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        }
    </div>);
}

export default LiveExchangeRatesComponent;