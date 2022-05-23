import { GET_HISTORICAL_RATES } from "../constants/actionTypes";

const initalState = {};

export default function(state=initalState, action){
    switch(action.type){
        case GET_HISTORICAL_RATES:
            return {...state, ...action.payload};
        default:
            return state;
    }
}