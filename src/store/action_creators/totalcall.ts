import { Dispatch } from "redux"
import {TotalActionTypes, TotalAction} from '../../interfaces/total'
import TotalService from '../../services/TotalService'

export const Totals = () => {
    return async (dispatch: Dispatch<TotalAction>) =>{
        try {
            dispatch({type: TotalActionTypes.FETCH_TOTAL})
            const response = await TotalService.getTotals()
            if(response.data.length === 0){
                console.log("Totals, error!")
                 dispatch( {type: TotalActionTypes.FETCH_TOTAL_ERROR, payload: "Error, No data in DB !"})
            }
            /* 
            const cres : TotalResponse[] = response.data            
            console.log("Totals, cres: " + cres)
            Object.entries(cres).forEach(([key, value]) => {
                console.log(key, value);
            });
            */

            dispatch({type: TotalActionTypes.FETCH_TOTAL_SUCCESS, payload: response.data})
        } catch (e) {
            console.log("Totals: " + e)
            dispatch( {type: TotalActionTypes.FETCH_TOTAL_ERROR, payload: "Error, " + e + " !"})
        }
    }
}

export const totalDataReset = () => {
    return (dispatch: Dispatch<TotalAction>) =>{
        dispatch({type: TotalActionTypes.RESET})
    }
}