"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //Returns the sum of all items using each item's massKg property
    Rocket.prototype.sumMass = function (items) {
        var itemWeight = 0;
        for (var i = 0; i < items.length; i++) {
            itemWeight += items[i].massKg;
        }
        return itemWeight;
    };
    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    };
    //Uses this.canAdd() to see if another item can be added.
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    //Uses this.canAdd() to see if another astronaut can be added
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
