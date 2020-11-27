import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController, NavParams } from "@ionic/angular";
import { ServerService } from "../../server.service";

@Component({
  selector: "app-consult",
  templateUrl: "./consult.page.html",
  styleUrls: ["./consult.page.scss"],
})
export class ConsultPage implements OnInit {
  private token: string;
  public consult: any;

  constructor(
    private server: ServerService,
    private alertCtrl: AlertController,
    private modal: ModalController,
    private param: NavParams
  ) {
    this.consult = this.param.data;
  }

  async ngOnInit() {
    this.token = await this.server.getToken();
  }

  public async delConsult() {
    const alertElment = await this.alertCtrl.create({
      header: "¿Seguro?",
      message: "¿Quieres eliminar esta consulta?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Eliminar",
          handler: async () => {
            await this.server.deleteConsult(this.token, this.consult["id"]);
            this.modal.dismiss();
          },
        },
      ],
    });
    await alertElment.present();
  }

  public close() {
    this.modal.dismiss();
  }
}
