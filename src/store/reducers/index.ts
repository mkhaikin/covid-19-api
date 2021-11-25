import { combineReducers } from "redux";
import { countryReducer } from "./countryReducer";
import { helpReducer } from "./helpReducer";
import { totalReducer } from "./totalReducer";

export const rootReducer = combineReducers( {
     country: countryReducer,
     help: helpReducer,
     total: totalReducer,
})

export type RootState = ReturnType <typeof rootReducer>