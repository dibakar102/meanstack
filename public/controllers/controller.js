var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

var refresh = function(){
	$http.get('/mydb').success(function(response){
		console.log("I got the data i requested");
		$scope.mydb = response;
		
	});
};
var refresh2 = function(){
	$http.get('/mypr').success(function(response){
		console.log("I got the data i requested");
		$scope.mypr = response;
		
	});
};
refresh();
refresh2();


}]);