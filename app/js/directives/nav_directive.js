'use strict';

module.exports = function(app) {
  app.directive('nav', function(){
    return {
      restrict: 'EA',
      scope: {
      },
      controller: 'MainController',
      templateUrl: 'views/templates/nav_template.html'
    }
  });
};
