import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheeseComponent } from './feature-pages/coding/cheese/cheese.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cheese', component: CheeseComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
