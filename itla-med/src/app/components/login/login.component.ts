import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public msg: string;
  private Dr: object;

  constructor(private server: ServerService, private router: Router) {}

  public async login(email: string, password: string) {
    if (email === null || email === '')
      this.validate('Indique su Correo Electronico');
    else if (password === null || password === '')
      this.validate('Debe especificar su contraseña');
    else {
      this.Dr = {
        email: email,
        password: password,
      };
      let response = await this.server.login(this.Dr);
      if (response) {
        this.server.saveToken(response['token']);
        alert(response['msg']);
        this.router.navigateByUrl('/lobby');
      }
    }
  }

  private validate(msg: string) {
    this.msg = msg;
    document.getElementById('error').classList.add('mostrar');
  }
}
