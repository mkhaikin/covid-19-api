import { combineReducers } from "redux";
import { countryReducer } from "./countryReducer";
import { helpReducer } from "./helpReducer";
import { totalReducer } from "./totalReducer";
import { reportTotalsReducer } from "./reportTotalsReducer";
import { dailyReportByCountryCodeReducer } from "./dailyReportByCountryCodeReducer";
import { dailyReportByCountryNameReducer } from "./dailyReportByCountryNameReducer";

export const rootReducer = combineReducers( {
     country: countryReducer,
     help: helpReducer,
     total: totalReducer,
     reportTotals: reportTotalsReducer,
     dailyReportByCountryCode:dailyReportByCountryCodeReducer,
     dailyReportByCountyName: dailyReportByCountryNameReducer,
})

export type RootState = ReturnType <typeof rootReducer>