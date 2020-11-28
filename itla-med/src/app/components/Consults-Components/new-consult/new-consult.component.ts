import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-new-consult',
  templateUrl: './new-consult.component.html',
  styleUrls: ['./new-consult.component.css'],
})
export class NewConsultComponent implements OnInit {
  public msg: string;
  public pats: object;
  private newCon: object;
  private token: string;
  private photo: any;

  constructor(private router: Router, private server: ServerService) {}

  async ngOnInit() {
    this.token = await this.server.getToken();
    this.pats = await this.server.getAllPatients(this.token);
  }

  public async create(
    paciente: string,
    fecha: string,
    motivo: string,
    seguro: string,
    monto: string,
    diagnostico: string,
    comentario: string,
    photoInput: HTMLInputElement
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
      if (photoInput.files[0] !== undefined) {
        let pic = photoInput.files[0];
        this.photo = await this.getBlobImage(pic);
      }
      this.newCon = {
        p_id: parseInt(paciente),
        date: fecha,
        motive: motivo,
        n_ins: seguro,
        paid: monto,
        diag: diagnostico,
        note: comentario,
        photo: this.photo,
      };
      let msg = await this.server.regConsult(this.newCon, this.token);
      alert(msg);
      this.router.navigateByUrl('/consults');
    }
  }

  private async getBlobImage(image: any): Promise<any> {
    const reader = new FileReader();
    return new Promise((res, rej) => {
      reader.onloadend = (e) => {
        res(e.target.result);
      };
      if (image) reader.readAsDataURL(image);
    });
  }

  private validate(msg: string) {
    this.msg = msg;
    document.getElementById('error').classList.add('mostrar');
  }
}
