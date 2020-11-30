import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-edit-consult',
  templateUrl: './edit-consult.component.html',
  styleUrls: ['./edit-consult.component.css'],
})
export class EditConsultComponent implements OnInit {
  private id: number;
  private token: string;
  private photo: any;
  public msg: string;
  public pats: object;
  public consult: object;

  constructor(
    private server: ServerService,
    private router: Router,
    private actRouter: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.token = await this.server.getToken();
    this.pats = await this.server.getAllPatients(this.token);
    this.actRouter.paramMap.subscribe(async (param) => {
      if (!param.has('id')) this.router.navigateByUrl('/consults');
      else {
        this.id = +param.get('id');
        this.consult = await this.server.getOneConsult(this.token, this.id);
      }
    });
  }

  public async editCons(
    fecha: string,
    motivo: string,
    seguro: string,
    monto: string,
    diagnostico: string,
    comentario: string,
    actPhoto: any,
    photoInput: HTMLInputElement
  ) {
    if (fecha === null || fecha === '') {
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
      } else if (!this.photo) this.photo = actPhoto;

      let editCons = {
        p_id: 0, //el paciente no cambia
        date: fecha,
        motive: motivo,
        n_ins: seguro,
        paid: monto,
        diag: diagnostico,
        note: comentario,
        photo: this.photo,
      };
      let msg = await this.server.updateConsult(editCons, this.token, this.id);
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
