import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public title: string;
  public description: string;
  private token: string;

  constructor(private server: ServerService, private router: Router) {
    this.title = 'Bienvenido a ITLA Med!';
    this.description =
      'Esta es una app web con presencia móvil que facilita a los doctores el manejo de la información correspondiente a sus pacientes y consultas; además de brindar distintos tipos de reportes, haciendo mas sencilla la gestion de información.';
  }

  async ngOnInit() {
    this.token = await this.server.getToken();
    if (this.token !== '' || this.token !== null || this.token !== undefined) {
      await this.server.logout(this.token);
      this.token = null;
      this.server.saveToken(this.token);
    }
  }
}
