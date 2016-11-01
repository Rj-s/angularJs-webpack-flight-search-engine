'use strict';

var app = angular.module('flight-search-app', ['ngRoute', 'rzModule','720kb.datepicker']);

require('angular-route');
require('./directives');
require('./services');
require('./controllers');

app.config(['$routeProvider', '$locationProvider',

    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/main', {
            templateUrl: 'app/views/flight_search.html',
            controller: 'FlightSearchCtrl'
        }).otherwise({
            redirectTo: '/main'
        });
    }
]);
