import * as CountryDataCreators from './countrycall'
import * as HelpDataCreators from './helpcall'

const ActionCreators = {
    ...CountryDataCreators,
    ...HelpDataCreators,
}
export default ActionCreators