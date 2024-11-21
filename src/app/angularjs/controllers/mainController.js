export const MainController = ['$scope', 'DataService', function ($scope, DataService) {
  $scope.angularMessage = DataService.getData();
}];
