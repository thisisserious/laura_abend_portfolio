angular.module('myApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/home', {
           templateUrl: 'views/home.html',
           controller: 'HomeController as home',
         });
         $locationProvider.html5Mode(true);
       });
