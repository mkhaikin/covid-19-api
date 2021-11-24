import {CountryState, CountryActionTypes, CountryAction} from "../../interfaces/country"

const initialState: CountryState = {
    result: null,
    loading: false,
    error: null
}

export const countryReducer = (state = initialState, action: CountryAction): CountryState =>{
    switch (action.type){
        case CountryActionTypes.FETCH_COUNTRY_BYNAME:
            return  {...state, loading: true, error: null}
        case CountryActionTypes.FETCH_COUNTRY_BYNAME_SUCCESS:
            return {...state, loading: false, result: action.payload}
        case CountryActionTypes.FETCH_COUNTRY_BYNAME_ERROR:
            return {...state, loading: false, error: action.payload}  

        case CountryActionTypes.FETCH_COUNTRY_ALL:
            return  {...state, loading: true, error: null}
        case CountryActionTypes.FETCH_COUNTRY_ALL_SUCCESS:
            return {...state, loading: false, result: action.payload}
        case CountryActionTypes.FETCH_COUNTRY_ALL_ERROR:
            return {...state, loading: false, error: action.payload} 

        case CountryActionTypes.FETCH_COUNTRY_BYCODE:
            return  {...state, loading: true, error: null}
        case CountryActionTypes.FETCH_COUNTRY_BYCODE_SUCCESS:
            return {...state, loading: false, result: action.payload}
        case CountryActionTypes.FETCH_COUNTRY_BYCODE_ERROR:
            return {...state, loading: false, error: action.payload} 
         
        case CountryActionTypes.RESET:
            return initialState          

        default:
            return state;
    }
}