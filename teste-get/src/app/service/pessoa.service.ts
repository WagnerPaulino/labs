import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { Pessoa } from 'app/domain/pessoa';

@Injectable()
export class PessoaService {
  private url: string = "http://localhost:8092/projectf/api/pessoas";

    constructor(private http: Http) { }

    getPessoas(){
      return this.http.get(this.url)
        .map(res => res.json());
    }

    getPessoa(id){
      return this.http.get(this.getPessoaUrl(id))
        .map(res => res.json());
    }

    addPessoa(pessoa: Pessoa): Observable<Pessoa>{
      let bodyString = JSON.stringify(pessoa);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      console.log('executando service');
      console.log(pessoa);

      return this.http.post(this.url, pessoa , options)
      .map(res => res.json())
      .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
    }

    updatePessoa(pessoa: Pessoa){
      let bodyString = JSON.stringify(pessoa);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.put(this.getPessoaUrl(pessoa.id), pessoa, options)
        .map(res => res.json())
        .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
    }

    deletePessoa(id){
      let bodyString = JSON.stringify(id);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.delete(this.getPessoaUrl(id), options)
        .map(res => res.json())
        .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
    }

    private getPessoaUrl(id){
      return this.url + "/" + id;
    }

    private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    }
    private handleError (error: Response | any) {
    
      let errMsg: string;
      if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
      errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Promise.reject(errMsg);
    }
  }
