import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'os';
import { promise, logging } from 'protractor';
import { ServerService } from '../server.service';
import { Doctor } from '../../models/doctor.model';
import { Consult } from '../../models/consult.model';
import { LobbyComponent } from '../lobby/lobby.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private servi: ServerService,
    private router: Router) { }

  public user: Doctor = {
    email: '',
    password: '',
    name: '',
  };

  public async login(email:string,clave:string)

  {
 
   if (this.user.email == 'raul' && this.user.password =='1234') {
     alert('probando enrutamiento')
   }
   
   else{
     this.servi.login(this.user)
   }
 
  }

  ngOnInit(): void {

    this.login
  } 

}
