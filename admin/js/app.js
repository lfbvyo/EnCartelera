(function(){
    startStyles();


  var currentTitleController = function($scope){
    $scope.title = "Peliculas";
  };
  currentTitleController.$inject = ['$scope'];
  angular.module('adminEnCarteleraApp', [])
    .controller('currentTitleController', currentTitleController);
    // Starts the styles
  function startStyles(){
    $(".button-collapse").sideNav();
  }
}()); 