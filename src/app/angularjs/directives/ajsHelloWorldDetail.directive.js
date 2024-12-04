import angular from 'angular';
import {downgradeComponent} from '@angular/upgrade/static';
import {RowDetailsModalComponent} from "../../components/row-details-modal/row-details-modal.component";

angular.module('ajsApp').directive(
  'helloWorldDetail',
  downgradeComponent({
    component: RowDetailsModalComponent
  })
);
