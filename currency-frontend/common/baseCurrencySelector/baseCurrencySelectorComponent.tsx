interface IBaseCurrencySeelctor{
    label:string;
    changeHandler: (e:any)=>void;
    options: JSX.Element[];
}
const BaseCurrencySelectorComponent:React.FC<IBaseCurrencySeelctor> = (props:IBaseCurrencySeelctor)=>{
    const {label, changeHandler, options} = props;
    return(
        <div className="flex-container shadow-card">
            <div className="flex-item-left label-20">
                {label}
            </div>
             <div className="flex-item-right">
                <select onChange={changeHandler}>
                    {options}
                </select>
             </div>
        </div>
    );
}

export default BaseCurrencySelectorComponent;