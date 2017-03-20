import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { Pessoa } from "../domain/pessoa";


@Injectable()
export class PessoaService {
  private url: string = "http://localhost:8092/crud-rest-spring-boot/api/pessoas";

    constructor(private http: Http) { }

    getPessoas(){
      return this.http.get(this.url)
        .map(res => res.json());
    }

    getPessoa(id): Observable<Pessoa>{
      let bodyString = JSON.stringify(id);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.get(this.getPessoaUrl(bodyString), options)
        .map(res => res.json())
        .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
    }

    addPessoa(pessoa: Pessoa): Observable<Pessoa>{
      let bodyString = JSON.stringify(pessoa);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      console.log('executando service');
      console.log(pessoa);

      return this.http.post(this.url, bodyString , options)
      .map(res => res.json())
      .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
    }

    updatePessoa(pessoa: Pessoa): Observable<Pessoa>{
      let bodyString = JSON.stringify(pessoa);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.put(this.getPessoaUrl(pessoa.id), bodyString, options)
        .map(res => res.json())
        .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
    }

    deletePessoa(id): Observable<Pessoa>{
      let bodyString = JSON.stringify(id);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.delete(this.getPessoaUrl(bodyString), options)
        .map(res => res.json())
        .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
    }

    private getPessoaUrl(id){
      return this.url + "/" + id;
    }
  }
