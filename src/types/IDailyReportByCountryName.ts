export interface ReportByProvince{
  province: string,
  confirmed: number;
  recovered: number;
  deaths: number;
  active: number;
}

export interface DailyReportByCountryName{
  country: string;
  provinces: ReportByProvince[];
  latitude: number;
  longitude: number;
  date: string;
}