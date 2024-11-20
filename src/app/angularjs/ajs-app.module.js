
import angular from 'angular';
export const ajsApp = angular.module('ajsApp', []); // Creazione del modulo

ajsApp.controller('MainController', ['$scope', function ($scope) {
  $scope.angularMessage =
    $scope.persona1 = {
    personaA: {
      nome: 'Mario',
      cognome: 'Rossi',
      sesso: 'M'
    },
    personaB: {
      nome: 'Lucia',
      cognome: 'Bianchi',
      sesso: 'F'
    },
    personaC: {
      nome: 'Giovanni',
      cognome: 'Verdi',
      sesso: 'M'
    }
  };
}]);
