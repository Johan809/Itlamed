import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  public logo: string;
  public des: string;

  constructor() {
    this.logo = "../../assets/images/home-logo.png";
    this.des =
      "Esta app facilita a los doctores el manejo de la información correspondiente a sus pacientes y consultas.";
  }
}
