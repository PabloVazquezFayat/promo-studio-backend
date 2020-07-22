require('dotenv').config();
const mongoose = require('mongoose');
const Ship = require('../../models/Ship');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const ships = [
    {
        name: "Adventure of the Seas",
        code: "AD"
    },
    {
        name: "Allure of the Seas",
        code: "AL"
    },
    {
        name: "Anthem of the Seas",
        code: "AN"
    },
    {
        name: "Brilliance of the Seas",
        code: "BR"
    },
    {
        name: "Enchantment of the Seas",
        code: "EN"
    },
    {
        name: "Explorer of the Seas",
        code: "EX"
    },
    {
        name: "Freedom of the Seas",
        code: "FR"
    },
    {
        name: "Grandeur of the Seas",
        code: "GR"
    },
    {
        name: "Harmony of the Seas",
        code: "HM"
    },
    {
        name: "Independence of the Seas",
        code: "ID"
    },
    {
        name: "Jewel of the Seas",
        code: "JW"
    },
    {
        name: "Liberty of the Seas",
        code: "LB"
    },
    {
        name: "Mariner of the Seas",
        code: "MA"
    },
    {
        name: "Majesty of the Seas",
        code: "MJ"
    },
    {
        name: "Empress of the Seas",
        code: "NE"
    },
    {
        name: "Navigator of the Seas",
        code: "NV"
    },
    {
        name: "Oasis of the Seas",
        code: "OA"
    },
    {
        name: "Ovation of the Seas",
        code: "OV"
    },
    {
        name: "Odyssey of the Seas",
        code: "OY"
    },
    {
        name: "Quantum of the Seas",
        code: "QN"
    },
    {
        name: "Radiance of the Seas",
        code: "RD"
    },
    {
        name: "Rhapsody of the Seas",
        code: "RH"
    },
    {
        name: "Serenade of the Seas",
        code: "SR"
    },
    {
        name: "Spectrum of the Seas",
        code: "SC"
    },
    {
        name: "Symphony of the Seas",
        code: "SY"
    },
    {
        name: "Vision of the Seas",
        code: "VI"
    },
    {
        name: "Voyager of the Seas",
        code: "VY"
    },
    {
        name: "Wonder of the Seas",
        code: "WN"
    },
];
  
Ship.create(ships, (err) => {
    if(err){ throw(err) }
    console.log(`Created ${ships.length} ships`)
    mongoose.connection.close();
});