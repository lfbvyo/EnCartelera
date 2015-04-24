(function() {
    
    var theatersController = function ($scope, $log, theatersService) {

        var setTheaters = function (status, theaters) {
            $scope.theaters = theaters;
            $scope.$apply();
        }

        $scope.statusBar = theatersService.status;
        theatersService.getTheaters(setTheaters); 
        // Deletes a theater on data base and the local scope
        $scope.removeTheater = function (id) {
            if (!confirm("Desea eliminar el teatro")) {
                return;
            }
            // Removes a theater from the local scope
            var removeTheaterLocal = function (){
                angular.forEach($scope.theaters, function(theater, key) {
                    if (theater.objectId == id) {
                        $scope.theaters.splice(key, 1);
                        return;
                    }
                });
            };
            // Removes a theater from the Theaters Service
            var removeCallBack = function (status, message) {
                if(status) {
                    removeTheaterLocal();
                    $scope.$apply();
                    Materialize.toast('Teatro Eliminado.', 4000)
                } else {
                    console.debug(message);
                    Materialize.toast('Error Eliminando :(', 4000)
                }
            };
            theatersService.removeTheater(id, removeCallBack);
        };
    };
    
    theatersController.$inject = ['$scope', '$log', 'theatersService'];

    angular.module('adminEnCarteleraApp')
      .controller('theatersController', theatersController);
    
}());