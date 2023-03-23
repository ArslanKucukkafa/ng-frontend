export class Response {
    message:string;
    status:boolean;

    constructor(message:string,isSuccesfully:boolean){
      this.status=isSuccesfully;
      this.message= message;
    }
  }