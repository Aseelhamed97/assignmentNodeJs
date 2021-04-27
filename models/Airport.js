const mongoose = require('mongoose')


const AirportSchema = new mongoose.Schema(
    {
        airport_code: {type: String, require: true},
        name: {type: String, require: true},
        city: {type: String, require: true},
        state: {type: String, require: true}
    }, {collection: 'Airport'}
)

// const FlightSchema = new mongoose.Schema(
//     {
//         Flight_number: {type: String, require: true},
//         Airline: {type: String, require: true},
//         Weekdays: {type: String, require: true}
//     }, {collection: 'Flight'}
// )

// const FareSchema = new mongoose.Schema(
//     {
//         Flight_number: {type: String, require: true},
//         Fare_code: {type: String, require: true},
//         Amount: {type: Integer, require: true},
//         Restrictions: {type: String, require: true}
//     }, {collection: 'Fare'}
// )
// const Airplane_typeSchema = new mongoose.Schema(
//     {
//         Airplane_type_name: {type: String, require: true},
//         Max_seats: {type: Integer, require: true},
//         Company: {type: String, require: true}
//     }, {collection: 'Airplane_type'}
// )
// const AirplaneSchema = new mongoose.Schema(
//     {
//         Airplane_id: {type: Integer, require: true},
//         Total_number_of_seats: {type: Integer, require: true},
//         Airplane_type: {type: String, require: true}
//     }, {collection: 'Airplane'}
// )
// const Can_landSchema = new mongoose.Schema(
//     {
//         Airplane_type_name: {type: String, require: true},
//         Airport_code: {type: String, require: true}
//     }, {collection: 'Can_land'}
// )
// const Flight_legSchema = new mongoose.Schema(
//     {
//         Flight_number: {type: String, require: true},
//         Leg_number: {type: Integer, require: true},
//         Departure_airport_code: {type: String, require: true},
//         Scheduled_departure_time: {type: String, require: true},
//         Arrival_airport_code: {type: String, require: true},
//         Scheduled_arrival_time: {type: String, require: true}
//     }, {collection: 'Flight_leg'}
// )

// const Leg_instanceSchema = new mongoose.Schema(
//     {
//         Flight_number: {type: String, require: true},
//         Leg_number: {type: Integer, require: true},
//         Date: {type: Date, require: true},
//         Number_of_available_seats: {type: Integer, require: true},
//         Airplane_id: {type: Integer, require: true},
//         Departure_airport_code: {type: String, require: true},
//         Departure_time: {type: String, require: true},
//         Arrival_airport_code: {type: String, require: true},
//         Arrival_time: {type: String, require: true}
//     }, {collection: 'Leg_instance '}
// )

// const Seat_reservationSchema = new mongoose.Schema(
//     {
//         Flight_number: {type: String, require: true},
//         Leg_number: {type: Integer, require: true},
//         Date: {type: Date, require: true},
//         Seat_number: {type: String, require: true},
//         Customer_name: {type: String, require: true},
//         Customer_phone: {type: String, require: true}
//     }, {collection: 'Seat_reservation'}
// )
module.exports = mongoose.model('Airport', AirportSchema);
// module.exports = mongoose.model('Flight', FlightSchema);
// module.exports = mongoose.model('Fare', FareSchema);
// module.exports = mongoose.model('Airplane_type', Airplane_typeSchema);
// module.exports = mongoose.model('Airplane', AirplaneSchema);
// module.exports = mongoose.model('Can_land', Can_landSchema);
// module.exports = mongoose.model('Flight_leg', Flight_legSchema);
// module.exports = mongoose.model('Leg_instance ', Leg_instanceSchema);
// module.exports = mongoose.model('Seat_reservation', Seat_reservationSchema);