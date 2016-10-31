var myApp = angular.module('myapp', ['ngRoute']);

myApp.controller('movieController', ['$scope', '$sce', 'movieService', function($scope, $sce, movieService) {
  $scope.searchmovie = function(moviename) {
    movieService.movieCall(moviename)
    .then(function(data) {
      $scope.showList = data;
    });
  }
}]);
