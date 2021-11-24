export interface CountryResponse{
    country: string;
    code: string;
    confirmed: number;
    recovered: number;
    critical: number;
    deaths: number;
    latitude: number;
    longitude: number;
    lastChange: string;
    lastUpdate: string;
}

export interface CountryResponseArr{
    countryresp: CountryResponse[];
}