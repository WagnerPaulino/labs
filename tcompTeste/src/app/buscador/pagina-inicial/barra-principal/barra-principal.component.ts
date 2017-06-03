import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'barra-principal',
  templateUrl: './barra-principal.component.html',
  styleUrls: ['./barra-principal.component.css']
})
export class BarraPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() novoValor = new EventEmitter();
  valor: any = '';
  mudou(novo){
    this.valor=novo;
    this.novoValor.emit({novoValor: this.valor});
  }

}
