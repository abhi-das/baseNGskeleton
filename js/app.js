"use strict";

	var app = angular.module("baseApp", ["ngRoute", "appCtrls"]);

	app.config(["$routeProvider", function($rProvider){

		$rProvider
		.when("/landing",{
			templateUrl: "partials/landing.html",
			controller: "LandingCtrl"
		})
		.otherwise({
			redirectTo: "/landing"
		})

	}]);



