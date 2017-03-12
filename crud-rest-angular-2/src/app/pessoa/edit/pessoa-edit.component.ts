import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pessoa } from 'app/domain/pessoa';
import { PessoaService } from 'app/service/pessoa.service';
import { ITdDataTableColumn } from '@covalent/core';
import { NgForm, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pessoa-list',
  templateUrl:  './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit, OnDestroy {

  private pessoa: Pessoa = new Pessoa();
  
  ngOnInit() {
    this.route.params
    .map(params => params['id'])
    .switchMap(id => this.pessoaService.getPessoa(id))
    .subscribe(pessoa => this.pessoa = pessoa);
  }

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute) {
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
    this.pessoa = new Pessoa();
  }

  deletePessoa(pessoa) {
      this.pessoaService.deletePessoa(pessoa.id);
  }

  ngOnDestroy(){
    this.pessoa = new Pessoa();
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
