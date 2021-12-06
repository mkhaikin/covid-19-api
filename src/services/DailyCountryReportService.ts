import $api from '../http'
import { AxiosResponse } from 'axios'
import { DailyReportByCountryName } from '../types/IDailyReportByCountryName'
import config from '../config/config'


export default class DailyCountryReportService {
    static async getDailyReportByCountryName(name:string, dateFormat:string, date:string): Promise <AxiosResponse<DailyReportByCountryName[]>>{
        const getRes = await $api.get<DailyReportByCountryName[]>(config.defaults.requestDailyReportByCountryName + "&name=" + name + "&date=" + date +"&date-format=" + dateFormat)  
        console.log(config.defaults.requestDailyReportByCountryName + "&name=" + name + "&date=" + date +"&date-format=" + dateFormat)       
        return getRes;
    }
    // static async getLatestAllCountries(): Promise< AxiosResponse<CountryResponse[]>>{
    //     //config.defaults.
    //     const getresp = await $api.get<CountryResponse[]>(config.defaults.requestCountryAllURL)
    //     return getresp
    // }
    
    // static async getLatestCountryDataByCode(code: string): Promise< AxiosResponse<CountryResponse[]>>{
    //     //config.defaults.
    //     const getresp = await $api.get<CountryResponse[]>(config.defaults.requestCountryByCodeURL + code)
    //     return getresp
    // }

}