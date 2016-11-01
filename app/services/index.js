'use strict';

var angular = require('angular');

angular.module('flight-search-app').service('FlightDataService', require('./flightDataService'));
angular.module('flight-search-app').service('FlightSearchService', require('./flightSearchService'));
