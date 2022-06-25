import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbListModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ListComponent } from './components/events/list/list.component';
import { DetailComponent } from './components/events/detail/detail.component';
import { InscriptionComponent } from './components/events/inscription/inscription.component';
import { ConfirmationComponent } from './components/events/confirmation/confirmation.component';

import { ButtonModule } from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    InscriptionComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    ButtonModule,
    FieldsetModule,
    HttpClientModule,
    NbCardModule,
    NbListModule,
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
