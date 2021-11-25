const config = {
    defaults: {
        namespace: 'Covid19 Report Application',
        requestCountryByNameURL: "/country?format=json&name=",
        requestCountryAllURL: "/country/all?format=json",
        requestCountryByCodeURL: "/country/code?format=json&code=",
        requestHelp: "/help/countries?format=json",
    }
}

export default config