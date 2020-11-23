import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  public patients: object;
  private token: string;

  constructor(private server: ServerService) {}

  async ngOnInit(): Promise<void> {
    this.token = await this.server.getToken();
    this.patients = await this.server.getAllPatients(this.token);
  }

  public async delPat(id: number) {
    var option = confirm('¿Desea eliminar este paciente?');
    if (option) {
      let msg = await this.server.deletePatient(this.token, id);
      alert(msg);
      this.ngOnInit();
    }
  }
}
