import {Professional} from "./bbdd";
import {Movie} from "./movie";
import {Imdb} from "./imdb";

let person = new Professional("Leonardo", 45, "hombre", 70, 175, "rubio", "verde", "britanico", false, "britanico", 1, "actor")
let person1 = new Professional("Penelope", 50, "mujer", 56, 175, "morena", "marrones", "española", false, "española", 4, "actriz")
let person2 = new Professional("Juan", 25, "hombre", 70, 190, "rubio", "verde", "español", false, "español", 0, "actor")

let arrayActor1:Professional[] = [person,person1,person2];
console.log(arrayActor1);

let pelicula1:Movie = new Movie("Star Wars",1988,"Usa","Ficción");
pelicula1.actors = arrayActor1;
pelicula1.director = "George Lucas";
pelicula1.writer = "George Lucas";
pelicula1.language = "Ingles";
pelicula1.plataform = "cine";
pelicula1.isMCU = false;
pelicula1.mainChararcterName = "Ingles";
pelicula1.producer ="George Lucas";
pelicula1.distributor = "LucasFilm";

let pelicula2:Movie = new Movie("Los Vengadores",1997,"Usa","Ficción");
pelicula2.actors = arrayActor1;
pelicula2.director = "Joe Ruso";
pelicula2.writer = "Joe Ruso";
pelicula2.language = "Ingles";
pelicula2.plataform = "cine";
pelicula2.isMCU = true;
pelicula2.mainChararcterName = "Ingles";
pelicula2.producer ="Marvel";
pelicula2.distributor = "Universo Marvel";

let peliculas:Movie[] = [pelicula1,pelicula2];

let imdb:Imdb = new Imdb(peliculas);

console.log(imdb);

imdb.escribirFicheroJSON("imdbBBDD.json");
console.log(imdb.obtenerInstanciaIMDB("imdbBBDD.json"));