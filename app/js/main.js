'use strict';

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){

	$routeProvider

	.when('/',{
		templateUrl:'partials/partial1.html',
		controller: 'mainController'
	})

	.when('/partial2',{
		templateUrl:'partials/partial2.html',
		controller: 'secondController'
	})

});

myApp.controller('mainController',['$scope',function($scope){

	$scope.title = "This is partial 1";

}])

myApp.controller('secondController',['$scope',function($scope){

	$scope.title = "This is partial 2";

}])