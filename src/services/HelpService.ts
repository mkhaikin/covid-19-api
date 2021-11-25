import $api from '../http'
import {AxiosResponse} from 'axios'
import {  HelpResponse } from '../types/IHelpResp'
import config from '../config/config'

export default class HelpService {
    static async getListOfCountries(): Promise< AxiosResponse<HelpResponse[]>>{
       
        const getresp = await $api.get<HelpResponse[]>(config.defaults.requestHelp)
       
        return getresp
    }

}