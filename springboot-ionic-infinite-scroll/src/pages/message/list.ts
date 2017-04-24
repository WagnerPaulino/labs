import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
//import { InfiniteScroll } from 'angular2-infinite-scroll';
import {Message} from '../../domain/message';
import {MessageService} from '../../services/message.service';
 
@Component({
    selector: 'list',
    templateUrl: 'list.html'
})
export class List {

    public messages: Message[] = [];

    constructor(public messageService: MessageService, public nav : NavController) {
    messageService.getMessages(0).subscribe(data => this.messages = data);
  }


    onScrollDown () {
        console.log('scrolled down!!')
    }
 
    onScrollUp () {
    	console.log('scrolled up!!')
    }
}