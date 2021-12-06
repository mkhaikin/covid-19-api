import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useTypesSelector} from "../hooks/useTypesSelector";
import { dailyReportByCountryName, dailyReportDataReset } from '../store/action_creators/dailyReportByCountryNameCall';
import {DailyReportByCountryName} from '../types/IDailyReportByCountryName';
import  DailyCountryResult  from "./dailyReportByCountryName_result"


const DailyReportyByCountryNamePage: React.FunctionComponent = (props) => {
  const [countryName, setCountryName] = useState("");
  const [dateFormat, setDateFormat] = useState("dd-mm-yyyy");
  const [date, setDate] = useState("");
  
  const dispatch = useDispatch();
  const {result, error, loading} = useTypesSelector(state => state.dailyReportByCountyName)
  
  function searchResult() {
    dispatch(dailyReportByCountryName(countryName, dateFormat, date))
  }

  function Reset() {
      dispatch(dailyReportDataReset())
      setCountryName("");
      setDate("")
  }
  return (
    <div>
      <p>This is the Daily Report by Country Name page!</p>
      <div>
          <input
              type="text"
              value={countryName}
              placeholder="Enter some letters"
              onChange={e => { setCountryName( e.target.value ) }}
          />
      </div>
      <div>
          <input
              type="text"
              value={date}
              placeholder="dd-mm-yyyy"
              onChange={e => { setDate( e.target.value ) }}
          />
      </div>
      <div>
          <input
              type="text"
              value={dateFormat}
              placeholder="dd-mm-yyyy"
              onChange={e => { setDateFormat( e.target.value ) }}
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
        {result?.map((res: DailyReportByCountryName, key: number) => {
            return <DailyCountryResult key={key} res={res}/>
        })}
      </div>
    </div>
  )
}

export default DailyReportyByCountryNamePage;