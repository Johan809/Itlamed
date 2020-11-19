import { Component } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-date-report',
  templateUrl: './date-report.component.html',
  styleUrls: ['./date-report.component.scss'],
})
export class DateReportComponent {
  public report: any;
  public msg: string;
  public date: string;
  private token: string;

  constructor(private server: ServerService) {
    this.token = 'dac44abcc8064069b469bae8dd5796e9';
    this.date = '';
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
