import * as CountryDataCreators from './countrycall'
import * as HelpDataCreators from './helpcall'
import * as TotalDataCreators from './totalcall'

const ActionCreators = {
    ...CountryDataCreators,
    ...HelpDataCreators,
    ...TotalDataCreators,
}
export default ActionCreators