import {TotalState, TotalActionTypes, TotalAction} from "../../interfaces/total"

const initialState: TotalState = {
    result: null,
    loading: false,
    error: null
}

export const totalReducer = (state = initialState, action: TotalAction): TotalState =>{
    switch (action.type){
        case TotalActionTypes.FETCH_TOTAL:
            return  {...state, loading: true, error: null}
        case TotalActionTypes.FETCH_TOTAL_SUCCESS:
            return {...state, loading: false, result: action.payload}
        case TotalActionTypes.FETCH_TOTAL_ERROR:
            return {...state, loading: false, error: action.payload}  

        case TotalActionTypes.RESET:
            return initialState          

        default:
            return state;
    }
}