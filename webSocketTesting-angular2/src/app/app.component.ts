import { Component, ViewContainerRef } from '@angular/core';
import { MdIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { TdDialogService, TdLoadingService, LoadingType } from '@covalent/core';

import { SocketService } from './service/socket.service';
import { $WebSocket } from './service/$WebSocket.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SocketService]
})
export class AppComponent {
    title = 'app works!';
    public data: any = '';
    constructor(public service: SocketService) {
       
    }
    public receber(){
        this.service.connect("ws://10.13.29.31:8080/counter").subscribe(data => this.data = data);
    }
}
