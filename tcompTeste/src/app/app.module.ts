import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CovalentNotificationsModule } from '@covalent/core';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import {MaterialModule} from '@angular/material';
import { CovalentSearchModule } from '@covalent/core';
import { CovalentExpansionPanelModule } from '@covalent/core';

import { AppComponent } from "app/app.component";
import { BarraPrincipalComponent } from "app/buscador/pagina-inicial/barra-principal/barra-principal.component";
import { PaginaInicialComponent } from "app/buscador/pagina-inicial/pagina-inicial.component";



@NgModule({
  declarations: [
    AppComponent,
    BarraPrincipalComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    BrowserAnimationsModule,
    CovalentNotificationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    CovalentSearchModule,
    CovalentExpansionPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
