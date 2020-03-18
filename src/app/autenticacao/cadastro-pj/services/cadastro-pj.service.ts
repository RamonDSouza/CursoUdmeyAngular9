import { Injectable } from '@angular/core';

import { CadastroPj } from '../models/cadastro-pj.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CadastroPjService {

  private readonly PATH: string = 'cadastrar-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any>{
    return this.http.post(environment.baseApiUrl + this.PATH, cadastroPj);
  }
}
