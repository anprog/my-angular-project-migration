import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';

import {downgradeComponent, UpgradeModule} from '@angular/upgrade/static';

import angular from 'angular'; // Importa il modulo AngularJS
import './angularjs/ajs-app.module.js';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}

// Downgrade del componente per AngularJS con il binding dell'input
angular.module('ajsApp').directive(
  'helloWorld',
  downgradeComponent({
    component: HelloWorldComponent,
    inputs: ['name']  // Specifica il parametro di input
  })
);
