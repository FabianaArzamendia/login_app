import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { UsersService } from '../../users/users.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email:string =""
  password:string =""
  confirmPassword:string =""

constructor(public router:Router,public userService:UsersService){}


  register_User(){
    const user = {email:this.email, password : this.password};
    this.userService.User_Register_Service(user).subscribe((data) =>{
      this.userService.set_Token(data.token);
      console.log(data);
    });
    
    this.router.navigateByUrl('/');

  }
  Validatedate(form:any){
    console.log(form.value)
  }

}
