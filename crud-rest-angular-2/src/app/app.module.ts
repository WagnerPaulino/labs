import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'
import { CovalentCoreModule, CovalentLayoutModule, CovalentDataTableModule } from '@covalent/core'
import { RouterModule, Routes } from '@angular/router';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaService } from './service/pessoa.service';
import { PessoaEditComponent } from "./pessoa/edit/pessoa-edit.component";
import { PessoaListComponent } from "./pessoa/list/pessoa-list.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaEditComponent,
    PessoaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    CovalentCoreModule.forRoot(),
    CovalentLayoutModule.forRoot(),
    CovalentDataTableModule.forRoot(),
    AppRoutingModule,
    CovalentDynamicFormsModule.forRoot()
  ],
  providers: [PessoaService, AppRoutingModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
