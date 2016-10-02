var app = angular.module('MiVino', ['ngRoute', 'firebase']);

app.config(function($routeProvider){

$routeProvider
	.when('/login',{
		templateUrl: 'views/login.html',
		controller: 'LoginCtrl'
	})
	.when('/home',{
		templateUrl: 'views/home.html'
	})
	.when('/dashboard/:userId', {
		templateUrl: 'views/dashboard.html',
		controller: 'DashboardCtrl',
		resolve: {
			userReference: function(firebaseService, $route){
				return firebaseService.getUser($route.current.params.userId);
			},
			wineReference: function(firebaseService, $route){
				return firebaseService.getWines($route.current.params.userId);
			}
		}
	})
	.otherwise({
		redirectTo: '/login'
	});
});
