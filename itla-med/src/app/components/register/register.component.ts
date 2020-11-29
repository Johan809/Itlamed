import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public msg: string;

  constructor(private router: Router, private server: ServerService) {}

  public async register(
    name: string,
    email: string,
    password: string,
    passTwo: string
  ) {
    if (name === null || name === '') {
      alert('Debe llenar el nombre');
    } else if (email === null || email === '') {
      alert('Debe llenar el correo electronico');
    } else if (password === null || password === '') {
      alert('Debe especificar una contraseña');
    } else if (password != passTwo) {
      alert('Las contraseñas no coinciden');
    } else {
      let newDr = {
        name: name,
        email: email,
        password: password,
        passtwo: passTwo
      };
      let msg = await this.server.register(newDr);
      alert(msg);

      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {}
}
