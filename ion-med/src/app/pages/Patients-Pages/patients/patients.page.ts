import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ServerService } from "../../server.service";
import { PatientPage } from "../patient/patient.page";

@Component({
  selector: "app-patients",
  templateUrl: "./patients.page.html",
  styleUrls: ["./patients.page.scss"],
})
export class PatientsPage implements OnInit {
  private token: string;
  public patients: any;

  constructor(private server: ServerService, private modal: ModalController) {}

  async ngOnInit() {
    this.token = await this.server.getToken();
    this.patients = await this.server.getAllPatients(this.token);
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  public recharge(e: any) {
    this.ngOnInit().then(() => {
      e.target.complete();
    });
  }

  public async showInfo(id: number) {
    const pat = await this.server.getOnePatient(this.token, id);
    this.modal
      .create({
        component: PatientPage,
        componentProps: pat,
      })
      .then((res) => {
        res.present();
      });
  }
}
