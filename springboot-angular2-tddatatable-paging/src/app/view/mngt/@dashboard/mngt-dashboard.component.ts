import { Component, OnInit } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import { MessageService } from "../../../service/message.service";
import { Message } from "../../../domain/message";
import { Page } from "../../../domain/page";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'mngt-dashboard',
  templateUrl: './mngt-dashboard.component.html',
  styleUrls: ['./mngt-dashboard.component.css']
})
export class MngtDashboardComponent implements OnInit {

  private pagingBar : Page<Message> = new Page<Message>();

  constructor(private _dataTableService: TdDataTableService, public messageService: MessageService) {
    
  }

  columns: ITdDataTableColumn[] = [
    { name: 'message', label: 'Messagem' },
    { name: 'escritor', label: 'Escritor', numeric: true }
  ];

  searchTerm: string = '';
  fromRow: number = 20;
  currentPage: number = 0;
  pageSize: number = 1;
  sortBy: string = 'message';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;


  ngOnInit(): void {
     this.messageService.getMessages(0).subscribe(data => this.pagingBar = data);
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name
    this.sortOrder = sortEvent.order;
    
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.messageService.getMessages(pagingEvent.page).subscribe(data => this.pagingBar = data);
  }

  filter(): void {
  }
}