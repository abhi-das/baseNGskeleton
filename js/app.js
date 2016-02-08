"use strict";

	var app = angular.module("baseApp", ["ngRoute", "appCtrls", "appDrvs"]);

	app.config(["$routeProvider", function($rProvider){

		$rProvider
		.when("/landing",{
			templateUrl: "partials/landing.html",
			controller: "LandingCtrl"
		})
		.when("/d3",{
			templateUrl: "partials/barchart.html",
			controller: "BarChartCtrl"
		})
		.otherwise({
			redirectTo: "/landing"
		})

	}]);



