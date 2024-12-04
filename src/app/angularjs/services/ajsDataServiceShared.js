import angular from 'angular';

export const ajsDataServiceShared = angular.module('ajsDataServiceShared', [])
  .service('AjsDataServiceShared', function() {
    let sharedData={};

    return {
      getData: function() {
        return sharedData;
      },
      setData: function(value) {
        sharedData = value;
      }
    };
  });
