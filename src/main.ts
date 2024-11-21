import 'angular'; // Import AngularJS
import '@angular/upgrade/static'; // Necessario per l'upgrade
import './app/angularjs/ajs-app.module.js'; // Modulo AngularJS
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UpgradeModule} from '@angular/upgrade/static';
import {AppModule} from './app/app.module';

// Bootstrap Angular
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    // Bootstrap AngularJS con UpgradeModule
    upgrade.bootstrap(document.body, ['ajsApp'], { strictDi: true });
  })
  .catch((err) => console.error(err));
