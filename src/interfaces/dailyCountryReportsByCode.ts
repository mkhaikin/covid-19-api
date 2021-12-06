import { DailyReportByCountryCode } from "../types/IDailyReportByCountryCode";

export interface DailyReportByCountryCodeState {
    result: null | DailyReportByCountryCode[];
    loading: boolean;
    error: null | string;
}

export enum DailyReportByCountryCodeActionTypes{
    FETCH_DAILY_REPORT = 'FETCH_DAILY_REPORT',
    FETCH_DAILY_REPORT_SUCCESS = 'FETCH_DAILY_REPORT_SUCCESS',
    FETCH_DAILY_REPORT_ERROR = 'FETCH_DAILY_REPORT_ERROR',
    RESET = 'RESET'
}

interface FetchDailyReportAction{
    type: DailyReportByCountryCodeActionTypes.FETCH_DAILY_REPORT;
}

interface FetchDailyReportSuccessAction{
    type: DailyReportByCountryCodeActionTypes.FETCH_DAILY_REPORT_SUCCESS;
    payload: DailyReportByCountryCode[];
}

interface FetchDailyReportErrorAction{
    type: DailyReportByCountryCodeActionTypes.FETCH_DAILY_REPORT_ERROR;
    payload: string;
}

interface DailyReportActionReset{
    type: DailyReportByCountryCodeActionTypes.RESET;
}

export type DailyReportByCountryCodeAction = 
    FetchDailyReportAction | 
    FetchDailyReportSuccessAction | 
    FetchDailyReportErrorAction | 
    DailyReportActionReset