import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

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

    addPessoa(pessoas){
      return this.http.post(this.url, JSON.stringify(pessoas))
        .map(res => res.json());
    }

    updatePessoa(pessoa){
      return this.http.put(this.getPessoaUrl(pessoa.id), JSON.stringify(pessoa))
        .map(res => res.json());
    }

    deletePessoa(id){
      return this.http.delete(this.getPessoaUrl(id))
        .map(res => res.json());
    }

    private getPessoaUrl(id){
      return this.url + "/" + id;
    }
  }
