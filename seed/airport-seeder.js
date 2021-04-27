const Airport = require('../models/Airport');
const mongoose = require('mongoose');
const { exists } = require('../models/Airport');

mongoose.connect('mongodb://localhost:27017/customer', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const airports = [

     new Airport({
      airport_code: 'SFO',
      name: 'San-Francisco-International',
      city: 'San-Francisco',
      state: 'CA'
}),
    new Airport({
      airport_code: 'SFO',
      name: 'San-Francisco-International',
      city: 'San-Francisco',
      state: 'Cps'
})
];
let done =0;
for(let i =0; i<airports.length; i++){
    airports[i].save(function(err, result){
        done++;
        if(done === airports.length){
            mongoose.disconnect();
        }

    });
}



