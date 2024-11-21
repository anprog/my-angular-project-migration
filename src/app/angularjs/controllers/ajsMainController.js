/*export const ajsMainController = ['$scope', 'AjsDataService', function ($scope, AjsDataService) {
  $scope.angularMessage = AjsDataService.getData();
}];
 */

export function ajsMainController($scope, AjsDataService) {
  $scope.angularMessage = 'Dati caricati da AngularJS'; // Questo può essere rimosso se non è necessario
}

// Aggiungi esplicitamente le dipendenze
ajsMainController.$inject = ['$scope', 'AjsDataService'];
