var myApp = angular.module('myapp', ['ngRoute']);

myApp.controller('movieController', ['$scope', '$sce', 'mainmovieService', function($scope, $sce, mainmovieService) {

    $scope.searchmovie = function(moviename) {

        mainmovieService.movieCall(moviename).then(function(data) {
            $scope.showList = data;

            for (var i = 0; i < $scope.showList.length; i++) {
                console.log($scope.showList[i]);
            }
        });
    }

}]);
