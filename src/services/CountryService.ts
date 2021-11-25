import $api from '../http'
import {AxiosResponse} from 'axios'
import {  CountryResponse } from '../types/ICountryResp'
import config from '../config/config'

export default class CountryService {
    static async getLatestCountryDataByName(name: string): Promise< AxiosResponse<CountryResponse[]>>{
       
        const getresp = await $api.get<CountryResponse[]>(config.defaults.requestCountryByNameURL + name)
       
        return getresp
    }

    static async getLatestAllCountries(): Promise< AxiosResponse<CountryResponse[]>>{
        //config.defaults.
        const getresp = await $api.get<CountryResponse[]>(config.defaults.requestCountryAllURL)
        return getresp
    }
    
    static async getLatestCountryDataByCode(code: string): Promise< AxiosResponse<CountryResponse[]>>{
        //config.defaults.
        const getresp = await $api.get<CountryResponse[]>(config.defaults.requestCountryByCodeURL + code)
        return getresp
    }

}