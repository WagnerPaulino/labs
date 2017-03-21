import { Component, OnInit } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import { MessageService } from "../../../service/message.service";
import { Message } from "../../../domain/message";

@Component({
  selector: 'mngt-dashboard',
  templateUrl: './mngt-dashboard.component.html',
  styleUrls: ['./mngt-dashboard.component.css']
})
export class MngtDashboardComponent implements OnInit {

private messages: Message[] = [];

 


  columns: ITdDataTableColumn[] = [
    { name: 'message', label: 'Messagem' },
    { name: 'escritor', label: 'Escritor' }
  ];

 
filteredTotal: number = this.messages.length;

  
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 20;
  sortBy: string = 'escritor';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _dataTableService: TdDataTableService, messageService: MessageService) {
    messageService.getMessages().subscribe(data => this.messages.push(data));
    console.log(this.messages);
  }

  ngOnInit(): void {
    
  }


 

}