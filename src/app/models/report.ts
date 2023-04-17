import { DatePipe } from "@angular/common"
import { Observable } from "rxjs"
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

export interface ReportDetail {
    reportId:number
    patient_firstname: string
    patient_lastname: string
    patient_identity_no: string
    dfnTitle:string
    dfnDetails:string
    create_date:Date
    image:Image  
}
export interface UpdateBody {
    reportId:number
    patient_firstname: string
    patient_lastname: string
    patient_identity_no: string
    dfnTitle:string
    dfnDetails:string 
    create_date:Date
}


export interface Image{
    image_id:number
    image_name:string
    image_type:string
    data:Blob
}


