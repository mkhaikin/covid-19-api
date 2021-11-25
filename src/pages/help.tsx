import React from 'react';
import { useDispatch } from 'react-redux';
import {ListOfCountries, helpDataReset} from '../store/action_creators/helpcall'
import HelpResult from './help_result'
import {useTypesSelector} from "../hooks/useTypesSelector";
import {HelpResponse} from '../types/IHelpResp'


const HelpPage: React.FunctionComponent = props => {
    const dispatch = useDispatch()
    const {result, error, loading} = useTypesSelector(state => state.help)

    function searchResult() {
        dispatch(ListOfCountries())
    }

    function Reset() {
        dispatch(helpDataReset())
    }

    return (
        <div>
            <p>This is the Help page!</p>
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
                {result?.map((res: HelpResponse, key: number) => {
                    return <HelpResult key={key} resp={res}/>
                })}
            </div>
        </div>
    )
}

export default HelpPage;