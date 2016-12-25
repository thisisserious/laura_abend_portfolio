angular.module('myApp')
       .controller('HomeController', HomeController);

function HomeController() {
  var home = this;
  console.log('HomeController loaded');
}
