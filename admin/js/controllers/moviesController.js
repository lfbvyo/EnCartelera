(function() {
    
    var moviesController = function ($scope) {
        $scope.hi = '!!';
        
    };
    
    moviesController.$inject = ['$scope'];

    angular.module('adminEnCarteleraApp')
      .controller('moviesController', moviesController);
    
}());