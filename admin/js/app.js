(function(){
  startGlobalStyles();

  var uiController = function($scope){
    $scope.title = "Peliculas";
  };

  uiController.$inject = ['$scope'];

  angular.module('adminEnCarteleraApp', [])
    .controller('uiController', uiController);

    // Starts the styles
  function startGlobalStyles(){
    $(".button-collapse").sideNav();
  }
  
}()); 