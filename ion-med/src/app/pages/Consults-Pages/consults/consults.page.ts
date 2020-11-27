import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ServerService } from "../../server.service";
import { ConsultPage } from "../consult/consult.page";

@Component({
  selector: "app-consults",
  templateUrl: "./consults.page.html",
  styleUrls: ["./consults.page.scss"],
})
export class ConsultsPage implements OnInit {
  private token: string;
  public consults: any;

  constructor(private server: ServerService, private modal: ModalController) {}

  ionViewWillEnter() {
    this.ngOnInit();
  }

  async ngOnInit() {
    this.token = await this.server.getToken();
    this.consults = await this.server.getAllConsults(this.token);
  }

  public async showInfo(id: number) {
    const cons = await this.server.getOneConsult(this.token, id);
    this.modal
      .create({
        component: ConsultPage,
        componentProps: cons,
      })
      .then((mRes) => {
        mRes.present();
      });
  }

  public recharge(e: any) {
    this.ngOnInit().then(() => {
      e.target.complete();
    });
  }
}
