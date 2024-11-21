import angular from 'angular';

export const ajsDataService = angular.module('ajsDataService', [])
  .service('AjsDataService', function() {
    this.getData = function() {
      return {
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
    };
  });
