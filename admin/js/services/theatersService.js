(function() {
    var theatersService = function() {
        this.theaters = [];
        currentParseObject = null;
        initParse();
        // Get all theaters available
        this.getTheaters = function(callBack) {
            var query = new Parse.Query(Theaters);
            self = this;
            query.ascending("name");
            query.find({
                success: function(theatersObject) {
                    theatersJson = [];
                    angular.forEach(theatersObject, function(theaterObject, key) {
                        self.theaters.push(theaterObject.toJSON());
                        theatersJson.push(theaterObject.toJSON());
                    });
                    callBack(true, theatersJson);
                },
                error: function(error) {
                    callBack(false, null);
                    console.debug(error.message);
                }
            });
        };
        // Gets an specific theater by the objectId
        this.getTheater = function(theaterId, callBack) {
            var query = new Parse.Query(Theaters);
            query.get(theaterId, {
                success: function(theater) {
                    currentParseObject = theater;
                    callBack(true, theater.toJSON() );
                },
                error: function(object, error) {
                    callBack(false, error.message);
                }
            });
        };
        this.saveTheater = function(theater) {
            currentParseObject.save(
                theater ,
                { success: function(object) {
                    callBack(true);
                },
                error: function(object, error) {
                    callBack(false, error.message);
                }
            });
        }
        // Adds a new theater
        this.addTheater = function(theater, callBack){
            var theaters = new Theaters();
            theaters.save(
                theater ,
                { success: function(object) {
                    callBack(true);
                },
                error: function(object, error) {
                    callBack(false, error.message);
                }
            });
        }
        this.removeTheater = function(id, callBack){
            var query = new Parse.Query(Theaters);
            query.get(id, {
                success: function(theater) {
                    theater.destroy({
                        success: function(theater) {
                            callBack(true);
                        },
                        error: function(object, error) {
                            callBack(false, error.message);
                        }
                    });
                },
                error: function(object, error) {
                    callBack(false, error.message);
                }
            });
        }
        // init parse and returns a parse object
        function initParse() {
            Parse.initialize("3slOByynxBpBjL3GdS8eDWyn2Yx9rjZFY62sw5YF", "6y6B1FzAo9wBxJBwzjpy6NaTr92dvr3k6buA51om");
            this.Theaters = Parse.Object.extend("Theaters");
        }
    };
    angular.module('adminEnCarteleraApp').service('theatersService', theatersService);
                                           
}());