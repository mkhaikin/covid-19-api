import { combineReducers } from "redux";
import { countryReducer } from "./countryReducer";
import { helpReducer } from "./helpReducer";

export const rootReducer = combineReducers( {
     country: countryReducer,
     help: helpReducer,
})

export type RootState = ReturnType <typeof rootReducer>