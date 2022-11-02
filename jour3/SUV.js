
export default class SUV extends Vehicule{
    constructor(id, marque, couleur, puissance){
        super(id, marque, couleur)
        this.puissance = puissance;
    }
    getPuissance(){
        return this.puissance;
    }

    // redefination de la method du parents

    toString(){
        let res = super.toString();
        return res+" puissance"+this.puissance;
    }
}