'use strict';

FlightSearchCtrl.$inject = ['$scope', 'FlightSearchService'];

function FlightSearchCtrl($scope, FlightSearchService) {

    $scope.searchForm = {};
    $scope.searchForm.searchType = 'oneWay';
    $scope.resultData = FlightSearchService.initResultData();

    $scope.searchForm.priceRange = {
        minValue: 2000,
        maxValue: 20000,
        options: {
            floor: 1500,
            ceil: 25000,
            step: 100,
            minRange: 200,
            pushRange: true,
            onEnd: function() {
                $scope.searchFlights();
            }
        }
    };

    $scope.searchFlights = function() {
        $scope.resultData = FlightSearchService.buildResultData($scope.searchForm);
        var availableFlights = FlightSearchService.searchFlights($scope.searchForm);
        $scope.resultData.availableFlights = FlightSearchService.refineSearchForFare(availableFlights, $scope.searchForm.priceRange);
    }

}

module.exports = FlightSearchCtrl;
