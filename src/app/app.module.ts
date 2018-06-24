import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DWIComponent} from './dwi/dwi.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'dwi', component: DWIComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DWIComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot((
      appRoutes
    )),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
