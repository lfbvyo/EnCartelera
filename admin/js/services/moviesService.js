(function() {
    var moviesService = function() {
        this.movies = [];
        this.status = "waiting";
        initParse();

        this.getMovies = function(callBack) {
            var query = new Parse.Query(Movies);
            this.status = "Getting movies";
            self = this;
            query.find({
              success: function(moviesObject) {
                angular.forEach(moviesObject, function(movieObject, key) {
                  self.movies.push(movieObject.toJSON());
                });
                self.status = "Movies loaded";
                callBack(self.status, self.movies);
              },
              error: function(error) {
                this.status = "Error getting movies";
              }
            });
        };
        
        this.getMovie = function(movieId) {
            for (var movieIndex=0,len=movies.length;i<len;movieIndex++) {
               if (movies[movieIndex].id === parseInt(customerId)) {
                   return movies[movieIndex];
               }
            }
            return {};
        };
        this.addMovie = function(movie){
            var movies = new Movies();
            status = "saving";
            movies.save(
                movie ,
                { success: function(gameScore) {
                    status = "saved";
                },
                error: function(object, error) {
                    status = "Error saving movie";
                }
            });
        }
        // init parse and returns a parse object
        function initParse() {
            Parse.initialize("3slOByynxBpBjL3GdS8eDWyn2Yx9rjZFY62sw5YF", "6y6B1FzAo9wBxJBwzjpy6NaTr92dvr3k6buA51om");
            this.Movies = Parse.Object.extend("Movies");
        }

    };
    
    angular.module('adminEnCarteleraApp').service('moviesService', moviesService);
                                           
}());