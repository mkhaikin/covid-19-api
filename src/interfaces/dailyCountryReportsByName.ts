import { DailyReportByCountryName } from "../types/IDailyReportByCountryName";

export interface DailyReportByCountryNameState {
    result: null | DailyReportByCountryName[];
    loading: boolean;
    error: null | string;
}

export enum DailyReportByCountryNameActionTypes{
    FETCH_DAILY_REPORT = 'FETCH_DAILY_REPORT',
    FETCH_DAILY_REPORT_SUCCESS = 'FETCH_DAILY_REPORT_SUCCESS',
    FETCH_DAILY_REPORT_ERROR = 'FETCH_DAILY_REPORT_ERROR',
    RESET = 'RESET'
}

interface FetchDailyReportAction{
    type: DailyReportByCountryNameActionTypes.FETCH_DAILY_REPORT;
}

interface FetchDailyReportSuccessAction{
    type: DailyReportByCountryNameActionTypes.FETCH_DAILY_REPORT_SUCCESS;
    payload: DailyReportByCountryName[];
}

interface FetchDailyReportErrorAction{
    type: DailyReportByCountryNameActionTypes.FETCH_DAILY_REPORT_ERROR;
    payload: string;
}

interface DailyReportActionReset{
    type: DailyReportByCountryNameActionTypes.RESET;
}

export type DailyReportByCountryNameAction = 
    FetchDailyReportAction | 
    FetchDailyReportSuccessAction | 
    FetchDailyReportErrorAction | 
    DailyReportActionReset