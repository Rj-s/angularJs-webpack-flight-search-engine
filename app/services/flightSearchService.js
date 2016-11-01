'use strict';

FlightSearchService.$inject = ['FlightDataService'];

function FlightSearchService(FlightDataService) {

    var flightQueryData = {
        "departFrom": "",
        "destination": "",
        "departDate": ""
    };

    return {
        flightResultData: function(oneWayFlight, returnFlight, passengerCount) {
            this.oneWayFlight = oneWayFlight,
                this.returnFlight = returnFlight,
                this.passengerCount = passengerCount,
                this.totalFare = function() {
                    var fare = this.returnFlight != undefined ? this.oneWayFlight.fare + this.returnFlight.fare : this.oneWayFlight.fare;
                    return fare * passengerCount;
                }
        },
        buildSearchData: function(departFrom, destination, departDate) {
            flightQueryData.departFrom = departFrom;
            flightQueryData.destination = destination;
            flightQueryData.departDate = departDate;
            return flightQueryData;
        },
        getDate: function(date) {
            var dateValues = date.split('/');
            return new Date(dateValues[2], dateValues[1] - 1, dateValues[0]);
        },
        fetchFlights: function(searchQuery) {
            var searchResult = [];
            var allFlights = FlightDataService.allFlightData();
            for (var key in allFlights) {
                if (allFlights.hasOwnProperty(key)) {
                    var flightDtl = allFlights[key];
                    if (flightDtl.departure.toUpperCase() == searchQuery.departFrom.toUpperCase() && flightDtl.destination.toUpperCase() == searchQuery.destination.toUpperCase() &&
                        flightDtl.departDate.getTime() == this.getDate(searchQuery.departDate).getTime()) {
                        searchResult.push(flightDtl);
                    }
                }
            }
            return searchResult;
        },
        buildFinalResult: function(oneWayFlightResult, returnFlightResult, passengerCount) {
            var flightResult = [];
            for (var key in oneWayFlightResult) {
                var oneWayFlightDtl = oneWayFlightResult[key];
                var returnFlightDtl = undefined;
                if (returnFlightResult != undefined && returnFlightResult.length > 0) {
                    for (var key in returnFlightResult) {
                        if (oneWayFlightDtl.name == returnFlightResult[key].name) {
                            returnFlightDtl = returnFlightResult[key];
                        }
                    }
                }
                var result = new this.flightResultData(oneWayFlightDtl, returnFlightDtl, passengerCount);
                flightResult.push(result);
            }
            return flightResult;
        },
        searchFlights: function(searchForm) {
            var searchData = this.buildSearchData(searchForm.departFrom, searchForm.destination, searchForm.departDate);
            var oneWayFlightResult = this.fetchFlights(searchData);

            if (searchForm.searchType == 'return') {
                var searchData = this.buildSearchData(searchForm.destination, searchForm.departFrom, searchForm.returnDate);
                var returnFlightResult = this.fetchFlights(searchData);
            }
            var result = this.buildFinalResult(oneWayFlightResult, returnFlightResult, searchForm.passengerCount);
            return result;
        },
        refineSearchForFare: function(availableFlights, priceRange) {
            var refinedSearchResult = [];
            for (var key in availableFlights) {
                var flightDtl = availableFlights[key];
                if (flightDtl.totalFare() >= priceRange.minValue && flightDtl.totalFare() <= priceRange.maxValue) {
                    refinedSearchResult.push(flightDtl);
                }
            }
            return refinedSearchResult;
        },
        initResultData: function() {
            var resultData = {};
            resultData.searchType = "";
            resultData.departDate = "";
            resultData.returnDate = "";
            resultData.departFrom = "";
            resultData.destination = "";
            resultData.availableFlights = [];
            return resultData;
        },
        buildResultData: function(searchForm) {
            var resultData = {};
            resultData.searchType = angular.copy(searchForm.searchType);
            resultData.departDate = angular.copy(searchForm.departDate);
            resultData.returnDate = angular.copy(searchForm.returnDate);
            resultData.departFrom = angular.copy(searchForm.departFrom);
            resultData.destination = angular.copy(searchForm.destination);
            return resultData;
        }
    };
};

module.exports = FlightSearchService;
