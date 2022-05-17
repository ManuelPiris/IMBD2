"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require('fs');
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    //METODOS
    Imdb.prototype.escribirFicheroJSON = function (archivo) {
        var variable = JSON.stringify(this);
        return fs.writeFileSync(archivo, variable);
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (archivo) {
        var obj = new Imdb([]);
        obj.peliculas = JSON.parse(fs.readFileSync(archivo)).peliculas;
        return obj;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
