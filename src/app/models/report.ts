import { FileHandle } from "./file-handle"

export interface Report {
    patient_firstname: string
    patient_lastname: string
    patient_identity_no: string
    dfnTitle:string
    dfnDetails:string
    image:FileHandle[]
}

export interface ReportGet {
    reportId:number
    patient_firstname: string
    patient_lastname: string
    patient_identity_no: string
    dfnTitle:string
    dfnDetails:string
    create_date:Date    
}


