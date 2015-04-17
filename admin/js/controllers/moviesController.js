(function() {
    
    var moviesController = function ($scope, $log, moviesService) {

        var setMovies = function (status, movies) {
            $scope.movies = movies;
            $scope.statusBar = status;
            console.debug($scope.movies);
            $scope.$apply();
        }
        $scope.statusBar = moviesService.status;
        moviesService.getMovies(setMovies); 
        
        
        //moviesService.addMovie({ name : "Los Vengadores 2", description:"La Película de Marvel más esperada del 2015", youtube:"tmeOjFno6Do", img:"" }); 
    };
    
    moviesController.$inject = ['$scope', '$log', 'moviesService'];

    angular.module('adminEnCarteleraApp')
      .controller('moviesController', moviesController);
    
}());