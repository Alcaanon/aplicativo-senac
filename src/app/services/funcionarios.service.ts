import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  url = 'localhost';

  constructor(private http: HttpClient) { }

  obterFuncionarios(pagina: number): Observable<any> {
    return this.http.get(`${this.url}/api/funcionarios?page=${pagina}`)
  }

  obterFuncionario(id: number): Observable<any> {
    return this.http.get(`${this.url}/api/funcionarios/${id}`)
  }

  cadastrarFuncionario(nome: string, profissão: string) {
    let body = { name: nome, job: profissão }
    return this.http.post(`${this.url}/api/funcionarios`, body)
  }

  atualizarFuncionario(id: number, nome: string, profissao: string) {
    let body = { name: nome, job: profissao }
    return this.http.patch(`${this.url}/api/funcionarios/${id}`, body)
  }

}