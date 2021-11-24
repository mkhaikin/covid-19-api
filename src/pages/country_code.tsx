import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {countryDataByCode, countryDataReset} from '../store/action_creators/countrycall'
import CountryResult from './country_result'
import {useTypesSelector} from "../hooks/useTypesSelector";
import {CountryResponse} from '../types/ICountryResp'

const CountryCodePage: React.FunctionComponent = props => {
    const [code, setCode] = useState("")
    const dispatch = useDispatch()
    const {result, error, loading} = useTypesSelector(state => state.country)
   
    //console.log(JSON.stringify(result))
   
    function searchResult() {
        dispatch(countryDataByCode(code))
    }

    function Reset() {
        dispatch(countryDataReset())
        setCode("")
    }

    return (
       <div>
            <p>This is the Country Code page!</p>
            <div>
                <input
                    type="text"
                    value={code}
                    placeholder="Enter some letters"
                    onChange={e => { setCode( e.target.value ) }}
                />
            </div>
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

export default CountryCodePage;