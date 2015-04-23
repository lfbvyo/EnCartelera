(function() {
    
    var genresController = function ($scope, $log, genresService) {

        var setGenres = function (status, genres) {
            $scope.genres = genres;
            $scope.$apply();
        }

        $scope.statusBar = genresService.status;
        genresService.getGenres(setGenres); 
        // Deletes a genre on data base and the local scope
        $scope.removeGenre = function (id) {
            var removeGenreLocal = function (){
                angular.forEach($scope.genres, function(genre, key) {
                    if (genre.objectId == id) {
                        $scope.genres.splice(key, 1);
                        return;
                    }
                });
            };
            var removeCallBack = function (status, message) {
                if(status) {
                    removeGenreLocal();
                    $scope.$apply();
                    Materialize.toast('Género Eliminado.', 4000)
                } else {
                    console.debug(message);
                    Materialize.toast('Error Eliminando :(', 4000)
                }
            };
            genresService.removeGenre(id, removeCallBack);
        };
    };
    
    genresController.$inject = ['$scope', '$log', 'genresService'];

    angular.module('adminEnCarteleraApp')
      .controller('genresController', genresController);
    
}());