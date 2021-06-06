import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RosterServiceService } from './app/services/ rosterService.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './app/tournament/hello/hello.component';
import { RegistrationComponent } from './app/tournament/registration/registration.component';
import { BracketsComponent } from './app/tournament/brackets/brackets.component';

@NgModule({
  declarations: [
    AppComponent,
HelloComponent,
RegistrationComponent,
BracketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RosterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
