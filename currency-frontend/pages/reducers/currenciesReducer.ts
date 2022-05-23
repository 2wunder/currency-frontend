import { SET_BASE_CURRENCY, SET_CURRENCIES, SET_TARGET_CURRENCIES } from "../constants/actionTypes";

const initalState = {
    currencies:[],
    base:"",
    targets:[]
}

export default function(state=initalState, action){
    switch(action.type){
        case SET_CURRENCIES:
            return {...state, ...{'currencies':[...action.payload]}};
        case SET_BASE_CURRENCY:
            return {...state, ...{'base':action.payload}};
        case SET_TARGET_CURRENCIES:
            return {...state, ...{'targets':[...action.payload]}};
        default:
            return state;
    }
}