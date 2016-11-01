myApp.directive("header", function() {
	return {
		restrict: 'E',
		templateUrl: 'navbar.html',
		scope: true,
		transclude: false,
	}; 
});
