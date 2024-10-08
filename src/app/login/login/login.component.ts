import { Component } from '@angular/core';
import { FormsModule,Validators } from '@angular/forms';
import { UsersService } from '../../users/users.service';
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string ="";
  password:string ="";
  first_name : string="";


  constructor(private userService: UsersService,public router:Router){}


  login_User(){

    const user = {email: this.email,password: this.password};

    this.userService.User_Login_Service(user).subscribe((data) => {
      this.userService.set_Token(data.token);
      console.log(data);

      this.router.navigateByUrl('/');

      (err: { message: any; }) => {

        console.log("Es error = " + err.message);
      }
      

      });    
   

  }

  Validatedate(f:any) {

    console.log(f.value);

}
}
