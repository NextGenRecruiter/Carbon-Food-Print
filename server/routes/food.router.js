const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

let beefExample = [
    {
        "id": 5,
        "food_item": "Beef",
        "amount_per_day": "75g",
        "emissions_per_year_kg": 2820,
        "emissions_per_day_kg": "7.7300",
        "driven_miles": 20,
        "heating_days": "1.2",
        "water_liters": 2271,
        "showers": 35,
        "food_type": "Protein",
        "img": "beef-steak-svgrepo-com.svg"
    }
]

router.get('/', (req, res) => {
    res.send(beefExample)
});

module.exports = router;