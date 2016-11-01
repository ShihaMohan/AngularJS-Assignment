var myApp = angular.module('myapp', ['ngRoute']);

myApp.constant('domain','http://api.tvmaze.com/shows/');

myApp.controller('movieController', ['$scope', '$sce', 'movieService', function($scope, $sce, movieService) {

  $scope.errorMessage = true;
  $scope.searchmovie = function(moviename) {
    movieService.movieCall(moviename)
    .then(function(data) {
      $scope.showList = data;
      if(data.length === 0){
       $scope.errorMessage = false;
     } else {
      $scope.errorMessage = true;
    };
  });
  }

  var movie = localStorage.searchmovie ? localStorage.searchmovie : '';
  localStorage.searchmovie= "";
  if(movie !== '') {
    movieService.movieCall(movie)
    .then(function(data) {
      $scope.showList = data;

      if(data.length === 0){
       $scope.errorMessage = false;
     }else {
      $scope.errorMessage = true;
    };
  });
  }
}]);


