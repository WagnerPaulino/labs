import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'app/domain/pessoa';
import { PessoaService } from 'app/service/pessoa.service';
import { ITdDataTableColumn } from '@covalent/core';
import { NgForm, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';

@Component({
  selector: 'app-pessoa-list',
  templateUrl:  './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit {

  private pessoa: Pessoa = new Pessoa();

  ngOnInit() {

  }

  constructor(private pessoaService: PessoaService) {
    //this.pessoaService.getPessoas();
     // .subscribe(data => this.pessoa = data);
  }

  save(form: NgForm){
    
    if(form.value.id == null){
    this.pessoaService.addPessoa(this.pessoa).subscribe(form.value);
    console.log("executando insert");
  }else{
  this.pessoaService.updatePessoa(this.pessoa).subscribe(form.value);
    console.log("executando update");
  }
  console.log(form.value);
    console.log(this.pessoa);
  }

  deletePessoa(pessoa) {
      this.pessoaService.deletePessoa(pessoa.id);
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
