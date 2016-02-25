var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController'
        })
        .when('/tv', {
            templateUrl: '/views/templates/tv.html',
            controller: 'HomeController'
        })
        .when('/game', {
            templateUrl: '/views/templates/game.html',
            controller: 'HomeController'
        })
        .when('/film', {
            templateUrl: '/views/templates/film.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: 'home'
        })

}]);



