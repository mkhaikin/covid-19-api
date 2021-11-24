import { combineReducers } from "redux";
import { countryReducer } from "./countryReducer";

export const rootReducer = combineReducers( {
     country: countryReducer,
})

export type RootState = ReturnType <typeof rootReducer>