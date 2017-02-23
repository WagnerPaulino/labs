import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'app/domain/pessoa';
import { PessoaService } from 'app/service/pessoa.service';
import { ITdDataTableColumn } from '@covalent/core';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';

@Component({
  selector: 'app-pessoa-list',
  templateUrl:  './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit {

  private pessoas: Pessoa[] = [];

  ngOnInit() {

  }

  constructor(private pessoaService: PessoaService) {
    this.pessoaService.getPessoas()
      .subscribe(data => this.pessoas = data);
  }

  addPessoa(pessoa){
    this.pessoaService.addPessoa(pessoa).subscribe(data => this.pessoas = data);
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

/*elements: ITdDynamicElementConfig[] = [{
    name: 'nome',
    type: TdDynamicElement.Input,
    required: false
  },
  {
    name: 'tipo',
    type: TdDynamicElement.Input,
    required: false
  }
];*/

}
