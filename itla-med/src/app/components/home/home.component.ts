import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public title: string;
  public description: string;

  constructor() {
    this.title = 'Bienvenido a ITLA Med!';
    this.description =
      'Esta es una app web con presencia móvil que facilita a los doctores el manejo de la información correspondiente a sus pacientes y consultas; además de brindar distintos tipos de reportes, haciendo mas sencilla la gestion de información.';
  }
}
