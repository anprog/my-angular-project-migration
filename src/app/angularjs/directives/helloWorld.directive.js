import angular from 'angular';
import {downgradeComponent} from '@angular/upgrade/static';
import {HelloWorldComponent} from "../../hello-world/hello-world.component";

angular.module('ajsApp').directive(
  'helloWorld',
  downgradeComponent({
    component: HelloWorldComponent,
    inputs: ['name']
  })
);
