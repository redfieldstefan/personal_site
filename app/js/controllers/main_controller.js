'use strict';

module.exports = function(app) {
  app.controller('MainController', ['$scope', '$location', function($scope, $location) {
    $scope.menuClicked = false;

    $scope.menuOn = function() {
      $scope.menuClicked = true;
    };

    $scope.redirect = function(destination) {
      $location.path('/' + destination)
    }
  }]);
};
