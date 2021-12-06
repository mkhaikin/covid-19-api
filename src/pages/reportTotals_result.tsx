import {ReportTotalsResponse} from '../types/IReportTotalsResp'

interface Props {
    resp: ReportTotalsResponse;
}

const ReportTotalsResult = ( {resp}: Props) => {

    return(
        <div>            
            <h4>confirmed: {resp.confirmed}</h4>
            <h4>recovered: {resp.recovered}</h4>
            <h4>critical: {resp.critical}</h4>
            <h4>deaths: {resp.deaths}</h4>
            <h4>Active: {resp.active}</h4>
            <h4>Date: {resp.date}</h4>
            <hr></hr>
        </div>
    )
  
}

export default ReportTotalsResult;