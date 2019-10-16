import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router'

// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { InformationsComponent } from './components/informations/informations.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
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
    ConfirmationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),

    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
