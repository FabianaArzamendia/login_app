import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login/login.component";
import { RegisterComponent } from './register/register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
             HomeComponent,
             LoginComponent,
             RegisterComponent,
             FormsModule,             
            ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WELCOME BACK MY APP';
  titulo='my-fancy-title';
  
 

  
}   
