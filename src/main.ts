import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  { provide: LocationStrategy,
    useClass: PathLocationStrategy //== the default "HTML 5 pushState" style.
    //useClass: HashLocationStrategy //== the "hash # URL" style. 
  },
  disableDeprecatedForms(),
  provideForms()
])
.catch((err: any) => console.error(err));

