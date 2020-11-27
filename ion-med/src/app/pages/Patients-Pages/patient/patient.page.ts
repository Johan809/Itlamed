import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController, NavParams } from "@ionic/angular";
import { ServerService } from "../../server.service";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.page.html",
  styleUrls: ["./patient.page.scss"],
})
export class PatientPage implements OnInit {
  private token: string;
  public pat: any;

  constructor(
    private server: ServerService,
    private alertCtrl: AlertController,
    private modal: ModalController,
    private param: NavParams
  ) {
    this.pat = this.param.data;
  }

  async ngOnInit() {
    this.token = await this.server.getToken();
  }

  public async delPat() {
    const alertElment = await this.alertCtrl.create({
      header: "¿Seguro?",
      message: "¿Quieres eliminar este paciente?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
        },
        {
          text: "Eliminar",
          handler: async () => {
            await this.server.deletePatient(this.token, this.pat["id"]);
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
