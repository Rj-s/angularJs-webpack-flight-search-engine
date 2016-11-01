'use strict';

function FlightDataService() {
    var flightData = [{
            "flightNo": "AA1242",
            "name": "Air Asia",
            "departure": "Delhi",
            "departureCode": "DEL",
            "destination": "Mumbai",
            "destinationCode": "BOM",
            "departDate": new Date(2016, 10, 15),
            "depart": "10.00 AM",
            "arrive": "12.45 PM",
            "fare": 3500,
            "logo": "images/airasia.png"
        }, {
            "flightNo": "AI407",
            "name": "Air India",
            "departure": "Delhi",
            "departureCode": "DEL",
            "destination": "Mumbai",
            "destinationCode": "BOM",
            "departDate": new Date(2016, 10, 15),
            "depart": "10.20 AM",
            "arrive": "1.25 PM",
            "fare": 4600,
            "logo": "images/airindia.png"
        }, {
            "flightNo": "AI334",
            "name": "Air India",
            "departure": "Delhi",
            "departureCode": "DEL",
            "destination": "Mumbai",
            "destinationCode": "BOM",
            "departDate": new Date(2016, 10, 15),
            "depart": "10.40 AM",
            "arrive": "12.55 PM",
            "fare": 2800,
            "logo": "images/airindia.png"
        }, {
            "flightNo": "GO554",
            "name": "Go Air",
            "departure": "Delhi",
            "departureCode": "DEL",
            "destination": "Mumbai",
            "destinationCode": "BOM",
            "departDate": new Date(2016, 10, 15),
            "depart": "1.00 PM",
            "arrive": "2.45 PM",
            "fare": 3300,
            "logo": "images/goair.png"
        }, {
            "flightNo": "IN8673",
            "name": "Indigo",
            "departure": "Delhi",
            "departureCode": "DEL",
            "destination": "Mumbai",
            "destinationCode": "BOM",
            "departDate": new Date(2016, 10, 15),
            "depart": "3.05 AM",
            "arrive": "5.45 PM",
            "fare": 3000,
            "logo": "images/indigo.png"
        }, {
            "flightNo": "JA1120",
            "name": "Jet Airways",
            "departure": "Delhi",
            "departureCode": "DEL",
            "destination": "Mumbai",
            "destinationCode": "BOM",
            "departDate": new Date(2016, 10, 15),
            "depart": "1.00 PM",
            "arrive": "2.40 PM",
            "fare": 2350,
            "logo": "images/jetairways.png"
        }, {
            "flightNo": "SJ8764",
            "name": "Spicejet",
            "departure": "Delhi",
            "departureCode": "DEL",
            "destination": "Mumbai",
            "destinationCode": "BOM",
            "departDate": new Date(2016, 10, 15),
            "depart": "8.30 AM",
            "arrive": "11.45 AM",
            "fare": 2100,
            "logo": "images/spicejet.png"
        }, {
            "flightNo": "VS9003",
            "name": "Vistara",
            "departure": "Delhi",
            "departureCode": "DEL",
            "destination": "Mumbai",
            "destinationCode": "BOM",
            "departDate": new Date(2016, 10, 15),
            "depart": "8.10 PM",
            "arrive": "9.05 PM",
            "fare": 4950,
            "logo": "images/vistara.png"
        },


        {
            "flightNo": "AA1243",
            "name": "Air Asia",
            "departure": "Mumbai",
            "departureCode": "BOM",
            "destination": "Delhi",
            "destinationCode": "DEL",
            "departDate": new Date(2016, 10, 17),
            "depart": "09.05 AM",
            "arrive": "11.45 PM",
            "fare": 2500,
            "logo": "images/airasia.png"
        }, {
            "flightNo": "AI423",
            "name": "Air India",
            "departure": "Mumbai",
            "departureCode": "BOM",
            "destination": "Delhi",
            "destinationCode": "DEL",
            "departDate": new Date(2016, 10, 17),
            "depart": "12.15 PM",
            "arrive": "2.25 PM",
            "fare": 2100,
            "logo": "images/airindia.png"
        }, {
            "flightNo": "AI4532",
            "name": "Air India",
            "departure": "Mumbai",
            "departureCode": "BOM",
            "destination": "Delhi",
            "destinationCode": "DEL",
            "departDate": new Date(2016, 10, 17),
            "depart": "3.45.40 PM",
            "arrive": "5.55 PM",
            "fare": 3200,
            "logo": "images/airindia.png"
        }, {
            "flightNo": "GO121",
            "name": "Go Air",
            "departure": "Mumbai",
            "departureCode": "BOM",
            "destination": "Delhi",
            "destinationCode": "DEL",
            "departDate": new Date(2016, 10, 17),
            "depart": "06.00 AM",
            "arrive": "08.45 AM",
            "fare": 4300,
            "logo": "images/goair.png"
        }, {
            "flightNo": "IN8690",
            "name": "Indigo",
            "departure": "Mumbai",
            "departureCode": "BOM",
            "destination": "Delhi",
            "destinationCode": "DEL",
            "departDate": new Date(2016, 10, 17),
            "depart": "4.15 AM",
            "arrive": "6.25 PM",
            "fare": 3300,
            "logo": "images/indigo.png"
        }, {
            "flightNo": "JA1143",
            "name": "Jet Airways",
            "departure": "Mumbai",
            "departureCode": "BOM",
            "destination": "Delhi",
            "destinationCode": "DEL",
            "departDate": new Date(2016, 10, 17),
            "depart": "8.05 PM",
            "arrive": "10.40 PM",
            "fare": 4300,
            "logo": "images/jetairways.png"
        }, {
            "flightNo": "SJ8879",
            "name": "Spicejet",
            "departure": "Mumbai",
            "departureCode": "BOM",
            "destination": "Delhi",
            "destinationCode": "DEL",
            "departDate": new Date(2016, 10, 17),
            "depart": "9.30 AM",
            "arrive": "11.45 AM",
            "fare": 3100,
            "logo": "images/spicejet.png"
        }, {
            "flightNo": "VS9432",
            "name": "Vistara",
            "departure": "Mumbai",
            "departureCode": "BOM",
            "destination": "Delhi",
            "destinationCode": "DEL",
            "departDate": new Date(2016, 10, 17),
            "depart": "7.10 AM",
            "arrive": "9.55 AM",
            "fare": 2950,
            "logo": "images/vistara.png"
        }
    ]

    return {
        allFlightData: function() {
            return flightData;
        }
    };
};

module.exports = FlightDataService;
