
// const fs = require('fs');
// // const colors = require('colors');
// const db = require('./config/db.js');


// // Load ENV variables
// // dotenv.config({path: './config/config.env'});

// // Load Models
// const Seat_reservation = require('./models/Seat_reservation.js');

// // Connect to Mongo Database
// db().then();

// // Read The JSON files
// const Seat_reservations = JSON.parse(fs.readFileSync(`${__dirname}/seedData/Seat_reservation.json`, 'utf-8'));
// // Import Sample Data In DB
// const importData = async () => {
//     try {
//         await Seat_reservation.create(Seat_reservations);
//         console.log(`Data successfully imported`);
//         process.exit();
//     } catch (err) {
//         console.log(err);
//     }
// }

// importData();










const fs = require('fs');
// const colors = require('colors');
const db = require('./config/db.js');


// Load ENV variables
// dotenv.config({path: './config/config.env'});

// Load Models
const Fare = require('./models/Fare.js');

// Connect to Mongo Database
db().then();

// Read The JSON files
const Fares = JSON.parse(fs.readFileSync(`${__dirname}/seedData/fare.json`, 'utf-8'));
// Import Sample Data In DB
const importData = async () => {
    try {
        await Fare.create(Fares);
        console.log(`Data successfully imported`);
        process.exit();
    } catch (err) {
        console.log(err);
    }
}

importData();