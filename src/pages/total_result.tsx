import {TotalResponse} from '../types/ITotalResp'

interface Props {
    resp: TotalResponse;
}

const TotalResult = ( {resp}: Props) => {

    return(
        <div>            
            <h4>confirmed: {resp.confirmed}</h4>
            <h4>recovered: {resp.recovered}</h4>
            <h4>critical: {resp.critical}</h4>
            <h4>deaths: {resp.deaths}</h4>
            <h4>lastChange: {resp.lastChange}</h4>
            <h4>lastUpdate: {resp.lastUpdate}</h4>
            <hr></hr>
        </div>
    )
  
}

export default TotalResult;