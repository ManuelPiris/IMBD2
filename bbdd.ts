
export class Professional {

    public name:string;
    public age:number;
    public genre:string;
    public weight:number;
    public height:number;
    public hairColor:string;
    public eyeColor:string;
    public race:string;
    public isRetired: boolean;
    public nationality:string;
    public oscarsNumbers:number;
    public proffesion:string;

        constructor(name:string,age:number,genre:string,weight:number,height:number,hairColor:string,eyeColor:string,race:string,isRetired: boolean,nationality:string,oscarsNumbers:number,proffesion:string){
            this.name = name;
            this.age = age;
            this.genre = genre;
            this.weight = weight;
            this.height = height;
            this.hairColor = hairColor;
            this.eyeColor= eyeColor;
            this.race = race;
            this.isRetired = isRetired;
            this.nationality = nationality;
            this.oscarsNumbers = oscarsNumbers;
            this.proffesion = proffesion;
        }

        //MÉTODOS.

            public printAll(){
                return `"\n"
                        Name : ${this.name} "\n"
                        Age : ${this.age} "\n"
                        Genre : ${this.genre} "\n"
                        Weight : ${this.weight} "\n"
                        Height : ${this.height} "\n"
                        Hair color : ${this.hairColor} "\n"
                        Eye color : ${this.eyeColor} "\n"
                        Race : ${this.race} "\n"
                        Is retired : ${this.isRetired} "\n"
                        Nacionality : ${this.nationality} "\n"
                        Oscars numbers : ${this.oscarsNumbers} "\n"
                        Proffesion : ${this.proffesion} "\n"`
                        }
}