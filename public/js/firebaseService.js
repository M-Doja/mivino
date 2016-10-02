var app = angular.module('MiVino');

app.service('firebaseService', function ($firebase) {
	var firebaseUrl = 'https://mivino.firebaseio.com/';

	this.getUser = function(userId){
		return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject();
	};

	this.getWines = function(userId){
		return $firebase(new Firebase(firebaseUrl + 'users/' + userId + '/wines')).$asArray();
	}
})
