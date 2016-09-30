myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', '$http', function ($scope, $http){
	$http.get('topspots.json')
	.then(function(response){
	$scope.spots = response.data.topSpots;
});
}]);