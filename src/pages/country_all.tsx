import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {AllCountriesData, countryDataReset} from '../store/action_creators/countrycall'
import CountryResult from './country_result'
import {useTypesSelector} from "../hooks/useTypesSelector";
import {CountryResponse} from '../types/ICountryResp'

const CountryAllPage: React.FunctionComponent = props => {
    const dispatch = useDispatch()
    const {result, error, loading} = useTypesSelector(state => state.country)
   
    //console.log(JSON.stringify(result))
   
    function searchResult() {
        dispatch(AllCountriesData())
    }

    function Reset() {
        dispatch(countryDataReset())
    }

    return (
       <div>
            <p>This is the All Countries Name!</p>

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
                {result?.map((res: CountryResponse, key: number) => {
                    return <CountryResult key={key} resp={res}/>
                })}
            </div>
            
        </div>
    )
}

export default CountryAllPage;