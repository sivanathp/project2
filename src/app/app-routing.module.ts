import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './app/tournament/hello/hello.component';
import { RegistrationComponent } from './app/tournament/registration/registration.component';
import { BracketsComponent } from './app/tournament/brackets/brackets.component';

const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: 'app/tournament/hello', component: HelloComponent },
  { path: 'app/tournament/registration', component: RegistrationComponent },
  { path: 'app/tournament/brackets', component: BracketsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
