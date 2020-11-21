import { Component, OnInit } from "@angular/core";
import { ServerService } from "../../server.service";

@Component({
  selector: "app-date-report",
  templateUrl: "./date-report.page.html",
  styleUrls: ["./date-report.page.scss"],
})
export class DateReportPage implements OnInit {
  public report: any;
  public msg: string;
  private date: string;
  private token: string;

  constructor(private server: ServerService) {}

  async ngOnInit() {
    this.token = await this.server.getToken();
  }

  public async giveReport(date: any) {
    if (date) {
      this.date = this.formatDate(date);
      let result = await this.server.DateReport(this.token, this.date);
      this.report = result["report"];
      this.msg = result["msg"];
    } else this.msg = "Seleccione una fecha :)";
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
}
