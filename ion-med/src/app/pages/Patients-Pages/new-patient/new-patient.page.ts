import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ServerService } from "../../server.service";

@Component({
  selector: "app-new-patient",
  templateUrl: "./new-patient.page.html",
  styleUrls: ["./new-patient.page.scss"],
})
export class NewPatientPage implements OnInit {
  public msg: string;
  private token: string;
  private blobImage: any;

  constructor(
    private server: ServerService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    this.token = await this.server.getToken();
  }

  public async newPat(
    cedula: any,
    name: any,
    lastn: any,
    blood: any,
    email: any,
    gender: any,
    date: any,
    allergies: any
  ) {
    if (cedula === null || cedula === "") {
      this.validate("Debe llenar la cedula del paciente");
    } else if (name === null || name === "") {
      this.validate("Debe llenar el nombre del paciente");
    } else if (lastn === null || lastn === "") {
      this.validate("Debe llenar el apellido del paciente");
    } else if (blood === null || blood === "") {
      this.validate("Debe especificar el tipo de sangre del paciente");
    } else if (email === null || email === "") {
      this.validate("Debe llenar el email del paciente");
    } else if (gender === null || gender === "") {
      this.validate("Debe especificar el genero del paciente");
    } else if (date === null || date === "") {
      this.validate("Debe llenar la fecha de nacimiento del paciente");
    } else if (allergies === null || allergies === "") {
      this.validate(
        "Debe llenar las alergias del paciente, si no tiene ninguna, escriba Ninguna o None"
      );
    } else {
      let newPat = {
        id_card: cedula,
        photo: this.blobImage,
        name: name,
        lastname: lastn,
        blood_type: blood,
        email: email,
        gender: gender,
        b_date: this.formatDate(date),
        allergies: allergies,
      };

      let msg = await this.server.regPatient(newPat, this.token);
      const alertElment = await this.alertCtrl.create({
        header: "Resultado del Proceso",
        message: msg,
        buttons: [
          {
            text: "Ok",
            handler: () => this.router.navigateByUrl("/patients"),
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
