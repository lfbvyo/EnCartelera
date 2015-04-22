(function() {
    var movieNewController = function ($scope, $log, moviesService) {
        //start materialize styles
        startStyles();

        $scope.movie = true;

        $scope.statusBar = moviesService.status;
        
        $scope.saveMovie = function () {
            console.debug($scope.master);
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