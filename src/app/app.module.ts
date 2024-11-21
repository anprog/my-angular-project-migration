import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';

import {UpgradeModule} from '@angular/upgrade/static';
import './angularjs/app.js';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
    HelloWorldComponent,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: 'ajsDataService',
      useFactory: (i: any) => i.get('AjsDataService'),
      deps: ['$injector'] // Inietto il servizio dal contesto AngularJS
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
