import { Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { TextComponent } from './text/text.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {KazeComponent} from './kaze/kaze.component';
import {KahiseComponent} from './kahise/kahise.component';
import {KirundiComponent} from './kirundi/kirundi.component';
import {UbuntuComponent} from './ubuntu/ubuntu.component';


export const appRoutes : Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: KazeComponent },
  { path: 'histoire', component: KahiseComponent },
  { path: 'kirundi', component: KirundiComponent },
  { path: 'philosophie', component: UbuntuComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '**', redirectTo: 'accueil' }
];
