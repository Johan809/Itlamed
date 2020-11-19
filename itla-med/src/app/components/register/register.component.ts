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

  public user: Doctor = {
    name: '',
    email: '',
    password: '',
  };

  public async registrar(name, email, clave) {
    (this.user.name = name),
      (this.user.email = email),
      (this.user.password = clave);

    if (this.user.name === null || this.user.name === '') {
      alert('Este campo es obligatorio');
    } else {
      this.servi.register(this.user);
    }
  }

  ngOnInit(): void {}
}
