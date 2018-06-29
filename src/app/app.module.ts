import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DWIComponent } from './dwi/dwi.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImmigrationComponent } from './immigration/immigration.component';
import { ContactsComponent } from './contacts/contacts.component';
import {LanguageService} from './language.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: {inSpanish: 'inSpanish'}, pathMatch: 'full'},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'DWI', component: DWIComponent, pathMatch: 'full'},
  { path: 'Immigration', component: ImmigrationComponent, pathMatch: 'full'},
  { path: 'Contact', component: ContactsComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    DWIComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ImmigrationComponent,
    ContactsComponent
  ],
  imports: [
    RouterModule.forRoot((
      appRoutes
    )),
    BrowserModule
  ],
  providers: [LanguageService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
