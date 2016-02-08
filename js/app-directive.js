"use strict";

var appDrv = angular.module("appDrvs",[]);

appDrv
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

	}
])
.directive("dthreeBar",[function(){
		var brChart = {};
		brChart = {
			restrict: "EAC",
			replace: "false",
			scope:{
				data: "=chartData"
			},
			link: function(scope, element, attrs){

				var chart = d3.select(element[0]);
				chart.append("div").attr("class","chart")
					 .selectAll("div")
					 .data(scope.data).enter().append("div")
					 .transition().ease("elastic")
					 .style("width", function(d){
					 	return d+"%";
					 });
				console.log(chart);
			}
		};
		return brChart;
	}
])