import { Component, OnInit, ViewChild } from '@angular/core';
import { BuscadorService } from "app/services/buscador/buscador.service";

@Component({
  selector: 'pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor(private service: BuscadorService) { }

  ngOnInit() {
    
  }
  valorInicial: any = 'web';


  date: any = '';

getResultado(url: string){
  console.log(url);
  this.service.getResultados(url).subscribe(data => console.log(data));
  
}

  fadeDiv: boolean = false;
  @ViewChild('searchBox') searchBox: string = ''

  newValor(event){
    console.log(event.novoValor);
    this.valorInicial = event.novoValor;
  }
  

}
