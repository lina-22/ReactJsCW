//classe js

// vehicule
import {Vehicule} from "./Vehicule.js";
//import SUV from "./SUV.js";
//import obj from "./utils.js";
/*class Vehicule{
    //attribut /variables d'instance
    // fonction qui est executé pour initialiser les variables d'instance
    // invoquée avec le mot clé new
    constructor(id, marque, couleur){
        this.id = id;
        this.marque = marque;
        this.couleur = couleur;
        Vehicule.nbInstance++
    }

    avancer(){
        console.log("dans la method");
    }

    freiner(){
        console.log("dans xxxxx freiner")
    }

    toString(){
        return `id: ${this.id}
        marque: ${this.marque}
        couleur: ${this.couleur}`;
    }
}*/

Vehicule.nbInstance = 0
let v1 = new Vehicule(1, "audi", "rouge")
console.log("après v1:" + Vehicule.nbInstance)
let v2 = new Vehicule(2, "peugeot", "noir")
console.log("après v2:" + Vehicule.nbInstance)
console.log("v1 " + v1.toString());
console.log("v2 " + v2.toString());

// let monToString = v1.toString
/*let monToString = function () {
    return `id: ${this.id}, 
                marque: ${this.marque} 
                couleur: ${this.couleur}`
}*/
//notation litérale
let obj = {
    id: 1000,
    marque: "toto",
    couleur: "bleu",
}
let add = function (a, b) {
    return a + b
}


console.log(monToString());
console.log("obj " + monToString.apply(obj));
console.log("v1 " + monToString.call(v1));
console.log("window" + monToString.call(window));
monToString = monToString.bind(obj);
console.log("obj " + monToString());

//héritage
class SUV extends Vehicule {
    constructor(id, marque, couleur, puissance) {
        super(id, marque, couleur)
        this.puissance = puissance
        this.avancer()
    }
    getPuissance() {
        return this.puissance;
    }
    //redefinition de la methode du parent
    toString() {
        let res = super.toString()
        return res + "  puissance " + this.puissance
    }
}

let suv1 = new SUV(1000, "audi", "vert", "150")
console.log("suv1" + suv1.toString());
