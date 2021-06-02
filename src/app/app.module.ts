import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexJulieFoussComponent } from './index-julie-fouss/index -julie-fouss.component';
import { CompetenceJulieFoussComponent } from './competence-julie-fouss/competence-julie-fouss.component';
import { ContactJulieFoussComponent } from './contact-julie-fouss/contact-julie-fouss.component';
import { ParcoursJulieFoussComponent } from './parcours-julie-fouss/parcours-julie-fouss.component';
import { PortfolioJulieFoussComponent } from './portfolio-julie-fouss/portfolio-julie-fouss.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavigationJulieFoussComponent } from './navigation-julie-fouss/navigation-julie-fouss.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    IndexJulieFoussComponent,
    CompetenceJulieFoussComponent,
    ContactJulieFoussComponent,
    ParcoursJulieFoussComponent,
    PortfolioJulieFoussComponent,
    FooterComponent,
    NavigationJulieFoussComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [

  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
