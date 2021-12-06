import { ReportTotalsState, ReportTotalsActionTypes, ReportTotalsAction } from "../../interfaces/reports";

const initialState:ReportTotalsState = {
  result:null,
  loading:false,
  error:null
}

export const reportTotalsReducer = (state = initialState, action: ReportTotalsAction): ReportTotalsState => {
  switch (action.type){
    case ReportTotalsActionTypes.FETCH_REPORT_TOTALS:
        return  {...state, loading: true, error: null}
    case ReportTotalsActionTypes.FETCH_REPORT_TOTALS_SUCCESS:
        return {...state, loading: false, result: action.payload}
    case ReportTotalsActionTypes.FETCH_REPORT_TOTALS_ERROR:
        return {...state, loading: false, error: action.payload}  
    case ReportTotalsActionTypes.RESET:
        return initialState          
    default:
        return state;
  }
}