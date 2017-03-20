import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Pessoa } from "../../../domain/pessoa";
import { PessoaService } from "../../../services/pessoaService";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'page-about',
  templateUrl: 'editar.html'
})
export class EditarPage {

  
  
  private pessoa: Pessoa = new Pessoa();

  constructor(public navCtrl: NavController, private pessoaService: PessoaService) {

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

}
