(function() {
    var genreNewController = function ($scope, $log, genresService) {
        $scope.genre = {};
        // Shows feedback when after aving
        var saveCallBack = function(status){
            if(status) {
                $scope.genre = {};
                $scope.$apply();
                Materialize.toast('Género guardado.', 4000)
            } else {
                console.debug("Hubo un error :(");
                Materialize.toast('Error Guardando.', 4000)
            }
        };
        // Saves a genre through the genresService 
        $scope.saveGenre = function (genre) {
            if (validateGenre(genre)) {
                genresService.addGenre(genre, saveCallBack);
            } 
        };
        // Validates genre required data 
        function validateGenre(genre) {
            if (typeof(genre.name) == "undefined" || genre.name == "" ) {
                Materialize.toast('Nombre no puede ser vacío.', 4000)
                return false;
            }
            return true;
        }
    };

    genreNewController.$inject = ['$scope', '$log', 'genresService'];

    angular.module('adminEnCarteleraApp')
      .controller('genreNewController', genreNewController);
}());