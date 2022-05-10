import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { FormRegComponent } from './components/form-reg/form-reg.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TwitComponent } from './components/twit/twit.component';

const routes: Routes = [
  {path: 'nav', component: NavbarComponent },
  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent },
{path: 'registro', component: FormRegComponent },
{path: 'twit', component: TwitComponent },
{path: '**', pathMatch: 'full', redirectTo: 'home'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
