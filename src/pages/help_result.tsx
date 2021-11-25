import React from 'react';
import {HelpResponse} from '../types/IHelpResp'

interface Props {
    resp: HelpResponse;
}

const CountryResult = ( {resp}: Props) => {

    return(
        <div>            
            <h4>code: {resp.name}</h4>
            <h4>confirmed: {resp.alpha2code}</h4>
            <h4>country: {resp.alpha3code}</h4>
            <h4>latitude: {resp.latitude}</h4>
            <h4>longitude: {resp.longitude}</h4>
            <hr></hr>
        </div>
    )
  
}

export default CountryResult;