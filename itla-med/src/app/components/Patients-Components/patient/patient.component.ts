import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  public patient: any;
  private token: string;

  constructor(
    private server: ServerService,
    private router: Router,
    private actRouter: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.token = await this.server.getToken();
    this.actRouter.paramMap.subscribe(async (param) => {
      if (!param.has('id')) {
        this.router.navigateByUrl('/patients');
      } else if (param.has('id')) {
        const id = +param.get('id');
        this.patient = await this.server.getOnePatient(this.token, id);
      }
    });
  }

  public async delPat(id: number) {
    var option = confirm('¿Desea eliminar este paciente?');
    if (option) {
      let msg = await this.server.deletePatient(this.token, id);
      alert(msg);
      this.router.navigateByUrl('/patients');
    }
  }
}
