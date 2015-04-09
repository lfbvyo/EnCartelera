(function(){
  var currentTitleController = function($scope){
    $scope.title = "Peliculas";
  };
  currentTitleController.$inject = ['$scope'];
  angular.module('adminEnCarteleraApp', [])
    .controller('currentTitleController', currentTitleController);
  
}()); 