import { TotalResponse } from "../types/ITotalResp";

export interface TotalState {
    result: null | TotalResponse[];
    loading: boolean;
    error: null | string;
}

export enum TotalActionTypes{
    FETCH_TOTAL = 'FETCH_TOTAL',
    FETCH_TOTAL_SUCCESS = 'FETCH_TOTAL_SUCCESS',
    FETCH_TOTAL_ERROR = 'FETCH_TOTAL_ERROR',
    RESET = 'RESET'
}

interface FetchTotalAction{
    type: TotalActionTypes.FETCH_TOTAL;
}

interface FetchTotalSuccessAction{
    type: TotalActionTypes.FETCH_TOTAL_SUCCESS;
    payload: TotalResponse[];
}

interface FetchTotalErrorAction{
    type: TotalActionTypes.FETCH_TOTAL_ERROR;
    payload: string;
}

interface TotalActionReset{
    type: TotalActionTypes.RESET;
}

export type TotalAction = FetchTotalAction | FetchTotalSuccessAction | FetchTotalErrorAction | TotalActionReset