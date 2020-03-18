import { Injectable } from '@angular/core';

import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Lancamento } from '../models';

@Injectable()
export class LancamentoService {

  private readonly PATH: string = 'lancamentos';
  private readonly PATH_ULTIMO_LANC = '/funcionario/{funcionarioId}/ultimo';
  private readonly PATH_LANCAMENTOS = '/funcionario/{funcionarioId}';
  private readonly PATH_TODOS_LANC = '/funcionario/{funcionarioId}/todos';

  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService
  ) { }

  buscarUltimoTipoLancado(): Observable<any> {
    return this.http.get(
      environment.baseApiUrl + this.PATH + this.PATH_ULTIMO_LANC.replace(
        '{funcionarioId}', this.httpUtil.obterIdUsuario()),
    );
  }

  cadastrar(lancamento: Lancamento): Observable<any> {
    return this.http.post(
      environment.baseApiUrl + this.PATH,
      lancamento,
      this.httpUtil.headers()
    );
  }

  listarTodosLancamentos(): Observable<any> {
    return this.http.get(
      environment.baseApiUrl + this.PATH +
      this.PATH_TODOS_LANC.replace(
        '{funcionario}', this.httpUtil.obterIdUsuario()),
      this.httpUtil.headers()
    );
  }
}
