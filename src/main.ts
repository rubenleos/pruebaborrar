import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {AppConfig} from './app/app.config';

/*if (AppConfig.settings.env.name === 'production') {
  enableProdMode();
}*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
