import { Component, OnInit } from "@angular/core";
import { ServerService } from "../../server.service";

@Component({
  selector: "app-cant-report",
  templateUrl: "./cant-report.page.html",
  styleUrls: ["./cant-report.page.scss"],
})
export class CantReportPage implements OnInit {
  public report: any;
  private token: string;

  constructor(private server: ServerService) {}

  async ngOnInit() {
    this.token = await this.server.getToken();
    this.report = await this.server.VisitsReport(this.token);
  }
}
