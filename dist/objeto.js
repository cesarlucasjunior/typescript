"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();
var falcon = new starfighters_1.Millenium();
falcon.jumpIntoHyperSpace();
var goodForTheJob = function (ship) { return ship.cargoContainer > 2; };
console.log("Is the ship good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
