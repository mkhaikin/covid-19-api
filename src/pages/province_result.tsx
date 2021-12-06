import { ReportByProvince } from '../types/IDailyReportByCountryName'

interface Props {
    res: ReportByProvince;
}

const ProvinceResult = ( {res}: Props) => {

    return(
        <div>            
            <h4>Province: {res.province}</h4>
            <h4>confirmed: {res.confirmed}</h4>
            <h4>Active: {res.active}</h4>
            <h4>recovered: {res.recovered}</h4>
            <h4>deaths: {res.deaths}</h4>
            <hr/>
        </div>
    )
}

export default ProvinceResult;