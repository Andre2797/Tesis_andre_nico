import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user={
    correo:'',
    contrasenia:''
  }

  constructor(private autService:AuthService
    ,private router:Router) { }

  ngOnInit(): void {
  }
  iniciarSesion(){
    console.log(this.user)
   

    this.autService.login(this.user)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/home'])
      },
      err=>console.log(err)
    )

  }

}
