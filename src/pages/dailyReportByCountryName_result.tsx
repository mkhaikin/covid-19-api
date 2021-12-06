import { DailyReportByCountryName, ReportByProvince } from '../types/IDailyReportByCountryName';
import ProvinceResult from './province_result';

interface Props {
    res: DailyReportByCountryName;
}

const DailyCountryResult = ( {res}: Props) => {
    return(
        <div>            
            <h4>County: {res.country}</h4>
            <h4>date: {res.date}</h4>
            <h4>Latitude: {res.latitude}</h4>
            <h4>longitude: {res.longitude}</h4>
            <div>
                {res?.provinces.map((res: ReportByProvince, key: number) => {
                    return <ProvinceResult key={key} res={res}/>
                })}
            </div>
        </div>
    )
}

export default DailyCountryResult;