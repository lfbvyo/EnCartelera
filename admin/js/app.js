(function(){
  startGlobalStyles();

  var app = angular.module('adminEnCarteleraApp', ['ngRoute']);

  app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'moviesController',
                templateUrl: 'templates/movies.html'
            })
            .when('/movie/:movieID', {
                controller: 'movieController',
                templateUrl: 'templates/movie.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

    // Starts the styles
  function startGlobalStyles(){
    $(".button-collapse").sideNav();
  }

}()); 