import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../../models/doctor.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private servi: ServerService, private router: Router) {}

    user:Doctor = {
    name: "",
    email: "",
    password:""
  }

  public async register(name:string, email:string, password:string) {

    if (this.user.name === null || this.user.name === '') {
    }
    else if(this.user.email === null || this.user.email){
    }
    else if(this.user.password=== null || this.user.password){
    }
    else {
      let newD = {
        name: this.user.name,
        email:this.user.email,
        password:this.user.password
      };
      let msj  = await this.servi.register(newD);
      alert(msj);
      console.log(msj)
    }
  }

  ngOnInit(): void {}
}
