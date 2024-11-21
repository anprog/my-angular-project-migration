export const ajsMainController = ['$scope', 'AjsDataService', function ($scope, AjsDataService) {
  $scope.angularMessage = AjsDataService.getData();
}];
