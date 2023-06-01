import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatanComponent } from './feature-pages/coding/catan/catan.component';
import { DarpaComponent } from './feature-pages/coding/darpa/darpa.component';
import { NbcuComponent } from './feature-pages/coding/nbcu/nbcu.component';
import { A24Component } from './feature-pages/coding/a24/a24.component';
import { CheeseComponent } from './feature-pages/coding/cheese/cheese.component';
import { MagicBinderComComponent } from './feature-pages/coding/magic-binder-com/magic-binder-com.component';
import { MagicBinderComponent } from './feature-pages/coding/magic-binder/magic-binder.component';
import { ProdIndComponent } from './feature-pages/coding/prod-ind/prod-ind.component';
import { WillflixComponent } from './feature-pages/coding/willflix/willflix.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cheese', component: CheeseComponent },
  { path: 'catan', component: CatanComponent },
  { path: 'darpa', component: DarpaComponent },
  { path: 'nbcu', component: NbcuComponent },
  { path: 'a24', component: A24Component },
  { path: 'magic-binder', component: MagicBinderComponent },
  { path: 'magic-binder-com', component: MagicBinderComComponent },
  { path: 'prod-ind', component: ProdIndComponent },
  { path: 'willflix', component: WillflixComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { scrollPositionRestoration: 'enabled' }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }