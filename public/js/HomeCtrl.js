var app = angular.module('MiVino');

app.controller('HomeCtrl', function($scope){

$scope.logout = function() {
	document.location.href = '#/login.html';
}


});
