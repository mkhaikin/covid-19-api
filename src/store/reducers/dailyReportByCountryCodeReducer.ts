import { DailyReportByCountryCodeState, DailyReportByCountryCodeActionTypes, DailyReportByCountryCodeAction } from "../../interfaces/dailyCountryReportsByCode"

const initialState: DailyReportByCountryCodeState = {
    result: null,
    loading: false,
    error: null
}

export const dailyReportByCountryCodeReducer = (state = initialState, action: DailyReportByCountryCodeAction): DailyReportByCountryCodeState => {
    switch (action.type){
        case DailyReportByCountryCodeActionTypes.FETCH_DAILY_REPORT:
            return  {...state, loading: true, error: null}
        case DailyReportByCountryCodeActionTypes.FETCH_DAILY_REPORT_SUCCESS:
            return {...state, loading: false, result: action.payload}
        case DailyReportByCountryCodeActionTypes.FETCH_DAILY_REPORT_ERROR:
            return {...state, loading: false, error: action.payload}  
        case DailyReportByCountryCodeActionTypes.RESET:
            return initialState          
        default:
            return state;
    }
}