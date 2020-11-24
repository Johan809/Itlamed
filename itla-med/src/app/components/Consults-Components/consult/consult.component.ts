import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css'],
})
export class ConsultComponent implements OnInit {
  public consult: any;
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
        this.router.navigateByUrl('/consults');
      } else if (param.has('id')) {
        const id = +param.get('id');
        this.consult = await this.server.getOneConsult(this.token, id);
      }
    });
  }

  public async delConsult(id: number) {
    var option = confirm('¿Desea eliminar esta consulta?');
    if (option) {
      let msg = await this.server.deleteConsult(this.token, id);
      alert(msg);
      this.router.navigateByUrl('/consults');
    }
  }
}
