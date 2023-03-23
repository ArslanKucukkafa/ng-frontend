export class LoginResponse {
    token:string;
    rol:string
    status:boolean;

    constructor(token:string,rol:string,status:boolean){
        this.token= token;
        this.rol=rol
        this.status=status;
    }
  }