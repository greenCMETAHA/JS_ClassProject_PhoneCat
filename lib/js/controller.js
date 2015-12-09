'use strict';

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('lib/phones/phones.json').success(function(data) {
            $scope.phones = data;
        });

        $scope.orderProp = 'age';
    }]);

//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
//    function($scope, $routeParams) {
//        $scope.phoneId = $routeParams.phoneId;
//    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('lib/phones/' + $routeParams.phoneId + '.json').success(function(data) {
            $scope.phone = data;
        });
    }]);


