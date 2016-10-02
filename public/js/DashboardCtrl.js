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
	$scope.profile = {};
	document.location.href = '#/login.html';
}

$scope.whiteWine = {
	title: "White Wines",
	foods: {
		seafood: "Shrimp, Crab, Lobster",
		meat: "Chicken, Pork, Veal",
		cheese: "Brie, Gruyere, Herbed Goat Cheese, Nutty Cheese",
		other: "Cream Sauces, Mexican, Vietnamese"
	},
	flavors: {
		// Chardonnay
		loRipeChar: "Green Plum, Green Apple, Pear",
		ripeChar: "Lemon, Peach, Melon",
		hiRipeChar: "Pineapple, Fig, Banana, Mango",
		oakedChar: "added Cream or Butter",
		// Sauvignon Blanc
		loRipeSauviBlanc: "Lime, Gooseberry",
		ripeSauviBlanc: "Green Apple, Citrus, Passion Fruit",
		hiRipeSauviBlanc: "Grapefruit, Peach, Melon",
		oakedSauviBlanc: "Vanilla, Smoke",
	},
	neighbors: {
		// Chardonnay
		pinotGrisChar: "Like unripe Charddonay",
		semillionChar: "Lighter with more lemon",
		viognierChar: "More Vanilla, flowers or Perfume",
		// Sauvignon Blanc
		vermentinoSauviBlanc: "More floral and citrus",
		grunerVeltinerSauviBlanc: "More lime, lemon, and grapefruit",
		verdejoSauviBlanc: "More texture and peach"
	},
	charddonay: {
		summary: "Chardonnay is the world's most popular wine grape. The taste of the Chardonnay grape is very neutral and easy to like. Many of the Chardonnay flavors are derived from terroir and oak-aging.The flavours varies from noticeable acidity (Cold Climates), to crisply and mineral (Chablis, France) with flavors of green plum, apple and pear, to heavy oak and tropical fruit flavors (theNew World). In cooler climates Chardonnay tends to be under-riped.In warmer climates the flavors tend to vary from lemon to peach and melon. In very warm climates Chardonnay tends to be over-riped. Oaked Chardonnay tends to have softer acidity and more fruit flavors with added butter, cream and hazelnut notes."
	},
	SouvignonBlanc: {
		summary: "Depending on the climate, the flavor can range from grass to tropical fruit. In cooler climates, the wines have noticeable acidity and flavors of grass and passion fruit. In warmer climates, the wines can develop over-ripeness aromas like grapefruit, peach, and melon."
	}
};

$scope.redWine = {
	title: "Red Wines"
};

$scope.roseWine = {
	title: "Rose Wines"
};

$scope.ports = {
	title: "Ports"
};

$scope.champagne = {
	title: "Champagne"
};

$scope.sangria = {
	title: "Sangria Wines"
}
});
