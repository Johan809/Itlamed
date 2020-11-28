<<<<<<< HEAD

import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 19d7f96fc87fa006e5e4d2ae87b014c3cda16488
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
<<<<<<< HEAD
  private stream: MediaStream;
  private videoWidth: number = 0;
  private videoHeight: number = 0;
  private constraints: object = {
    video: {
      facingMode: 'environment',
      width: { ideal: 350 },
      height: { ideal: 350 },
    },
  };

  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  constructor(
    private router: Router,
    private server: ServerService,
    private render: Renderer2
  ) {}
=======

  constructor(private router: Router, private server: ServerService) {}
>>>>>>> 19d7f96fc87fa006e5e4d2ae87b014c3cda16488

  async ngOnInit() {
    this.token = await this.server.getToken();
    this.pats = await this.server.getAllPatients(this.token);
  }

<<<<<<< HEAD

  public startCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices
        .getUserMedia(this.constraints)
        .then((stream) => {
          this.stream = stream;
          this.attachVideo(this.stream);
        })
        .catch((err) => console.error(err));
    } else {
      alert('Lo sentimos, camara no disponible');
    }
  }

  public stopCamera() {
    this.stream.getTracks().forEach((track) => track.stop());
  }

  public capture() {
    this.render.setProperty(
      this.canvas.nativeElement,
      'width',
      this.videoWidth
    );
    this.render.setProperty(
      this.canvas.nativeElement,
      'height',
      this.videoHeight
    );
    this.canvas.nativeElement
      .getContext('2d')
      .drawImage(this.videoElement.nativeElement, 0, 0);
    let canvas = document.getElementsByTagName('canvas')[0];
    this.photo = canvas.toDataURL();
  }

  private attachVideo(stream) {
    this.render.setProperty(
      this.videoElement.nativeElement,
      'srcObject',
      stream
    );
    this.render.listen(this.videoElement.nativeElement, 'play', (e) => {
      this.videoHeight = this.videoElement.nativeElement.videoHeight;
      this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
  }


=======
>>>>>>> 19d7f96fc87fa006e5e4d2ae87b014c3cda16488
  public async create(
    paciente: string,
    fecha: string,
    motivo: string,
    seguro: string,
    monto: string,
    diagnostico: string,
<<<<<<< HEAD
    comentario:string,
    photoInput: HTMLInputElement,

=======
    comentario: string,
    photoInput: HTMLInputElement
>>>>>>> 19d7f96fc87fa006e5e4d2ae87b014c3cda16488
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
<<<<<<< HEAD
        paciente: paciente,
        fecha:fecha,
        motivo:motivo,
        seguro:seguro,
        monto:monto,
        diagnostico:diagnostico,
        comntario:comentario,
        photo:this.photo
=======
        p_id: paciente,
        date: fecha,
        motive: motivo,
        n_ins: seguro,
        paid: monto,
        diag: diagnostico,
        note: comentario,
        photo: this.photo,
>>>>>>> 19d7f96fc87fa006e5e4d2ae87b014c3cda16488
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
