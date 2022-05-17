import { Professional } from "./bbdd";

let person = new Professional("Leonardo", 45, "hombre", 70, 175, "rubio", "verde", "britanico", false, "britanico", 1, "actor")
let person1 = new Professional("Penelope", 50, "mujer", 56, 175, "morena", "marrones", "española", false, "española", 4, "actriz")
let person2 = new Professional("Juan", 25, "hombre", 70, 190, "rubio", "verde", "español", false, "español", 0, "actor")
let person3 = new Professional("Sofia", 55, "mujer", 56, 180, "morena", "marrones", "mexicana", false, "mexicana", 0, "actriz")


console.log(person.printAll());
console.log(person1.printAll());
console.log(person2.printAll());
console.log(person3.printAll());
