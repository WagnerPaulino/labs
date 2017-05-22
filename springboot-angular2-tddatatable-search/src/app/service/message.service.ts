import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { Message } from '../domain/message';

@Injectable()
export class MessageService{
     
     private url: string = "http://localhost:8080/springboot-rest/api/messages";

    constructor(private http: Http) { }

    getMessages(page: any, size?: any){
      return this.http.get(`${this.url}/?page=${page}&size=${size}`)
        .map(res => res.json());
    }
    findByMessage(message:string, page?: any, size?: any){
      //let bodyString = JSON.stringify(message);
      return this.http.get(`${this.url}/find/${message}/?page=${page}&size=${size}`).map(res => res.json());
    }
}