import angular from 'angular';

export const dataService = angular.module('dataService', [])
  .service('DataService', function() {
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
