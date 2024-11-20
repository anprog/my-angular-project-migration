/*
angular.module('ajsApp', [])
  .component('helloWorld', {
    template: '<h1>Hello from AngularJS!</h1>'
  });
*/

import { downgradeComponent } from '@angular/upgrade/static';
import {HelloWorldComponent} from '../hello-world/hello-world.component';
import angular from 'angular';

angular.module('ajsApp', [])
  .directive('helloWorld', downgradeComponent({
    component: HelloWorldComponent,
    inputs: ['name']}));
