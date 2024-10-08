import { Component, OnInit } from '@angular/core';
import { DatePipe } from  '@angular/common' ;
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe,
           
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  title = "WELCOME BACK TO MY APPLICATION"

  constructor(private userService:UsersService){}

  ngOnInit(): void {
    this.get_User_logged();
  }


 
  curretDate:Date = new Date();

  get_User_logged(){
    this.userService.get_User().subscribe((user) =>{
      console.log(user);
    });
  }

}
