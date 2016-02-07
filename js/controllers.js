"use strict";

	var appCtrl = angular.module("appCtrls",[]);

	appCtrl
	.controller("LandingCtrl",["$scope", function($scope){

		console.log("landing page controller init...");



	}])
	.directive("loginForm",[function(){

		var lForm = {};

		lForm = {
			restrict: "EAC",
			scope: {},
			templateUrl: "partials/directives/login-form.html",
			controller: ["$scope", function($scope){
				// $scope.uName = "User Name";
				// $scope.uPass = "Password";
			}]
		};

		return lForm;

	}]);





