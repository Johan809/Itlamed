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

  constructor(private server: ServerService) {
    this.token = 'dac44abcc8064069b469bae8dd5796e9';
  }

  async ngOnInit(): Promise<void> {
    this.report = await this.server.VisitsReport(this.token);
    this.msg = 'Numero de Consultas';
  }
}
