import * as CountryDataCreators from './countrycall';
import * as HelpDataCreators from './helpcall';
import * as TotalDataCreators from './totalcall';
import * as ReportTotalsDataCreators from './reportTotalsCall';
import * as DailyReportByCountryCodeCreators from './dailyReportByCountryCodeCall';
import * as DailyReportByCountryNameCreators from './dailyReportByCountryNameCall';

const ActionCreators = {
    ...CountryDataCreators,
    ...HelpDataCreators,
    ...TotalDataCreators,
    ...ReportTotalsDataCreators,
    ...DailyReportByCountryCodeCreators,
    ...DailyReportByCountryNameCreators,
}
export default ActionCreators