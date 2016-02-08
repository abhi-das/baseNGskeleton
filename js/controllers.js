"use strict";

	var appCtrl = angular.module("appCtrls",[]);

	appCtrl
	.controller("LandingCtrl",["$scope", function($scope){

		console.log("landing page controller init...");



	}])
	.controller("BarChartCtrl",["$scope", function($scope){

		console.log("bar char init..");
		$scope.mvchart = [20,15,35,66,75,25,95,50];

	}]);
	





