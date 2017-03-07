import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoaEditComponent } from "./pessoa/edit/pessoa-edit.component";
import { PessoaListComponent } from "./pessoa/list/pessoa-list.component";

const appRoutes: Routes = [//definição de redirects
{ path: 'pessoa-list', component: PessoaListComponent },
{ path: 'pessoa-edit', component: PessoaEditComponent },
{ path: 'pessoa-list/pessoa-edit/:id', component: PessoaEditComponent },
{ path: '',
  redirectTo: '/',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
