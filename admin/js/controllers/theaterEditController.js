(function() {
    var theaterEditController = function ($scope, $routeParams, theatersService) {
        var theaterId = $routeParams.theaterId;
        $scope.theater = {};

        var setCurrentTheater = function(status, theater) {
            if (status){
                $scope.theater = theater;
                $scope.$apply();
            } else {
                document.location = "#/theaters/";
            }
        };
        theatersService.getTheater(theaterId, setCurrentTheater);

        // Saves a theater through the theatersService 
        $scope.saveTheater = function (theater) {
            // Shows feedback when after aving
            var saveCallBack = function(status, message){
                if(status) {
                    Materialize.toast('Teatro guardado.', 4000)
                } else {
                    console.debug(message);
                    Materialize.toast('Error Guardando :(', 4000)
                }
                $("#save-new-theater").removeClass("disabled");
            };
            if (validateTheater(theater)) {
                $("#save-new-theater").addClass("disabled");
                theatersService.addTheater(theater, saveCallBack);
            } 
        };
        // Validates theater required data 
        function validateTheater(theater) {
            if ($("#save-new-theater").hasClass("disabled")) {
                Materialize.toast('Guardando. Por favor espere.', 1000)
            }
            if (typeof(theater.name) == "undefined" || theater.name == "" ) {
                Materialize.toast('Nombre no puede ser vacío.', 2000)
                return false;
            }
            return true;
        }
    };

    theaterEditController.$inject = ['$scope', '$routeParams', 'theatersService'];

    angular.module('adminEnCarteleraApp')
      .controller('theaterEditController', theaterEditController);
}());