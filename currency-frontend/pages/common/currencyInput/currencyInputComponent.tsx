interface ICurrencyInputProps{
    value: number;
    changeHandler: (e:any,currency:string)=>void;
    currency: string;
}
export const CurrencyInputComponent:React.FC<ICurrencyInputProps> = (props:ICurrencyInputProps)=>{
    const {value, changeHandler, currency} = props;
    return(<div className="shadow-card">
      <input
        type="text"
        pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
        value={value}
        onChange={(e)=>changeHandler(e,currency)}
      />
      <span className="label-20">{currency}</span>
    </div>)
}