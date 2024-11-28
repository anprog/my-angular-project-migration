import angular from 'angular';

import {ajsDataService} from "./services/ajsDataService";
import {downgradeComponent} from "@angular/upgrade/static";
import {HelloWorldComponent} from "../components/hello-world/hello-world.component";
import {ajsMainController} from "./controllers/ajsMainController";

export const ajsApp = angular.module('ajsApp', [ajsDataService.name]); // Includo il modulo del servizio

ajsApp.controller('MainController', ajsMainController);

/*Non è necessario importare esplicitamente la direttiva helloWorld.directive.js nel file app.js
  perché in AngularJS, le direttive vengono registrate direttamente nel modulo AngularJS (ajsApp).
  Quando il modulo viene caricato, tutte le direttive registrate in esso sono automaticamente disponibili.
*/

ajsApp.directive(
  'helloWorld',
  downgradeComponent({
    component: HelloWorldComponent
  })
);
