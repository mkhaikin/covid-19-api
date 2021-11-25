import React from 'react';
import {HelpResponse} from '../types/IHelpResp'

interface Props {
    resp: HelpResponse;
}

const HelpResult = ( {resp}: Props) => {

    return(
        <div>            
            <h4>name: {resp.name}</h4>
            <h4>alpha2code: {resp.alpha2code}</h4>
            <h4>alpha3code: {resp.alpha3code}</h4>
            <h4>latitude: {resp.latitude}</h4>
            <h4>longitude: {resp.longitude}</h4>
            <hr></hr>
        </div>
    )
  
}

export default HelpResult;