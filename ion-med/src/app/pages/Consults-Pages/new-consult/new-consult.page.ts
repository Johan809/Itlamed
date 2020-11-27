import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ServerService } from "../../server.service";

@Component({
  selector: "app-new-consult",
  templateUrl: "./new-consult.page.html",
  styleUrls: ["./new-consult.page.scss"],
})
export class NewConsultPage implements OnInit {
  public msg: string;
  private token: string;
  public patients: object;
  private blobImage: string;
  private newConsult: object;

  constructor(
    private server: ServerService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    this.token = await this.server.getToken();
    this.patients = await this.server.getAllPatients(this.token);
  }

  public async create(
    pat: any,
    _date: any,
    motive: any,
    n_ins: any,
    paid: any,
    diag: any,
    note: any
  ): Promise<void> {
    if (pat === null || pat === "") {
      this.validate("Debe llenar el campo paciente");
    } else if (_date === null || _date === "") {
      this.validate("Debe llenar el campo fecha");
    } else if (motive === null || motive === "") {
      this.validate("Debe llenar el campo Motivo");
    } else if (n_ins === null || n_ins === "") {
      this.validate("Debe llenar el campo seguro");
    } else if (paid === null || paid === "") {
      this.validate("Debe especificar un momento");
    } else if (diag === null || diag === "") {
      this.validate("Debe llenar el campo diagnostico");
    } else if (note === null || note === "") {
      this.validate("Debe especificar las notas de la consulta");
    } else {
      this.newConsult = {
        p_id: pat,
        date: this.formatDate(_date),
        motive: motive,
        n_ins: n_ins,
        paid: parseInt(paid),
        diag: diag,
        note: note,
        photo: this.blobImage,
      };
      let msg = await this.server.regConsult(this.newConsult, this.token);
      const alertElment = await this.alertCtrl.create({
        header: "Resultado del Procese",
        message: msg,
        buttons: [
          {
            text: "Ok",
            handler: () => this.router.navigateByUrl("/consults"),
          },
        ],
      });
      if (msg) await alertElment.present();
    }
  }

  private formatDate(date: any) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  public async loadImageFromDevice(event: any) {
    const file = event.target.files[0];
    this.blobImage = await this.getBlobImage(file);
  }

  private async getBlobImage(image: any): Promise<any> {
    const reader = new FileReader();
    return new Promise((res, rej) => {
      reader.onloadend = (e) => {
        res(e.target.result);
      };
      if (image) reader.readAsDataURL(image);
    });
  }

  private validate(msg: string) {
    this.msg = msg;
    document.getElementById("error").classList.add("mostrar");
  }
}
