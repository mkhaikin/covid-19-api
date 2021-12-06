import { Dispatch } from "redux"
import { DailyReportByCountryCodeActionTypes, DailyReportByCountryCodeAction} from '../../interfaces/dailyCountryReportsByCode'
import DailyCountryReportService from '../../services/DailyCountryReportService'
import { DailyReportByCountryCode } from '../../types/IDailyReportByCountryCode'

export const dailyReportByCountryCode = (code:string, dateFormat:string, date:string) => {
  return async (dispatch: Dispatch<DailyReportByCountryCodeAction>) =>{
      try {
          dispatch({type: DailyReportByCountryCodeActionTypes.FETCH_DAILY_REPORT})
          const response = await DailyCountryReportService.getDailyReportByCountryCode(code, dateFormat, date)
          if(response.data.length === 0){
              console.log("No reports for this date")
               dispatch( {type: DailyReportByCountryCodeActionTypes.FETCH_DAILY_REPORT_ERROR, payload: "Error, No data in DB !"})
          }
        //  Test Manually 
        //  const cres : DailyReportByCountryCode[] = response.data            
        //   console.log("Totals, cres: " + cres)
        //   Object.entries(cres).forEach(([key, value]) => {
        //       console.log(key, value);
        //   });
          dispatch({type: DailyReportByCountryCodeActionTypes.FETCH_DAILY_REPORT_SUCCESS, payload: response.data})
      } catch (e) {
          console.log("Totals: " + e)
          dispatch( {type: DailyReportByCountryCodeActionTypes.FETCH_DAILY_REPORT_ERROR, payload: "Error, " + e + " !"})
      }
  }
}

export const dailyReportDataReset = () => {
  return (dispatch: Dispatch<DailyReportByCountryCodeAction>) => {
      dispatch({type: DailyReportByCountryCodeActionTypes.RESET})
  }
}