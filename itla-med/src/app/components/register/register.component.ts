import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { Doctor } from '../models/doctor.model';
import { ServerService } from "../server.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private servi: ServerService) { }

  public user:Doctor = {
    name: "",
    email: "",
    password: ""
  }

 public async register(user:any): Promise<any>{
   const d = new user();

   return this.servi.register(user);
 }




  ngOnInit(): void {
  }

}
