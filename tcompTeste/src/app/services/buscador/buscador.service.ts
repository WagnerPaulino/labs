import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class BuscadorService {
  private url: string = 'http://localhost/crawler.php?url='
  constructor(private http: Http) { }

getResultados(palavra: string){
  return this.http.get(this.url+palavra).map(res => res.json());
}


}