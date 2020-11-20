import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ServerService } from "../server.service";

@Component({
  selector: "app-lobby",
  templateUrl: "./lobby.page.html",
  styleUrls: ["./lobby.page.scss"],
})
export class LobbyPage implements OnInit {
  private token: string;

  constructor(
    private server: ServerService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    this.token = await this.server.getToken();
  }

  public async logout() {
    let msg = await this.server.logout(this.token);
    this.token = "";
    this.server.saveToken(this.token);
    const alertElment = await this.alertCtrl.create({
      header: "Gracias por preferirnos.",
      message: msg,
      buttons: [
        {
          text: "Ok",
          handler: () => this.router.navigateByUrl("/home"),
        },
      ],
    });
    await alertElment.present();
  }
}
