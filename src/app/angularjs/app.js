import angular from 'angular';
import {MainController} from './controllers/mainController';
import {dataService} from "./services/dataService";
import {downgradeComponent} from "@angular/upgrade/static";
import {HelloWorldComponent} from "../hello-world/hello-world.component";

export const ajsApp = angular.module('ajsApp', [dataService.name]); // Includo il modulo del servizio

ajsApp.controller('MainController', MainController);

/*Non è necessario importare esplicitamente la direttiva helloWorld.directive.js nel file app.js
  perché in AngularJS, le direttive vengono registrate direttamente nel modulo AngularJS (ajsApp).
  Quando il modulo viene caricato, tutte le direttive registrate in esso sono automaticamente disponibili.
*/

ajsApp.directive(
  'helloWorld',
  downgradeComponent({
    component: HelloWorldComponent,
    inputs: ['name']
  })
);
