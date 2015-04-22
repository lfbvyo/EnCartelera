(function() {
    var genreNewController = function ($scope, $log, genresService) {
        $scope.genre = {};
        var printResult = function(status){
            if(status) {
                $scope.genre = {};
                $scope.$apply();
            } else {
                console.debug("Hubo un error :(");
            }
        };
        $scope.saveGenre = function (genre) {
            genresService.addGenre(genre, printResult);
        };
    };

    genreNewController.$inject = ['$scope', '$log', 'genresService'];

    angular.module('adminEnCarteleraApp')
      .controller('genreNewController', genreNewController);

    
}());