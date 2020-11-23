import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-zod-report',
  templateUrl: './zod-report.component.html',
  styleUrls: ['./zod-report.component.scss'],
})
export class ZodReportComponent implements OnInit {
  public report: any;
  public msg: string;
  private token: string;

  constructor(private server: ServerService) {}

  async ngOnInit(): Promise<void> {
    this.token = await this.server.getToken();
    this.report = await this.server.ZodiacReport(this.token);
    this.msg = 'Zodical';
  }
}
