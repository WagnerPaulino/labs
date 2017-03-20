import { Component, OnInit } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import { MessageService } from "../../../service/message.service";

@Component({
  selector: 'mngt-dashboard',
  templateUrl: './mngt-dashboard.component.html',
  styleUrls: ['./mngt-dashboard.component.css']
})
export class MngtDashboardComponent implements OnInit {

 data: any[] = [];
  columns: ITdDataTableColumn[] = [
    { name: 'message', label: 'Messagem' },
    { name: 'escritor', label: 'Escritor' }
  ];
filteredData: any[] = this.data;
 

  constructor(private _dataTableService: TdDataTableService, private messageService: MessageService) {
    this.data = this.messageService.getMessages();
  }

  ngOnInit(): void {
   
  }

  
}