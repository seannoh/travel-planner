const Location = require('./Location');
const Traveller = require('./Traveller');
const Trips = require('./Trips');

Location.belongsToMany(Traveller, { through: Trips, unique: false});
Traveller.belongsToMany(Location, {through: Trips, unique: false});

module.exports = {Location, Traveller, Trips};