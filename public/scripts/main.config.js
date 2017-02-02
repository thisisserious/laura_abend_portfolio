angular.module('myApp')
       .config(function($routeProvider, $locationProvider) {
          $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController as home',
          }).when('/carousel', {
            templateUrl: 'views/carousel.html',
            controller: 'CarouselController as carousel',
          }).otherwise('/home');
          $locationProvider.html5Mode(true);
        });
