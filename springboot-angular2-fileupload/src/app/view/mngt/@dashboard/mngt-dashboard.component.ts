import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { MessageService } from "../../../service/message.service";
import { Message } from "../../../domain/message";

@Component({
  selector: 'mngt-dashboard',
  templateUrl: './mngt-dashboard.component.html',
  styleUrls: ['./mngt-dashboard.component.css']
})
export class MngtDashboardComponent implements OnInit {

  private message: Message = new Message();

  constructor(public messageService: MessageService) { }

  ngOnInit() {

  }
  save(form: NgForm){
    this.messageService.addPessoa(this.message).subscribe(form.value);
    this.message = new Message();
  }
}