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
import { SharedModule } from "app/shared/shared.module";
import { BuscadorService } from "app/services/buscador/buscador.service";



@NgModule({
  declarations: [
    AppComponent,
    BarraPrincipalComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule
  ],
  providers: [BuscadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
