import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { AlertController } from "@ionic/angular";
import { ServerService } from '../server.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage {
  public msg: string;
  
  constructor(private alertCtrl:AlertController, private router: Router, private server: ServerService) {}

  public async register(name: string, email: string, password: string, pass2: string){
    if (name === null || name === "") {
      this.validate("Debe llenar el nombre");
    } else if (email === null || email === "") {
      this.validate("Debe llenar el correo electronico");
    } else if (password === null || password === "") {
      this.validate("Debe especificar una contraseña");
    } else if (password != pass2) {
      this.validate("Las contraseñas no coinciden");
    } else {
      let newDr = {
        name: name,
        email: email,
        password: password
      };  
      let msg = await this.server.register(newDr);
      console.log(msg);
      const alertElment = await this.alertCtrl.create({
        header: "Tu cuenta ha sido creada con exito!",
        message: "Inicia sesion para entrar a la aplicacion.",
        buttons: [
          {
            text: "Ok",
            handler: () => {
              this.router.navigateByUrl("/login");
            },
          },
        ],
      });

      if (msg) await alertElment.present();
    }
  }

  private validate(msg: string) {
    this.msg = msg;
    document.getElementById("error").classList.add("mostrar");
  }
}
