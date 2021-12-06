import $api from '../http'
import { AxiosResponse } from 'axios'
import { ReportTotalsResponse } from '../types/IReportTotalsResp'
import config from '../config/config'

export default class ReportTotalsService {
  static async getReportTotals(): Promise< AxiosResponse<ReportTotalsResponse[]>>{
      const getRes = await $api.get<ReportTotalsResponse[]>(config.defaults.requestReportTotals)
      return getRes;
  }

}