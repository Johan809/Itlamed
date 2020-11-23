import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
})
export class LobbyComponent implements OnInit {
  private token: string;

  constructor(private server: ServerService, private router: Router) {}

  async ngOnInit() {
    this.token = await this.server.getToken();
  }

  public async logout() {
    let msg = await this.server.logout(this.token);
    this.token = null;
    this.server.saveToken(this.token);
    var btn = document.getElementById('btnLogout');
    btn.setAttribute('style', 'visibility: hidden');
    alert(msg);
    this.router.navigateByUrl('/');
  }
}
