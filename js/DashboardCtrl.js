var app = angular.module('MiVino');

app.controller('DashboardCtrl', function($scope, userReference, wineReference){

	$scope.profile = userReference;

	$scope.wines = wineReference;

	$scope.addWine = function(){
		$scope.wines.$add($scope.wine);
	}

	$scope.removeWine = function(wine){
		$scope.wines.$remove(wine);
	}

	$scope.update = function(){
		$scope.profile.$save();
	};

$scope.logout = function() {
	var firebaseUrl = 'https://mivino.firebaseio.com/'
	document.location.href = '#/login.html';
	firebaseUrl.unauth();

}

});
