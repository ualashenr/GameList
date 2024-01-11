import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTES),provideHttpClient(withFetch())]
}).catch(err => console.error(err));
