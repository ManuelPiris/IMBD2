"use strict";
exports.__esModule = true;
var bbdd_1 = require("./bbdd");
var movie_1 = require("./movie");
var imdb_1 = require("./imdb");
var person = new bbdd_1.Professional("Leonardo", 45, "hombre", 70, 175, "rubio", "verde", "britanico", false, "britanico", 1, "actor");
var person1 = new bbdd_1.Professional("Penelope", 50, "mujer", 56, 175, "morena", "marrones", "española", false, "española", 4, "actriz");
var person2 = new bbdd_1.Professional("Juan", 25, "hombre", 70, 190, "rubio", "verde", "español", false, "español", 0, "actor");
var arrayActor1 = [person, person1, person2];
console.log(arrayActor1);
var pelicula1 = new movie_1.Movie("Star Wars", 1988, "Usa", "Ficción");
pelicula1.actors = arrayActor1;
pelicula1.director = "George Lucas";
pelicula1.writer = "George Lucas";
pelicula1.language = "Ingles";
pelicula1.plataform = "cine";
pelicula1.isMCU = false;
pelicula1.mainChararcterName = "Ingles";
pelicula1.producer = "George Lucas";
pelicula1.distributor = "LucasFilm";
var pelicula2 = new movie_1.Movie("Los Vengadores", 1997, "Usa", "Ficción");
pelicula2.actors = arrayActor1;
pelicula2.director = "Joe Ruso";
pelicula2.writer = "Joe Ruso";
pelicula2.language = "Ingles";
pelicula2.plataform = "cine";
pelicula2.isMCU = true;
pelicula2.mainChararcterName = "Ingles";
pelicula2.producer = "Marvel";
pelicula2.distributor = "Universo Marvel";
var peliculas = [pelicula1, pelicula2];
var imdb = new imdb_1.Imdb(peliculas);
console.log(imdb);
imdb.escribirFicheroJSON("imdbBBDD.json");
console.log(imdb.obtenerInstanciaIMDB("imdbBBDD.json"));
// A PARTIR DE AQUI NO ME CUADRA
// let fs = require('fs');
// fs.writeFileSync("imdbBBDD.json",JSON.stringify(imdb));
// let datos = fs.readFilesync("imdbBBDD.json",'utf8');
// let datosImdb = JSON.parse(datos);
// let actor:Professional;
// let movie:Movie;
// let Imdb2:Imdb;
// let arrayActor = [];
// let arrayPeliculas = [];
//    for (let value in datosImdb.peliculas){
//        for ( let index in datosImdb.peliculas[value].actors){
//            let temporal = datosImdb.peliculas[value].actors[index];
//            actor = new Professional (temporal.name,temporal.age,temporal.genre,temporal.weight,temporal.height,temporal.hairColor,
//                    temporal.eyeColor,temporal.race,temporal.isRetired,temporal.nacionality,temporal.oscarsNumber,temporal.proffesion);
//                    arrayActor.push(actor);
//        }
//        movie = new Movie(datosImdb.peliculas[value].title,datosImdb.peliculas[value].releaseYear,datosImdb.peliculas[value].nationality,datosImdb.peliculas[value].genre);
//        movie.actors = arrayActor;
//        movie.director = datosImdb.peliculas[value].director;
//        movie.writer = datosImdb.peliculas[value].writer;
//        movie.language = datosImdb.peliculas[value].language;
//        movie.plataform = datosImdb.peliculas[value].plataform;
//        movie.isMCU = datosImdb.peliculas[value].isMCU;
//        movie.mainChararcterName = datosImdb.peliculas[value].mainChararcterName;
//        movie.producer = datosImdb.peliculas[value].producer;
//        movie.distributor = datosImdb.peliculas[value].distributor;
//        arrayPeliculas.push(movie);
//    }
//    Imdb2 = new Imdb(arrayPeliculas);
//    console.log("");
//    console.log(Imdb2);
