export class UserOutput {
    userName: string;
    password: string;
    name: string;
    email:string;

    constructor(username:string,password:string,name:string,email:string){
        this.userName=username;
        this.password=password;
        this.name=name;
        this.email=email;
    }
}