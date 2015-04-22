(function() {
    
    var genresController = function ($scope, $log, genresService) {

        var setGenres = function (status, genres) {
            $scope.genres = genres;
            $scope.$apply();
        }

        $scope.statusBar = genresService.status;
        genresService.getGenres(setGenres); 
        //genresService.addGenre({ name : "nuevo genero", description:"una descripcion" }); 
    };
    
    genresController.$inject = ['$scope', '$log', 'genresService'];

    angular.module('adminEnCarteleraApp')
      .controller('genresController', genresController);
    
}());