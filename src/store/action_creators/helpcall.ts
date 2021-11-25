import { Dispatch } from "redux"
import {HelpActionTypes, HelpAction} from '../../interfaces/help'
import HelpService from '../../services/HelpService'

export const ListOfCountries = () => {
    return async (dispatch: Dispatch<HelpAction>) =>{
        try {
            dispatch({type: HelpActionTypes.FETCH_HELP})
            const response = await HelpService.getListOfCountries()
            if(response.data.length === 0){
                console.log("ListOfCountries, error!")
                 dispatch( {type: HelpActionTypes.FETCH_HELP_ERROR, payload: "Error, No data in DB !"})
            }
            /* 
            const cres : HelpResponse[] = response.data            
            console.log("ListOfCountries, cres: " + cres)
            Object.entries(cres).forEach(([key, value]) => {
                console.log(key, value);
            });
            */

            dispatch({type: HelpActionTypes.FETCH_HELP_SUCCESS, payload: response.data})
        } catch (e) {
            console.log("ListOfCountries: " + e)
            dispatch( {type: HelpActionTypes.FETCH_HELP_ERROR, payload: "Error, " + e + " !"})
        }
    }
}

export const helpDataReset = () => {
    return (dispatch: Dispatch<HelpAction>) =>{
        dispatch({type: HelpActionTypes.RESET})
    }
}