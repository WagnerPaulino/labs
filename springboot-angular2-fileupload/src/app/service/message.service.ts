import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { Message } from '../domain/message';



@Injectable()
export class MessageService {
  private url: string = "http://localhost:8092/crud-rest-spring-boot/api/pessoas";

    constructor(private http: Http) { }

    addPessoa(message: Message): Observable<Message>{
      let bodyString = JSON.stringify(message);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      console.log('executando service');
      console.log(message);

      return this.http.post(this.url, bodyString , options)
      .map(res => res.json())
      .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
    }
}