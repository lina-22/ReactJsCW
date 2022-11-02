// créer un tableau de nombre

let t =[2,3,5,56];

function carre(element){
   return element*element 
}
let t2 = t.map(carre);

function map(t, funcCallback){
    let tabResultat = [];
    for (let index = 0; index<t.length; index++){
        const element = t[index];
        tabResultat.push(funcCallback(element, index))
    }
    return tabResultat;
}

let t6 = map(t ,carre);


// let t3 = t.map(carre()) iil faut passer la 
 console.log("la valeur de")
console.log(t2);
//  console.log("la valeur de t3")
// console.log(t3);

// filter
// return un nouveau tableau avec des nombre peir
let t4 = t.filter(function (element){
    return element % 2 === 0;
})

console.log("t" +t);
console.log("t4" +t4);

//reduce

// additioner tous les nombre d'un tableau

let t5 = t.reduce(function(preValue, currValue){
   
    return preValue + currValue
}, 0)

console.log("t5 " + t5);

function formatterNom(nom, prenom){
    return nom+" "+prenom;
}

let formatterNomV2 = (nom, prenom)=>{
    return nom+" "+prenom;
}

let formatterNomV3 = (nom, prenom)=>{
    return nom+" "+prenom;
}

function validerNom(nom){
    nom = nom.trim();
    if (nom.length==1){
        return true
    }
    return false;
}
let validerNomV2 = (nom)=>{
    nom = nom.trim();
    if (nom.length==1){
        return true
    }
    return false;
}

function getSautLigneHTML(){
    return "<br>"
}
function getSautLigneHTML(){
    return "hello"
}
let getSautLigneHTMLV2=()=>"<br>";