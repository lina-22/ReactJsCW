//classe js

// vehicule

export class Vehicule{
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
}