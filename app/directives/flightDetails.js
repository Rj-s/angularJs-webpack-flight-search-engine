function FlightDetails() {
    return {
        restrict: 'E',
        scope: false,
        template: `<div class="flight-detail-panel column-11 row ">
                    <div class="flight-info column column-9 ">
                        <div class="column-12 ">
                            <h1>Rs. {{flight.totalFare()}}</h1>
                        </div>
                        <div class="row ">
                            <div class="column column-6 ">
                                <div> <span style="font-size:12px ">{{flight.oneWayFlight.flightNo}}</span></div>
                                <div> <strong>{{flight.oneWayFlight.departureCode}} > {{flight.oneWayFlight.destinationCode}} </strong></div>
                                <div> <strong>Depart:- {{flight.oneWayFlight.depart}}</strong></div>
                                <div> <strong>Arrival:- {{flight.oneWayFlight.arrive}}</strong></div>
                            </div>
                            <div class="column column-6 " ng-show="resultData.searchType=='return' ">
                                <div> <span style="font-size:12px ">{{flight.returnFlight.flightNo}}</span></div>
                                <div> <strong>{{flight.returnFlight.departureCode}} > {{flight.returnFlight.destinationCode}} </strong></div>
                                <div> <strong>Depart:- {{flight.returnFlight.depart}}</strong></div>
                                <div> <strong>Arrival:- {{flight.returnFlight.arrive}}</strong></div>
                            </div>
                        </div>
                    </div>
                    <div class="flight-brand column column-3 ">
                        <div> <img ng-src="{{flight.oneWayFlight.logo}} " height="50px " /> </div>
                        <div> <span>{{flight.oneWayFlight.name}}</span></div>
                        <div class="column-12 book-btn-panel ">
                            <input type="button " class="book-btn " value="Book this flight " />
                        </div>
                    </div>
                </div>`
    }
}

module.exports = FlightDetails;
