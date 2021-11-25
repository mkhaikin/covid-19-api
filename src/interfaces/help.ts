import { HelpResponse } from "../types/IHelpResp";

export interface HelpState {
    result: null | HelpResponse[];
    loading: boolean;
    error: null | string;
}

export enum HelpActionTypes{
    FETCH_HELP = 'FETCH_HELP',
    FETCH_HELP_SUCCESS = 'FETCH_HELP_SUCCESS',
    FETCH_HELP_ERROR = 'FETCH_HELP_ERROR',

    RESET = 'RESET'
}

interface FetchHelpAction{
    type: HelpActionTypes.FETCH_HELP;
}

interface FetchHelpSuccessAction{
    type: HelpActionTypes.FETCH_HELP_SUCCESS;
    payload: HelpResponse[];
}

interface FetchHelpErrorAction{
    type: HelpActionTypes.FETCH_HELP_ERROR;
    payload: string;
}

///////////////////////////
interface HelpActionReset{
    type: HelpActionTypes.RESET;
}

export type HelpAction = FetchHelpAction | FetchHelpSuccessAction | FetchHelpErrorAction | HelpActionReset