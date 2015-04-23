(function() {
    var genreNewController = function ($scope, $log, genresService) {
        $scope.genre = {};
        // Saves a genre through the genresService 
        $scope.saveGenre = function (genre) {
            // Shows feedback when after aving
            var saveCallBack = function(status, message){
                if(status) {
                    $scope.genre = {};
                    $scope.$apply();
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

    genreNewController.$inject = ['$scope', '$log', 'genresService'];

    angular.module('adminEnCarteleraApp')
      .controller('genreNewController', genreNewController);
}());