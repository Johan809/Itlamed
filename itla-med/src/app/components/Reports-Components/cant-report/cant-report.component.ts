import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-cant-report',
  templateUrl: './cant-report.component.html',
  styleUrls: ['./cant-report.component.scss'],
})
export class CantReportComponent implements OnInit {
  public report: any;
  public msg: string;
  private token: string;

  constructor(private server: ServerService) {}

  async ngOnInit(): Promise<void> {
    this.token = await this.server.getToken();
    this.report = await this.server.VisitsReport(this.token);
    this.msg = 'Numero de Consultas';
  }
}
