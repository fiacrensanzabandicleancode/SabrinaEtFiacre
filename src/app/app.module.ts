import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { InformationsComponent } from './components/informations/informations.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const appRoutes: Routes = [  { path: 'home', component: HomeComponent },

  { path: 'home', component: HomeComponent },
  { path: 'informations', component: InformationsComponent },
  { path: 'ourHistory', component: OurHistoryComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeaderComponent,
    InformationsComponent,
    OurHistoryComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
