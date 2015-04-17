(function() {
    
    var movieNewController = function ($scope, $log, moviesService) {

        $scope.statusBar = moviesService.status;
        
        
        //moviesService.addMovie({ name : "Los Vengadores 2", description:"La Película de Marvel más esperada del 2015", youtube:"tmeOjFno6Do", img:"" }); 
    };
    
    movieNewController.$inject = ['$scope', '$log', 'moviesService'];

    angular.module('adminEnCarteleraApp')
      .controller('movieNewController', movieNewController);
    
}());