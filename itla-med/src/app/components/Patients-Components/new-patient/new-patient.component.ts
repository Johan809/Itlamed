import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css'],
})
export class NewPatientComponent implements OnInit {
  public msg: string;
  private newPat: object;
  private token: string;
  private photo: any;
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
    private render: Renderer2,
    private server: ServerService
  ) {}

  async ngOnInit() {
    this.token = await this.server.getToken();
  }

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

  public async create(
    cedula: string,
    photoInput: HTMLInputElement,
    name: string,
    lastn: string,
    blood: string,
    email: string,
    gender: string,
    date: string,
    allergies: string
  ) {
    if (cedula === null || cedula === '') {
      this.validate('Debe llenar la cedula del paciente');
    } else if (name === null || name === '') {
      this.validate('Debe llenar el nombre del paciente');
    } else if (lastn === null || lastn === '') {
      this.validate('Debe llenar el apellido del paciente');
    } else if (blood === null || blood === '') {
      this.validate('Debe especificar el tipo de sangre del paciente');
    } else if (email === null || email === '') {
      this.validate('Debe llenar el email del paciente');
    } else if (gender === null || gender === '') {
      this.validate('Debe especificar el genero del paciente');
    } else if (date === null || date === '') {
      this.validate('Debe llenar la fecha de nacimiento del paciente');
    } else if (allergies === null || allergies === '') {
      this.validate(
        'Debe llenar las alergias del paciente, si no tiene ninguna, escriba Ninguna o None'
      );
    } else {
      if (photoInput.files[0] !== undefined) {
        let pic = photoInput.files[0];
        this.photo = await this.getBlobImage(pic);
      }
      this.newPat = {
        id_card: cedula,
        photo: this.photo,
        name: name,
        lastname: lastn,
        blood_type: blood,
        email: email,
        gender: gender,
        b_date: date,
        allergies: allergies,
      };
      let msg = await this.server.regPatient(this.newPat, this.token);
      alert(msg);
      this.router.navigateByUrl('/patients');
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
