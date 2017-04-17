import { Component, OnInit } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import { MessageService } from "../../../service/message.service";
import { Message } from "../../../domain/message";
import { Page } from "../../../domain/page";
import { Observable } from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'mngt-dashboard',
  templateUrl: './mngt-dashboard.component.html',
  styleUrls: ['./mngt-dashboard.component.css']
})
export class MngtDashboardComponent implements OnInit {

  private pagingBar : Page<Message> = new Page<Message>();

  constructor(private _dataTableService: TdDataTableService, public messageService: MessageService) {
     this.messageService.getMessages(0).subscribe(data => this.pagingBar = data);
  }

  columns: ITdDataTableColumn[] = [
    { name: 'message', label: 'Messagem' },
    { name: 'escritor', label: 'Escritor', numeric: true }
  ];

  searchTerm: any = '';
  fromRow: number = 20;
  currentPage: number = 0;
  pageSize: number = 1;


  ngOnInit(): void {
    //this.filter();
     console.log(this.pagingBar);
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.messageService.getMessages(pagingEvent.page).subscribe(data => this.pagingBar = data);
  }

  search(searchTerm: string): void {
   
  }
  filter(): void {
    let newData = this.messageService.findByMessage(this.searchTerm).map(data => newData = data);
    newData = this._dataTableService.filterData(newData, this.searchTerm, true);
    this.pagingBar = newData;
  }
}