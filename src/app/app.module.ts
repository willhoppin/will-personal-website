import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './components/feature/feature.component';
import { CheeseComponent } from './feature-pages/coding/cheese/cheese.component';
import { CatanComponent } from './feature-pages/coding/catan/catan.component';
import { MagicBinderComponent } from './feature-pages/coding/magic-binder/magic-binder.component';
import { ProdIndComponent } from './feature-pages/coding/prod-ind/prod-ind.component';
import { WillflixComponent } from './feature-pages/coding/willflix/willflix.component';
import { MagicBinderComComponent } from './feature-pages/coding/magic-binder-com/magic-binder-com.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FauxFeatureComponent } from './faux-feature/faux-feature.component';
import { DarpaComponent } from './feature-pages/coding/darpa/darpa.component';
import { A24Component } from './feature-pages/coding/a24/a24.component';
import { NbcuComponent } from './feature-pages/coding/nbcu/nbcu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureComponent,
    CheeseComponent,
    CatanComponent,
    MagicBinderComponent,
    ProdIndComponent,
    WillflixComponent,
    MagicBinderComComponent,
    NavComponent,
    FooterComponent,
    FauxFeatureComponent,
    DarpaComponent,
    A24Component,
    NbcuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
