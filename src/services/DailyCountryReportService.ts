import $api from '../http'
import { AxiosResponse } from 'axios'
import { DailyReportByCountryName } from '../types/IDailyReportByCountryName'
import { DailyReportByCountryCode } from '../types/IDailyReportByCountryCode'
import config from '../config/config'


export default class DailyCountryReportService {
    static async getDailyReportByCountryName(name:string, dateFormat:string, date:string): Promise <AxiosResponse<DailyReportByCountryName[]>>{
        const getRes = await $api.get<DailyReportByCountryName[]>(config.defaults.requestDailyReportByCountryName + "&name=" + name + "&date=" + date +"&date-format=" + dateFormat)  
        console.log(config.defaults.requestDailyReportByCountryName + "&name=" + name + "&date=" + date +"&date-format=" + dateFormat)       
        return getRes;
    }

    static async getDailyReportByCountryCode(code:string, dateFormat:string, date:string): Promise <AxiosResponse<DailyReportByCountryCode[]>>{
        const getRes = await $api.get<DailyReportByCountryCode[]>(config.defaults.requestDailyReportByCountryCode + "&code=" + code + "&date=" + date +"&date-format=" + dateFormat)  
        console.log(config.defaults.requestDailyReportByCountryCode + "&code=" + code + "&date=" + date +"&date-format=" + dateFormat)       
        return getRes;
    }
}