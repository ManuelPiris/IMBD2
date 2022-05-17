"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumbers, proffesion) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumbers = oscarsNumbers;
        this.proffesion = proffesion;
    }
    //MÉTODOS.
    Professional.prototype.printAll = function () {
        return "\"\n\"\n                        Name : ".concat(this.name, " \"\n\"\n                        Age : ").concat(this.age, " \"\n\"\n                        Genre : ").concat(this.genre, " \"\n\"\n                        Weight : ").concat(this.weight, " \"\n\"\n                        Height : ").concat(this.height, " \"\n\"\n                        Hair color : ").concat(this.hairColor, " \"\n\"\n                        Eye color : ").concat(this.eyeColor, " \"\n\"\n                        Race : ").concat(this.race, " \"\n\"\n                        Is retired : ").concat(this.isRetired, " \"\n\"\n                        Nacionality : ").concat(this.nationality, " \"\n\"\n                        Oscars numbers : ").concat(this.oscarsNumbers, " \"\n\"\n                        Proffesion : ").concat(this.proffesion, " \"\n\"");
    };
    return Professional;
}());
exports.Professional = Professional;
