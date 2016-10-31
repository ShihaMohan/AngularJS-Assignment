myApp.factory('movieService', ['$http', function($http) {
  return {
    movieCall: function(moviename) {
      return $http.get("http://api.tvmaze.com/search/shows?q=" + moviename)
      .then(function(response) {
        return response.data;
      });
    }
  }
}]);

myApp.factory('singleMovieService', ['$http', function($http) {
  return {
    singleMovieCall: function(singlemovieid) {
      return $http.get("http://api.tvmaze.com/shows/" + singlemovieid)
      .then(function(response) {
        return response.data;
      });
    },

    episodeCall: function(singlemovieid) {
      return $http.get("http://api.tvmaze.com/shows/" + singlemovieid + "/episodes")
      .then(function(response) {
        return response.data;
      });
    },

    seasonCall: function(singlemovieid) {
      return $http.get(" http://api.tvmaze.com/shows/" + singlemovieid + "/seasons")
      .then(function(response) {
        return response.data;
      });
    },

    castCall: function(singlemovieid) {
      return $http.get("http://api.tvmaze.com/shows/" + singlemovieid + "/cast")
      .then(function(response) {
        return response.data;
      });
    }
  }
}]);
