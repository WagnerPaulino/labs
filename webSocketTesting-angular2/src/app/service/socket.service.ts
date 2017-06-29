import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Message } from '../domain/message';

@Injectable()
export class SocketService {
  private socket: Subject<Message>;
  constructor() { }

public connect(url): Subject<Message>{
  if(!this.socket){
    this.socket = this.create(url);
  }
  return this.socket;
}
private create(url): Subject<Message>{
  console.log(url);
  let ws = new WebSocket(url);
  let observable = Observable.create(
    (obs: Observer<Message>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    }
  );
  let observer = {
    next: (data: Object) => {
      if(ws.readyState === WebSocket.OPEN){
        ws.send(JSON.stringify(data));
      }
    },
  };
  return Subject.create(observer, observable);
}

}
