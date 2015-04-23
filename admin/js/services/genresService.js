(function() {
    var genresService = function() {
        this.genres = [];
        initParse();
        // Get all genres available
        this.getGenres = function(callBack) {
            var query = new Parse.Query(Genres);
            self = this;
            query.ascending("name");
            query.find({
                success: function(genresObject) {
                    angular.forEach(genresObject, function(genreObject, key) {
                        self.genres.push(genreObject.toJSON());
                    });
                    callBack(true, self.genres);
                },
                error: function(error) {
                    callBack(false, self.genres);
                    console.debug(error.message);
                }
            });
        };
        // Gets an specific genre by the objectId
        this.getGenre = function(genreId) {
            for (var genreIndex=0,len=genres.length;i<len;genreIndex++) {
               if (genres[genreIndex].id === parseInt(customerId)) {
                   return genres[genreIndex];
               }
            }
            return {};
        };
        // Adds a new genre
        this.addGenre = function(genre, callBack){
            var genres = new Genres();
            genres.save(
                genre ,
                { success: function(object) {
                    callBack(true);
                },
                error: function(object, error) {
                    callBack(false, error.message);
                }
            });
        }
        this.removeGenre = function(id, callBack){
            var query = new Parse.Query(Genres);
            query.get(id, {
                success: function(genre) {
                    genre.destroy({
                        success: function(genre) {
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
            this.Genres = Parse.Object.extend("Genres");
        }
    };
    angular.module('adminEnCarteleraApp').service('genresService', genresService);
                                           
}());