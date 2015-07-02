'use strict';

require('angular/angular');
require('angular-route');
require('angular-sanitize');

var stefanApp = angular.module('stefanApp', ['ngRoute', 'ngSanitize']);

//controllers
require('./controllers/main_controller')(stefanApp);

//directives
require('./directives/nav_directive')(stefanApp);

//routes
stefanApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/experience', {
      templateUrl: 'views/experience.html',
      controller: 'MainController'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'MainController'
    })
    .when('/me', {
      templateUrl: 'views/me.html',
      controller: 'MainController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'MainController'
    })
    .otherwise({redirectTo:'/'});
}]);
