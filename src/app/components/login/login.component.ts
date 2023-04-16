import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
  }
  ngOnInit() {
    
  }
  constructor(private authService: AuthService){


  }
 
  
  Ingresar(){

    
    const { email , password}=this.usuario;
    this.authService.login(email,password).then(res =>{
      console.log("se registro; ",res);
    })
  }

  IngresarConGoogle(){

    console.log(this.usuario);
    const {email,password}=this.usuario;
    this.authService.loginWithGoogle(email,password).then(res =>{
      console.log("se registro; ",res);
    })
  }

  obtenerUsuarioLogueado(){
    this.authService.getUserLogged().subscribe(res =>{
      console.log(res?.email);
  });}

  logout(){

    this.authService.logout();
  }
}



