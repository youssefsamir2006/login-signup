import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // We can add a wildcard route for 404 pages later if needed
  // { path: '**', component: PageNotFoundComponent },
];
