const mongoose = require('mongoose');
const Market = require('../../models/Market');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const markets = [
    {
        name: "Australia",
        code: "AUS"
    },
    {
        name: "Germany",
        code: "DEU"
    },
    {
        name: "United Kingdom",
        code: "GBR"
    },
    {
        name: "Spain",
        code: "ESP"
    },
    {
        name: "Ireland",
        code: "IRL"
    },
    {
        name: "Italy",
        code: "ITA"
    },
    {
        name: "Lacar",
        code: "LAC"
    },
    {
        name: "Mexico",
        code: "MEX"
    },
    {
        name: "Norway",
        code: "NOR"
    },
    {
        name: "Singapore",
        code: "SGP"
    },
    {
        name: "Sweden",
        code: "SWE"
    },
    {
        name: "AMEA",
        code: "AMEA"
    },
    {
        name: "APAC",
        code: 'APAC'
    }
];
  
Market.create(markets, (err) => {
    if(err){ throw(err) }
    console.log(`Created ${markets.length} markets`)
    mongoose.connection.close();
});

