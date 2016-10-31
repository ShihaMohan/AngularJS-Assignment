myApp.controller('singleMovieController', ['$scope', '$http', '$routeParams', '$sce', 'singleMovieService',
  function($scope, $http, $routeParams, $sce, singleMovieService) {

    var singlemovieid = $routeParams.movieid;

    singleMovieService.singleMovieCall(singlemovieid)
    .then(function(data) {
      $scope.showList = data;

      $scope.sanitizeHtml = function(htmlContent) {
        return $sce.trustAsHtml(htmlContent);
      }
      
      $scope.showMovie = data;

      $scope.time = "Not available";
      if (data.schedule.time !== "") {
        $scope.time = data.schedule.time;
      }
      $scope.days = ["Not available"];
      if (data.schedule.days.length > 0) {
        $scope.days = data.schedule.days;
      }
    });

    singleMovieService.episodeCall(singlemovieid)
    .then(function(data) {
      $scope.showEpisode = data;
    });

    singleMovieService.seasonCall(singlemovieid)
    .then(function(data) {
      $scope.showSeason = data;
    });

    singleMovieService.castCall(singlemovieid)
    .then(function(data) {
      $scope.showCast = data;
    });

    $scope.isSet = function(checkTab) {
      return $scope.tab === checkTab;
    };

    $scope.setTab = function(setTab) {
      $scope.tab = setTab;
    };
  }]);