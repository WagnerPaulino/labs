import { Component, ViewChild } from '@angular/core';
import { Pessoa } from "../../../domain/pessoa";
import { PessoaService } from "../../../services/pessoaService";
import { NgForm } from "@angular/forms";
import { NavController } from "ionic-angular";

@Component({
  selector: 'page-edit',
  templateUrl: 'editar.html'
})
export class EditarPage {
  @ViewChild('page-edit') navCtrl: NavController

  
  
  private pessoa: Pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService) {

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
