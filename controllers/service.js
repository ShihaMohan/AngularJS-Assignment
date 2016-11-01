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

myApp.factory('singleMovieService', ['$http', 'domain', function($http, domain) {
  return {
    singleMovieCall: function(singlemovieid) {
      return $http.get(domain + singlemovieid)
      .then(function(response) {
        return response.data;
      });
    },

    episodeCall: function(singlemovieid) {
      return $http.get(domain + singlemovieid+ "/episodes")
      .then(function(response) {
        return response.data;
      });
    },

    seasonCall: function(singlemovieid) {
      return $http.get(domain+ singlemovieid + "/seasons")
      .then(function(response) {
        return response.data;
      });
    },

    castCall: function(singlemovieid) {
      return $http.get(domain + singlemovieid + "/cast")
      .then(function(response) {
        return response.data;
      });
    }
  }
}]);
