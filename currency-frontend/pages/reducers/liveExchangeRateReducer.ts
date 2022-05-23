import { SET_LIVE_RATES } from "../constants/actionTypes";

const initialState = {};

export default function(state=initialState, action){
    switch(action.type){
        case SET_LIVE_RATES:
            return {...state, ...action.payload}
        default:
            return state;
    }
}