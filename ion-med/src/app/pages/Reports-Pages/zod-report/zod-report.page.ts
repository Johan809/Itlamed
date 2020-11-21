import { Component, OnInit } from "@angular/core";
import { ServerService } from "../../server.service";

@Component({
  selector: "app-zod-report",
  templateUrl: "./zod-report.page.html",
  styleUrls: ["./zod-report.page.scss"],
})
export class ZodReportPage implements OnInit {
  public report: any;
  private token: string;

  constructor(private server: ServerService) {}

  async ngOnInit() {
    this.token = await this.server.getToken();
    this.report = await this.server.ZodiacReport(this.token);
  }
}
