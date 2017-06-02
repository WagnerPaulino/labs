import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  fadeDiv: boolean = false;
  @ViewChild('searchBox') searchBox: string = ''

  fade(): void {
    this.fadeDiv = !this.fadeDiv;
  }

}
