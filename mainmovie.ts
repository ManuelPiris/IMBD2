import {Movie} from "./movie";
import { Professional } from "./bbdd"

let persona1:Professional  = new Professional("Leonardo", 45, "hombre", 70, 175, "rubio", "verde", "britanico", false, "britanico", 1, "actor");

let persona2:Professional  = new Professional("Penelope", 50, "mujer", 56, 175, "morena", "marrones", "española", false, "española", 4, "actriz");

let persona3:Professional  = new Professional("Juan", 25, "hombre", 70, 190, "rubio", "verde", "español", false, "español", 0, "actor");

let arrayActor:Professional[] = [persona1,persona2,persona3];

let pelicula1:Movie = new Movie("Star Wars",1988,"Usa","Ficción");
pelicula1.actors = arrayActor;
pelicula1.director = "George Lucas";
pelicula1.writer = "George Lucas";
pelicula1.language = "Ingles";
pelicula1.plataform = "cine";
pelicula1.isMCU = false;
pelicula1.mainChararcterName = "Ingles";
pelicula1.producer ="George Lucas";
pelicula1.distributor = "LucasFilm";



console.log(pelicula1.printMovie());
