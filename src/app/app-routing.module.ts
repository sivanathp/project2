import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './app/tournament/hello/hello.component';
import { RegistrationComponent } from './app/tournament/registration/registration.component';
import { BracketsComponent } from './app/tournament/brackets/brackets.component';

const routes: Routes = [
 
  { path: 'hello', component: HelloComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'brackets', component: BracketsComponent },
  { path: '**', redirectTo: '/hello' }  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
