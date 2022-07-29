const Location = require('./Location');
const Traveller = require('./Traveller');
const Trips = require('./Trips');

Location.belongsToMany(Traveller, { through: Trips});
Traveller.belongsToMany(Location, {through: Trips});

module.exports = {Location, Traveller, Trips};