// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { UpgradeModule } from '@angular/upgrade/static';

// Definisci il modulo AngularJS
import './app/angularjs/ajs-hello-world';

// Bootstrap dell'applicazione Angular
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .then(ref => {
    // Bootstrap dell'applicazione AngularJS
    const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['ajsApp'], { strictDi: true });
  })
  .catch(err => console.error(err));
