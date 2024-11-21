import angular from 'angular';

export const ajsDataService = angular.module('ajsDataService', [])
  .service('AjsDataService', function() {
    this.getData = function() {
      return [
        { "id": "1", "nome": "Olivia", "cognome": "Rossi" },
        { "id": "2", "nome": "Maia", "cognome": "Giallo" },
        { "id": "3", "nome": "Mario", "cognome": "Verde" },
        { "id": "4", "nome": "Giuseppe", "cognome": "Arancione" },
        { "id": "5", "nome": "Marco", "cognome": "Viola" },
        { "id": "6", "nome": "Asher", "cognome": "Indaco" },
        { "id": "7", "nome": "Andrea", "cognome": "Blu" },
        { "id": "8", "nome": "Matteo", "cognome": "Marrone" },
        { "id": "9", "nome": "Sara", "cognome": "Violetta" },
        { "id": "10", "nome": "Pippo", "cognome": "Nero" }
      ];
    };
  });
