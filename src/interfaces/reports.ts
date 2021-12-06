import { ReportTotalsResponse } from "../types/IReportTotalsResp";

export interface ReportTotalsState {
    result: null | ReportTotalsResponse[];
    loading: boolean;
    error: null | string;
}

export enum ReportTotalsActionTypes{
    FETCH_REPORT_TOTALS = 'FETCH_REPORT_TOTALS',
    FETCH_REPORT_TOTALS_SUCCESS = 'FETCH_REPORT_TOTALS_SUCCESS',
    FETCH_REPORT_TOTALS_ERROR = 'FETCH_REPORT_TOTALS_ERROR',
    RESET = 'RESET'
}

interface FetchReportTotalsAction{
    type: ReportTotalsActionTypes.FETCH_REPORT_TOTALS;
}

interface FetchReportTotalsSuccessAction{
    type: ReportTotalsActionTypes.FETCH_REPORT_TOTALS_SUCCESS;
    payload: ReportTotalsResponse[];
}

interface FetchReportTotalsErrorAction{
    type: ReportTotalsActionTypes.FETCH_REPORT_TOTALS_ERROR;
    payload: string;
}

interface ReportTotalsActionReset{
    type: ReportTotalsActionTypes.RESET;
}

export type ReportTotalsAction = 
  FetchReportTotalsAction | 
  FetchReportTotalsSuccessAction | 
  FetchReportTotalsErrorAction | 
  ReportTotalsActionReset