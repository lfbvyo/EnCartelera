(function() {
    var movieNewController = function ($scope, $log, moviesService) {
        //start materialize styles
        startStyles();
        $scope.movie = {};
        $scope.movie.movie = true;

        $scope.statusBar = moviesService.status;
        $scope.movie.dimension = 2;
        $scope.movie.rating = "TP";
        $scope.movie.genres = [];
        
        
        $scope.saveMovie = function (movie) {
            moviesService.addMovie(movie);
        };
        // when selects in page 
        $scope.select = function(scopeVal) {
            $scope.movie[scopeVal] = $("#select-"+scopeVal+" option:selected").val();
        };
        function startStyles() {
            $(document).ready(function() {
                $('select').material_select();
            });
        }

        //moviesService.addMovie({ name : "Los Vengadores 2", description:"La Película de Marvel más esperada del 2015", youtube:"tmeOjFno6Do", img:"" }); 
    };

    movieNewController.$inject = ['$scope', '$log', 'moviesService'];

    angular.module('adminEnCarteleraApp')
      .controller('movieNewController', movieNewController);

    
}());