import React from 'react';
import { useDispatch } from 'react-redux';
import { reportTotals, reportTotalsDataReset } from '../store/action_creators/reportTotalsCall'
import ReportTotalsResult from './reportTotals_result'
import { useTypesSelector } from "../hooks/useTypesSelector";
import { ReportTotalsResponse } from '../types/IReportTotalsResp'

const ReportTotalsPage: React.FunctionComponent = props => {
    const dispatch = useDispatch()
    const {result, error, loading} = useTypesSelector(state => state.reportTotals)

    function searchResult() {
        dispatch(reportTotals())
    }

    function Reset() {
        dispatch(reportTotalsDataReset())
    }

    return (
        <div>
            <p>This is the Total page!</p>
            <div>
                <button onClick={searchResult}>Get Result</button>
            </div>
            <div>
                <button onClick={Reset}>Reset</button>
            </div>
            <div>
                {loading  && <p>Loading...</p>}
                {error   && <p>{error}</p>}
            </div>
            <div>
                {result?.map((res: ReportTotalsResponse, key: number) => {
                    return <ReportTotalsResult key={key} resp={res}/>
                })}
            </div>
        </div>
    )
}

export default ReportTotalsPage;