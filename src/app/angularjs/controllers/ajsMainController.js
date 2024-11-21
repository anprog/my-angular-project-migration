export function ajsMainController($scope, AjsDataService) {
  //$scope.angularMessage = 'Dati caricati da AngularJS'; // Questo può essere rimosso
}

// Aggiungi esplicitamente le dipendenze
ajsMainController.$inject = ['$scope', 'AjsDataService'];
