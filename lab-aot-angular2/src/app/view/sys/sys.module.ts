import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core';
import { SharedModule } from '../../shared/shared.module';

import { sysRoutes } from './sys-routing.module';
import { NavListLayoutComponent } from '../../component/layout/nav-list-layout/nav-list-layout.component'
import { NavViewLayoutComponent } from '../../component/layout/nav-view-layout/nav-view-layout.component'

@NgModule({
  declarations: [
    NavListLayoutComponent,
    NavViewLayoutComponent
  ],
  imports: [
     SharedModule,
    sysRoutes
  ]
})
export class SysModule {}