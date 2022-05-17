"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    //MÉTODOS.
    Movie.prototype.printMovie = function () {
        var temp = "";
        for (var actor in this.actors) {
            temp += this.actors[actor].printAll() + ' , ';
        }
        return "\"\n\"\n                        Title : ".concat(this.title, " \"\n\"\n                        ReleaseYear : ").concat(this.releaseYear, " \"\n\"\n                        Actors : ").concat(temp, " \"\n\"\n                        Nationality : ").concat(this.nationality, " \"\n\"\n                        Director : ").concat(this.director, " \"\n\"\n                        Writer : ").concat(this.writer, " \"\n\"\n                        Language : ").concat(this.language, " \"\n\"\n                        Plataform : ").concat(this.plataform, " \"\n\"\n                        isMCU : ").concat(this.isMCU, " \"\n\"\n                        Main Character Name : ").concat(this.nationality, " \"\n\"\n                        Distributor : ").concat(this.distributor, " \"\n\"\n                        Genre : ").concat(this.genre, " \"\n\" ");
    };
    return Movie;
}());
exports.Movie = Movie;
