import React from 'react';
import {CountryResponse} from '../types/ICountryResp'

interface Props {
    resp: CountryResponse;
}

const CountryResult = ( {resp}: Props) => {

    return(
        <div>            
            <h4>code: {resp.code}</h4>
            <h4>confirmed: {resp.confirmed}</h4>
            <h4>country: {resp.country}</h4>
            <h4>critical: {resp.critical}</h4>
            <h4>deaths: {resp.deaths}</h4>
            <h4>lastChange: {resp.lastChange}</h4>
            <h4>lastUpdate: {resp.lastUpdate}</h4>
            <h4>latitude: {resp.latitude}</h4>
            <h4>longitude: {resp.longitude}</h4>
            <h4>recovered: {resp.recovered}</h4>
            <hr></hr>
        </div>
    )
   
  
}

export default CountryResult;