import angular from 'angular';
import {downgradeComponent} from '@angular/upgrade/static';
import {HelloWorldComponent} from "../../components/hello-world/hello-world.component";

angular.module('ajsApp').directive(
  'helloWorld',
  downgradeComponent({
    component: HelloWorldComponent
  })
);
