import { Movie } from "./movie";
var fs = require('fs')

export class Imdb{

    public peliculas:Movie[];
    
    public constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
  
     //METODOS
      
        public escribirFicheroJSON(archivo:string):JSON{
            let variable = JSON.stringify(this)
            return fs.writeFileSync(archivo, variable);
        }
        public obtenerInstanciaIMDB(archivo:string):Imdb{
            let obj:Imdb = new Imdb([]);
            obj.peliculas = JSON.parse(fs.readFileSync(archivo)).peliculas
            return obj;
        }      
}
