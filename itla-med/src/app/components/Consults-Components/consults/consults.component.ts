import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.css'],
})
export class ConsultsComponent implements OnInit {
  private token: string;
  public consults: object;

  constructor(private server: ServerService) {}

  async ngOnInit(): Promise<void> {
    this.token = await this.server.getToken();
    this.consults = await this.server.getAllConsults(this.token);
  }

  public async delConsult(id: number) {
    var option = confirm('¿Desea eliminar esta consulta?');
    if (option) {
      let msg = await this.server.deleteConsult(this.token, id);
      alert(msg);
      this.ngOnInit();
    }
  }
}
