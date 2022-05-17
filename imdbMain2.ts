import {Professional} from "./bbdd";
import {Movie} from "./movie";
import {Imdb} from "./imdb";

let persona = new Professional ("Leonardo", 45, "hombre", 70, 175, "rubio", "verde", "britanico", false, "britanico", 1, "actor");

let x = require('readline-sync')


let title:string = x.question ("Titulo Pelicula: ");
let releaseYear:number = x.question  ("Año Estreno: ");                      
let actors:Professional[] = [persona];          
let nationality:string = x.question  ("Nacionalidad: ");       
let director:string = x.question  ("Director: ");       
let writer:string =x.question  ("Escritor: ");       
let language:string = x.question  ("Idioma: ");       
let plataform:string = x.question  ("Plataforma: ");       
let isMCU:boolean = x.question  ("¿Es del universo ISMCU?: ");       
let mainChararcterName:string = x.question  ("Personaje Principal: ");    
let producer:string = x.question  ("Productor: ");   
let distributor:string = x.question  ("Distribuidor: ");       
let genre:string = x.question  ("Genero: ");     

let pelicula:Movie = new Movie(title,releaseYear,nationality,genre);
pelicula.actors = actors;
pelicula.director = director;
pelicula.writer = writer;
pelicula.language = language;
pelicula.plataform = plataform;
pelicula.isMCU = isMCU;
pelicula.mainChararcterName = mainChararcterName;
pelicula.producer = producer;
pelicula.distributor = distributor;
pelicula.genre = genre;


let datosImdb:Imdb = new Imdb([]);
datosImdb = datosImdb.obtenerInstanciaIMDB("imdbBBDD.json");
datosImdb.peliculas.push(pelicula);
datosImdb.escribirFicheroJSON("imdbBBDD.json");


