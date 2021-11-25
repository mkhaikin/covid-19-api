import { CountryResponse } from "../types/ICountryResp";

export interface CountryState {
    result: null | CountryResponse[];
    loading: boolean;
    error: null | string;
}

export enum CountryActionTypes{
    FETCH_COUNTRY_BYNAME = 'FETCH_COUNTRY_BYNAME',
    FETCH_COUNTRY_BYNAME_SUCCESS = 'FETCH_COUNTRY_BYNAME_SUCCESS',
    FETCH_COUNTRY_BYNAME_ERROR = 'FETCH_COUNTRY_BYNAME_ERROR',

    FETCH_COUNTRY_ALL = 'FETCH_COUNTRY_ALL',
    FETCH_COUNTRY_ALL_SUCCESS = 'FETCH_COUNTRY_ALL_SUCCESS',
    FETCH_COUNTRY_ALL_ERROR = 'FETCH_COUNTRY_ALL_ERROR',

    FETCH_COUNTRY_BYCODE = 'FETCH_COUNTRY_BYCODE',
    FETCH_COUNTRY_BYCODE_SUCCESS = 'FETCH_COUNTRY_BYCODE_SUCCESS',
    FETCH_COUNTRY_BYCODE_ERROR = 'FETCH_COUNTRY_BYCODE_ERROR',

    RESET = 'RESET'
}

interface FetchCountryAction{
    type: CountryActionTypes.FETCH_COUNTRY_BYNAME;
}

interface FetchCountrySuccessAction{
    type: CountryActionTypes.FETCH_COUNTRY_BYNAME_SUCCESS;
    payload: CountryResponse[];
}

interface FetchCountryErrorAction{
    type: CountryActionTypes.FETCH_COUNTRY_BYNAME_ERROR;
    payload: string;
}
//////////////////////
interface FetchCountryAllAction{
    type: CountryActionTypes.FETCH_COUNTRY_ALL;
}

interface FetchCountryAllSuccessAction{
    type: CountryActionTypes.FETCH_COUNTRY_ALL_SUCCESS;
    payload: CountryResponse[];
}

interface FetchCountryAllErrorAction{
    type: CountryActionTypes.FETCH_COUNTRY_ALL_ERROR;
    payload: string;
}
///////////////////////
interface FetchCountryCodeAction{
    type: CountryActionTypes.FETCH_COUNTRY_BYCODE;
}

interface FetchCountryCodeSuccessAction{
    type: CountryActionTypes.FETCH_COUNTRY_BYCODE_SUCCESS;
    payload: CountryResponse[];
}

interface FetchCountryCodeErrorAction{
    type: CountryActionTypes.FETCH_COUNTRY_BYCODE_ERROR;
    payload: string;
}
///////////////////////////
interface CountryActionReset{
    type: CountryActionTypes.RESET;
}

export type CountryAction = FetchCountryAction | FetchCountrySuccessAction | FetchCountryErrorAction |
                            FetchCountryAllAction | FetchCountryAllSuccessAction | FetchCountryAllErrorAction |
                            FetchCountryCodeAction | FetchCountryCodeSuccessAction | FetchCountryCodeErrorAction |
                            CountryActionReset