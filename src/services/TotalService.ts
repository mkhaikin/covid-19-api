import $api from '../http'
import { AxiosResponse } from 'axios'
import { TotalResponse } from '../types/ITotalResp'
import config from '../config/config'

export default class TotalService {
    static async getTotals(): Promise< AxiosResponse<TotalResponse[]>>{
       
        const getresp = await $api.get<TotalResponse[]>(config.defaults.requestTotal)
       
        return getresp
    }

}