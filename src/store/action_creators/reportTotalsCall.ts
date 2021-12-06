import { Dispatch } from "redux"
import {ReportTotalsActionTypes, ReportTotalsAction} from '../../interfaces/reports'
import ReportTotalsService from '../../services/ReportService'

export const reportTotals = () => {
  return async (dispatch: Dispatch<ReportTotalsAction>) =>{
      try {
          dispatch({type: ReportTotalsActionTypes.FETCH_REPORT_TOTALS})
          const response = await ReportTotalsService.getReportTotals()
          if(response.data.length === 0){
              console.log("Totals, error!")
               dispatch( {type: ReportTotalsActionTypes.FETCH_REPORT_TOTALS_ERROR, payload: "Error, No data in DB !"})
          }
          /* 
          const cres : ReportTotalsResponse[] = response.data            
          console.log("Totals, cres: " + cres)
          Object.entries(cres).forEach(([key, value]) => {
              console.log(key, value);
          });
          */
          dispatch({type: ReportTotalsActionTypes.FETCH_REPORT_TOTALS_SUCCESS, payload: response.data})
      } catch (e) {
          console.log("Totals: " + e)
          dispatch( {type: ReportTotalsActionTypes.FETCH_REPORT_TOTALS_ERROR, payload: "Error, " + e + " !"})
      }
  }
}

export const reportTotalsDataReset = () => {
  return (dispatch: Dispatch<ReportTotalsAction>) => {
      dispatch({type: ReportTotalsActionTypes.RESET})
  }
}