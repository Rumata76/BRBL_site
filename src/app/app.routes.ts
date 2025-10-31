import { Routes } from '@angular/router';

import { InscriptionComponent } from './features/inscription/inscription.component';
import {KazeComponent} from './features/kaze/kaze.component';
import {KahiseComponent} from './features/kahise/kahise.component';
import {KirundiComponent} from './features/kirundi/kirundi.component';
import {UbuntuComponent} from './features/ubuntu/ubuntu.component';


export const appRoutes : Routes = [
  { path: '', redirectTo: 'course', pathMatch: 'full' },
  { path: 'auth',
    loadComponent: () => import('./auth/login/login.component').then(m =>m.LoginComponent)
  },
  { path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(m =>m.RegisterComponent)
  },
  { path: 'course',
    loadComponent: () => import('./course/list/course-list.component').then(m =>m.CourseListComponent)
  },
  { path: 'accueil', component: KazeComponent },
  { path: 'histoire', component: KahiseComponent },
  { path: 'kirundi', component: KirundiComponent },
  { path: 'philosophie', component: UbuntuComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '**', redirectTo: 'accueil' }
];
