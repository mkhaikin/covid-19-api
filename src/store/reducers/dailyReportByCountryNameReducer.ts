import { DailyReportByCountryNameState, DailyReportByCountryNameActionTypes, DailyReportByCountryNameAction } from "../../interfaces/dailyCountryReportsByName"

const initialState: DailyReportByCountryNameState = {
    result: null,
    loading: false,
    error: null
}

export const dailyReportByCountryNameReducer = (state = initialState, action: DailyReportByCountryNameAction): DailyReportByCountryNameState => {
    switch (action.type){
        case DailyReportByCountryNameActionTypes.FETCH_DAILY_REPORT:
            return  {...state, loading: true, error: null}
        case DailyReportByCountryNameActionTypes.FETCH_DAILY_REPORT_SUCCESS:
            return {...state, loading: false, result: action.payload}
        case DailyReportByCountryNameActionTypes.FETCH_DAILY_REPORT_ERROR:
            return {...state, loading: false, error: action.payload}  
        case DailyReportByCountryNameActionTypes.RESET:
            return initialState          
        default:
            return state;
    }
}