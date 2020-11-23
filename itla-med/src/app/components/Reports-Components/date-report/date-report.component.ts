import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-date-report',
  templateUrl: './date-report.component.html',
  styleUrls: ['./date-report.component.scss'],
})
export class DateReportComponent implements OnInit {
  public report: any;
  public msg: string;
  public date: string;
  private token: string;

  constructor(private server: ServerService) {
    this.date = '';
  }

  async ngOnInit() {
    this.token = await this.server.getToken();
  }

  public async giveReport(date: string) {
    if (date) {
      this.date = date;
      let result = await this.server.DateReport(this.token, this.date);
      this.report = result['report'];
      this.msg = result['msg'];
    } else this.msg = 'Seleccione una fecha :)';
  }
}
