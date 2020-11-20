import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ServerService } from "../server.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  public msg: string;
  private Dr: object;
  constructor(
    private server: ServerService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  public async login(email: any, password: any) {
    if (email === null || email === "")
      this.validate("Indique su Correo Electronico");
    else if (password === null || password === "")
      this.validate("Debe especificar su contraseña");
    else {
      this.Dr = {
        email: email,
        password: password,
      };
      let response = await this.server.login(this.Dr);
      const alertElment = await this.alertCtrl.create({
        header: "Bienvenido a nuestra plataforma",
        message: response["msg"],
        buttons: [
          {
            text: "Ok",
            handler: () => this.router.navigateByUrl("/lobby"),
          },
        ],
      });
      if (response) {
        this.server.saveToken(response["token"]);
        await alertElment.present();
      }
    }
  }

  private validate(msg: string) {
    this.msg = msg;
    document.getElementById("error").classList.add("mostrar");
  }
}
