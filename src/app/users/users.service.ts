import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
 

  constructor(private  httpCliente:HttpClient,
             private cookieService:CookieService) {

   }

   User_Login_Service(user:any):Observable<any> {
  
    return this. httpCliente.post('https://reqres.in/api/login', user);
  }

  User_Register_Service(user:any): Observable<any> {
    return this.httpCliente.post("https://reqres.in/api/register", user);
  }

  set_Token(token:string){
    this.cookieService.set("token",token);
  }
  get_Token(){
    return this.cookieService.get("token");
  }

  get_User() {
    return this.httpCliente.get("https://reqres.in/api/users/4");
  }

  get_User_Logged() {
    const token = this.get_Token();
    
  }
   
}
