import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private apiUrl: string;

  constructor(private xhttp: HttpClient) {
    this.apiUrl = 'https://api-itlamed.herokuapp.com/';
  }

  public saveToken(token: string) {
    var datos = JSON.stringify(token);
    localStorage.setItem('ses_token', datos);
  }

  public async getToken(): Promise<string> {
    return new Promise((res, rej) => {
      var data = localStorage.getItem('ses_token');
      let token = JSON.parse(data);
      res(token);
    });
  }

  public async register(med: object): Promise<string> {
    let url = this.apiUrl + 'regMed';
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp
        .post(url, med, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .subscribe(
          (data) => {
            if (data['ok']) res(data['msg']);
            else res(data['msg']);
          },
          (err) => console.error(err)
        );
    });
  }

  public async login(ses: object): Promise<object> {
    let url = this.apiUrl + 'login';
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp
        .post(url, ses, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .subscribe(
          (data) => {
            let resObj = {};
            if (data['ok']) {
              resObj = {
                msg: data['msg'],
                token: data['arg'],
              };
              res(resObj);
            } else res(data['msg']);
          },
          (err) => console.error(err)
        );
    });
  }

  public async logout(token: string): Promise<string> {
    let url = this.apiUrl + `logout/${token}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp.delete(url).subscribe(
        (data) => {
          if (data['ok']) res(data['msg']);
          else res(data['msg']);
        },
        (err) => console.error(err)
      );
    });
  }

  public async regPatient(pat: object, token: string): Promise<string> {
    let url = this.apiUrl + `regPatient/${token}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp
        .post(url, pat, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .subscribe(
          (data) => {
            if (data['ok']) res(data['msg']);
            else res(data['msg']);
          },
          (err) => console.error(err)
        );
    });
  }

  public async getAllPatients(token: string): Promise<object> {
    let url = this.apiUrl + `getPatients/${token}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp.get(url).subscribe(
        (data) => {
          if (data['ok']) res(data['arg']);
          else res(data['msg']);
        },
        (err) => console.error(err)
      );
    });
  }

  public async getOnePatient(token: string, id: number): Promise<object> {
    let url = this.apiUrl + `getPatients/${token}/${id}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp.get(url).subscribe(
        (data) => {
          if (data['ok']) res(data['arg']);
          else res(data['msg']);
        },
        (err) => console.error(err)
      );
    });
  }

  public async updatePatient(
    pat: object,
    token: string,
    id: number
  ): Promise<string> {
    let url = this.apiUrl + `upPatient/${token}/${id}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp
        .put(url, pat, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .subscribe(
          (data) => {
            if (data['ok']) res(data['msg']);
            else res(data['msg']);
          },
          (err) => console.error(err)
        );
    });
  }

  public async deletePatient(token: string, id: number): Promise<string> {
    let url = this.apiUrl + `delPatients/${token}/${id}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp.delete(url).subscribe(
        (data) => {
          if (data['ok']) res(data['msg']);
          else res(data['msg']);
        },
        (err) => console.error(err)
      );
    });
  }

  public async regConsult(cons: object, token: string): Promise<string> {
    let url = this.apiUrl + `regConsult/${token}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp
        .post(url, cons, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .subscribe(
          (data) => {
            if (data['ok']) res(data['msg']);
            else res(data['msg']);
          },
          (err) => console.error(err)
        );
    });
  }

  public async getAllConsults(token: string): Promise<object> {
    let url = this.apiUrl + `getConsult/${token}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp.get(url).subscribe(
        (data) => {
          if (data['ok']) res(data['arg']);
          else res(data['msg']);
        },
        (err) => console.error(err)
      );
    });
  }

  public async getOneConsult(token: string, id: number): Promise<object> {
    let url = this.apiUrl + `getConsult/${token}/${id}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp.get(url).subscribe(
        (data) => {
          if (data['ok']) res(data['arg']);
          else res(data['msg']);
        },
        (err) => console.error(err)
      );
    });
  }

  public async updateConsult(
    cons: object,
    token: string,
    id: number
  ): Promise<string> {
    let url = this.apiUrl + `upConsult/${token}/${id}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp
        .put(url, cons, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .subscribe(
          (data) => {
            if (data['ok']) res(data['msg']);
            else res(data['msg']);
          },
          (err) => console.error(err)
        );
    });
  }

  public async deleteConsult(token: string, id: number): Promise<string> {
    let url = this.apiUrl + `delConsult/${token}/${id}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp.delete(url).subscribe(
        (data) => {
          if (data['ok']) res(data['msg']);
          else res(data['msg']);
        },
        (err) => console.error(err)
      );
    });
  }

  public async DateReport(token: string, date: string): Promise<object> {
    let url = this.apiUrl + `reports/date/${token}/${date}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp.get(url).subscribe(
        (data) => {
          if (data['ok']) {
            let resObj = {
              msg: data['msg'],
              report: data['arg'],
            };
            res(resObj);
          } else res(data['msg']);
        },
        (err) => console.error(err)
      );
    });
  }

  public async ZodiacReport(token: string): Promise<object> {
    let url = this.apiUrl + `reports/zodiac/${token}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp.get(url).subscribe(
        (data) => {
          if (data['ok']) res(data['arg']);
          else res(data['msg']);
        },
        (err) => console.error(err)
      );
    });
  }

  public async VisitsReport(token: string): Promise<object> {
    let url = this.apiUrl + `reports/cant/${token}`;
    let xhttp = this.xhttp;
    return new Promise((res, rej) => {
      xhttp.get(url).subscribe(
        (data) => {
          if (data['ok']) res(data['arg']);
          else res(data['msg']);
        },
        (err) => console.error(err)
      );
    });
  }
}
