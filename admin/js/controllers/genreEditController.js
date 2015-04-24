(function() {
    var genreEditController = function ($scope, $routeParams, genresService) {
        var genreId = $routeParams.genreId;
        $scope.genre = {};

        var setCurrentGenre = function(status, genre) {
            if (status){
                $scope.genre = genre;
                $scope.$apply();
            } else {
                document.location = "#/genres/";
            }
        };
        genresService.getGenre(genreId, setCurrentGenre);

        // Saves a genre through the genresService 
        $scope.saveGenre = function (genre) {
            // Shows feedback when after aving
            var saveCallBack = function(status, message){
                if(status) {
                    Materialize.toast('Género guardado.', 4000)
                } else {
                    console.debug(message);
                    Materialize.toast('Error Guardando :(', 4000)
                }
                $("#save-new-genre").removeClass("disabled");
            };
            if (validateGenre(genre)) {
                $("#save-new-genre").addClass("disabled");
                genresService.addGenre(genre, saveCallBack);
            } 
        };
        // Validates genre required data 
        function validateGenre(genre) {
            if ($("#save-new-genre").hasClass("disabled")) {
                Materialize.toast('Guardando. Por favor espere.', 1000)
            }
            if (typeof(genre.name) == "undefined" || genre.name == "" ) {
                Materialize.toast('Nombre no puede ser vacío.', 2000)
                return false;
            }
            return true;
        }
    };

    genreEditController.$inject = ['$scope', '$routeParams', 'genresService'];

    angular.module('adminEnCarteleraApp')
      .controller('genreEditController', genreEditController);
}());