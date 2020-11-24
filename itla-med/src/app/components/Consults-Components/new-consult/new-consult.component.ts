import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-new-consult',
  templateUrl: './new-consult.component.html',
  styleUrls: ['./new-consult.component.css']
})
export class NewConsultComponent implements OnInit {
  public msg: string;
  private newCon: object;
  private token: string;

  
  constructor(
    private router: Router,
    private server: ServerService
  ) {
    this.token = 'dac44abcc8064069b469bae8dd5796e9';
  }

  async ngOnInit() {
    this.token = await this.server.getToken();
  }



  public async create(
    paciente: string,
    fecha: string,
    motivo: string,
    seguro: string,
    monto: string,
    diagnostico: string,
    comentario:string

  ) {
    if (paciente === null || paciente === '') {
      this.validate('Debe llenar el campo paciente');
    } else if (fecha === null || fecha === '') {
      this.validate('Debe llenar el campo fecha');
    } else if (motivo === null || motivo === '') {
      this.validate('Debe llenar el campo seguro');
    } else if (seguro === null || seguro === '') {
      this.validate('Debe llenar el campo monto');
    } else if (monto === null || monto === '') {
      this.validate('Debe llenar el email del paciente');
    } else if (diagnostico === null || diagnostico === '') {
      this.validate('Debe llenar el campo diagnostico');
    } else if (comentario === null || comentario === '') {
      this.validate('Debe llenar el campo comentario');
    } else {
      this.newCon = {
        paciente: paciente,
        fecha:fecha,
        motivo:motivo,
        seguro:seguro,
        monto:monto,
        diagnostico:diagnostico,
        comntario:comentario
      };
      let msg = await this.server.regConsult(this.newCon, this.token);
      alert(msg);
      this.router.navigateByUrl('/consults');
    }
  }

  private validate(msg: string) {
    this.msg = msg;
    document.getElementById('error').classList.add('mostrar');
  }

}