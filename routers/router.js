myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'movielist.html',
            controller: 'movieController'
        })
        .when('/:movieid', {
            templateUrl: 'moviedescription.html',
             controller: 'singleMovieController'              
        });    
});