import {HelpState, HelpActionTypes, HelpAction} from "../../interfaces/help"

const initialState: HelpState = {
    result: null,
    loading: false,
    error: null
}

export const helpReducer = (state = initialState, action: HelpAction): HelpState =>{
    switch (action.type){
        case HelpActionTypes.FETCH_HELP:
            return  {...state, loading: true, error: null}
        case HelpActionTypes.FETCH_HELP_SUCCESS:
            return {...state, loading: false, result: action.payload}
        case HelpActionTypes.FETCH_HELP_ERROR:
            return {...state, loading: false, error: action.payload}  

        case HelpActionTypes.RESET:
            return initialState          

        default:
            return state;
    }
}