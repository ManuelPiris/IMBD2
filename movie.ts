import {Professional} from "./bbdd";

export class Movie {
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nationality:string;
    public director:string;
    public writer:string;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainChararcterName :string;
    public producer:string;
    public distributor:string;
    public genre:string;

        constructor(title:string,releaseYear:number,nationality:string,genre:string){
            this.title = title;
            this.releaseYear = releaseYear;
            this.nationality = nationality;
            this.genre = genre;
        }

            //MÉTODOS.

            public printMovie(){
                let temp = "";
                for (let actor in this.actors){
                    temp += this.actors[actor].printAll() + ' , ';
                }
                return `"\n"
                        Title : ${this.title} "\n"
                        ReleaseYear : ${this.releaseYear} "\n"
                        Actors : ${temp} "\n"
                        Nationality : ${this.nationality} "\n"
                        Director : ${this.director} "\n"
                        Writer : ${this.writer} "\n"
                        Language : ${this.language} "\n"
                        Plataform : ${this.plataform} "\n"
                        isMCU : ${this.isMCU} "\n"
                        Main Character Name : ${this.nationality} "\n"
                        Distributor : ${this.distributor} "\n"
                        Genre : ${this.genre} "\n" `
                }
}