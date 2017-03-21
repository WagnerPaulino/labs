import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../domain/pessoa';
import { PessoaService } from '../service/pessoa.service';
import { ITdDataTableColumn } from '@covalent/core'

@Component({
  selector: 'app-pessoa',
  templateUrl:  './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  private pessoas: Pessoa[] = [];


  constructor(private pessoaService: PessoaService) {  }

  ngOnInit() {

  }
  deletePessoa(pessoa) {
    if (confirm("Você quer deletar " + pessoa.nome + "?")) {
      var index = this.pessoas.indexOf(pessoa);
      this.pessoas.splice(index, 1);

      this.pessoaService.deletePessoa(pessoa.id)
        .subscribe(null, err => {
          alert("Não foi possivel deletar");
          this.pessoas.splice(index, 0, pessoa);
        });
    }
  }

  private columns: ITdDataTableColumn[] = [
    { name: 'nome', label: 'Nome' },
    { name: 'tipo', label: 'Tipo'}
  ];

}
