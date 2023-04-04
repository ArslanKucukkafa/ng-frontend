export interface Laborant {
    name: string;
    surname: string;
    laborant_id: string;
    password: string;
  }
  export interface LaborantGet{
    id:number,
    ad: string;
    soyad: string;
    laborantId: string;
    enabled:boolean
  }

  export interface DetailLaborant{
      ad:string,
      soyad:string,
      laborantId:string,
      rolename:string,
      reportCount:number
  }