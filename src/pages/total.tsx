import React from 'react';
import { useDispatch } from 'react-redux';
import {Totals, totalDataReset} from '../store/action_creators/totalcall'
import TotalResult from './total_result'
import {useTypesSelector} from "../hooks/useTypesSelector";
import {TotalResponse} from '../types/ITotalResp'

const TotalPage: React.FunctionComponent = props => {
    const dispatch = useDispatch()
    const {result, error, loading} = useTypesSelector(state => state.total)

    function searchResult() {
        dispatch(Totals())
    }

    function Reset() {
        dispatch(totalDataReset())
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
                {result?.map((res: TotalResponse, key: number) => {
                    return <TotalResult key={key} resp={res}/>
                })}
            </div>
        </div>
    )
}

export default TotalPage;