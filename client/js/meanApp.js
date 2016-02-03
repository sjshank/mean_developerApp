/*
*	Angular module defined for application.
*	App has dependency on 'ngResource' for implementing RESTfull call
*/
var meanApp = angular.module('meanAppDemo', ['ngResource']).run(['$rootScope', function($rootScope) {
	$rootScope.title = "MEAN Sample Application";
}]);
