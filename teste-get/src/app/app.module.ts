import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component'
import { PessoaService } from './service/pessoa.service'
import { MaterialModule } from '@angular/material'
import { CovalentCoreModule, CovalentLayoutModule, CovalentDataTableModule } from '@covalent/core'

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    CovalentCoreModule.forRoot(),
    CovalentLayoutModule.forRoot(),
    CovalentDataTableModule.forRoot()
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
