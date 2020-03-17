require('dotenv').config();
const mongoose = require('mongoose');
const Ship = require('../../models/Ship');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const ships = [
    {
        name: "",
        code: ""
    }
];
  
Ship.create(ships, (err) => {
    if(err){ throw(err) }
    console.log(`Created ${ships.length} ships`)
    mongoose.connection.close();
});