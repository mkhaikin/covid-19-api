import { Dispatch } from "redux"
import { DailyReportByCountryNameActionTypes, DailyReportByCountryNameAction} from '../../interfaces/dailyCountryReportsByName'
import DailyCountryReportService from '../../services/DailyCountryReportService'
import { DailyReportByCountryName } from '../../types/IDailyReportByCountryName'

export const dailyReportByCountryName = (name:string, dateFormat:string, date:string) => {
  return async (dispatch: Dispatch<DailyReportByCountryNameAction>) =>{
      try {
          dispatch({type: DailyReportByCountryNameActionTypes.FETCH_DAILY_REPORT})
          const response = await DailyCountryReportService.getDailyReportByCountryName(name, dateFormat, date)
          if(response.data.length === 0){
              console.log("No reports for this date")
               dispatch( {type: DailyReportByCountryNameActionTypes.FETCH_DAILY_REPORT_ERROR, payload: "Error, No data in DB !"})
          }
        // Test Manually
        //   const cres : DailyReportByCountryName[] = response.data            
        //   console.log("Totals, cres: " + cres)
        //   Object.entries(cres).forEach(([key, value]) => {
        //       console.log(key, value);
        //   });
          dispatch({type: DailyReportByCountryNameActionTypes.FETCH_DAILY_REPORT_SUCCESS, payload: response.data})
      } catch (e) {
          console.log("Totals: " + e)
          dispatch( {type: DailyReportByCountryNameActionTypes.FETCH_DAILY_REPORT_ERROR, payload: "Error, " + e + " !"})
      }
  }
}

export const dailyReportDataReset = () => {
  return (dispatch: Dispatch<DailyReportByCountryNameAction>) => {
      dispatch({type: DailyReportByCountryNameActionTypes.RESET})
  }
}