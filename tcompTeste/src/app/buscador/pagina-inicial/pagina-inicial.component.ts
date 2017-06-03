import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  valorInicial: any = 'web'

  fadeDiv: boolean = false;
  @ViewChild('searchBox') searchBox: string = ''

  newValor(event){
    console.log(event.novoValor);
    this.valorInicial = event.novoValor;
  }
  

}
