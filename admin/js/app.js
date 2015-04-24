(function(){
    startGlobalStyles();

    var app = angular.module('adminEnCarteleraApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'moviesController',
                templateUrl: 'templates/movies.html'
            })
            .when('/movies/', {
                controller: 'moviesController',
                templateUrl: 'templates/movies.html'
            })
            .when('/movie/new/', {
                controller: 'movieNewController',
                templateUrl: 'templates/movieNew.html'
            })
            .when('/movie/:movieID', {
                controller: 'movieController',
                templateUrl: 'templates/movie.html'
            })
            .when('/movie/edit/:movieID/', {
                controller: 'movieEditController',
                templateUrl: 'templates/movieEdit.html'
            })
            .when('/genres/', {
                controller: 'genresController',
                templateUrl: 'templates/genres.html'
            })
            .when('/genre/new/', {
                controller: 'genreNewController',
                templateUrl: 'templates/genreEditNew.html'
            })
            .when('/genre/edit/:genreId/', {
                controller: 'genreEditController',
                templateUrl: 'templates/genreEditNew.html'
            })
            .when('/theaters/', {
                controller: 'theatersController',
                templateUrl: 'templates/theaters.html'
            })
            .when('/theater/new/', {
                controller: 'theaterNewController',
                templateUrl: 'templates/theaterEditNew.html'
            })
            .when('/theater/edit/:theaterId/', {
                controller: 'theaterEditController',
                templateUrl: 'templates/theaterEditNew.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    // Starts the styles
    function startGlobalStyles(){
        $(".button-collapse").sideNav({
            closeOnClick: true 
        });
    }
}()); 