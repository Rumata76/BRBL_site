import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {JwtInterceptor} from './app/features/interceptors/jwt.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([JwtInterceptor]))
  ]
}).catch(err => console.error(err));
