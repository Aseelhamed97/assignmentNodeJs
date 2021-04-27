const express = require('express');
const router =express.Router();
const flightCont = require('./testController');

router.route('/flights').get(flightCont.getFlights);

router.route('/flights/:number').get(flightCont.getFlightByNumber);

router.route('/fares').get(flightCont.getFares);

router.route('/reservations').get(flightCont.getReservations);

router.route('/invoice/:CustomerName').get(flightCont.getInvoices);

module.exports=router;