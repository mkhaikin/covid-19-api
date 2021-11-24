import { Dispatch } from "redux"
import {CountryActionTypes, CountryAction} from '../../interfaces/country'
import CountryService from '../../services/CountryService'

export const countryDataByName = (name:string) => {
    return async (dispatch: Dispatch<CountryAction>) =>{
        try {
            dispatch({type: CountryActionTypes.FETCH_COUNTRY_BYNAME})
            const response = await CountryService.getLatestCountryDataByName(name)
            if(response.data.length === 0){
                console.log("countryDataByName, error!")
                 dispatch( {type: CountryActionTypes.FETCH_COUNTRY_BYNAME_ERROR, payload: "Error, No such country name in DB !"})
            }
            /* 
            const cres : CountryResponse[] = response.data            
            console.log("countryDataByName, cres: " + cres)
            Object.entries(cres).forEach(([key, value]) => {
                console.log(key, value);
            });
            */

            dispatch({type: CountryActionTypes.FETCH_COUNTRY_BYNAME_SUCCESS, payload: response.data})
        } catch (e) {
            console.log("countryDataByName: " + e)
            dispatch( {type: CountryActionTypes.FETCH_COUNTRY_BYNAME_ERROR, payload: "Error, " + e + " !"})
        }
    }
}

export const countryDataByCode = (code:string) => {
    return async (dispatch: Dispatch<CountryAction>) =>{
        try {
            dispatch({type: CountryActionTypes.FETCH_COUNTRY_BYCODE})
            const response = await CountryService.getLatestCountryDataByCode(code)
            if(response.data.length === 0){
                console.log("countryDataByCode, error!")
                 dispatch( {type: CountryActionTypes.FETCH_COUNTRY_BYCODE_ERROR, payload: "Error, No such country code in DB !"})
            }
            /* 
            const cres : CountryResponse[] = response.data            
            console.log("countryDataByCode, cres: " + cres)
            Object.entries(cres).forEach(([key, value]) => {
                console.log(key, value);
            });
            */

            dispatch({type: CountryActionTypes.FETCH_COUNTRY_BYCODE_SUCCESS, payload: response.data})
        } catch (e) {
            console.log("countryDataByCode: " + e)
            dispatch( {type: CountryActionTypes.FETCH_COUNTRY_BYCODE_ERROR, payload: "Error, " + e + " !"})
        }
    }
}

export const AllCountriesData = () => {
    return async (dispatch: Dispatch<CountryAction>) =>{
        try {
            dispatch({type: CountryActionTypes.FETCH_COUNTRY_ALL})
            const response = await CountryService.getLatestAllCountries()
            if(response.data.length === 0){
                console.log("AllCountriesData, error!")
                 dispatch( {type: CountryActionTypes.FETCH_COUNTRY_ALL_ERROR, payload: "Error, No data in DB !"})
            }
            /* 
            const cres : CountryResponse[] = response.data            
            console.log("countryDataByCode, cres: " + cres)
            Object.entries(cres).forEach(([key, value]) => {
                console.log(key, value);
            });
            */

            dispatch({type: CountryActionTypes.FETCH_COUNTRY_ALL_SUCCESS, payload: response.data})
        } catch (e) {
            console.log("AllCountriesData: " + e)
            dispatch( {type: CountryActionTypes.FETCH_COUNTRY_ALL_ERROR, payload: "Error, " + e + " !"})
        }
    }
}

export const countryDataReset = () => {
    return (dispatch: Dispatch<CountryAction>) =>{
        dispatch({type: CountryActionTypes.RESET})
    }
}