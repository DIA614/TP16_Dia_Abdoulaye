// alert("le fichier fonctionne !");
// Ceci est un commentaire
// console.log("Hello");
// var unTexte ="voici un texte";
// console.log(unTexte);
// unTexte ="Nouveau texte..."; 

// const prenom ="JUSTINE";
// console.log(prenom);

// let unChifre =24;
// unChifre =12;
// console.log(unChifre);

// let chaine ="Je suis l'autre chaine de caractere";
// let nouvelleChaine ="Le chiffre attendu est :" + chiffre +
// "degres";
// let nouvelleChaine =`le chiffre attendu est : ${chiffre} dégrés`;
//  console.log(nouvelleChaine);
 
//  let chaineDeCaractère = "je suis une chaine";
//  let string ="je suis une chaine";
//  let chiffre = 24;
//  let boolean =true;
//  let  array =["je", "suis",24, false];
//  let object={
//   prenom: "audrey",
//   age: 34;
//   ville:"bordeau",   
//  }; 
//   console.log(typeof number);
// let arbre = null;   
// console.log(typeof arbre);
// let arbre;
// console.log(arbre);
// console.log(4+9);
// console.log(4** 5);
//  let total =0;
//  total = total + 1;
// total++;
// total+= 5;
//  console.log(total);
// let x=2;
// let y=5;
// if(x < y){
//     console.log("x est inferieur à y");   
// }  
// if(x===y){
    // console.log("true");
    
// } else{
    // console.log("false");
// } 
// let x= 5;
// let y= "5";
// x === y ? console.log("true !"): console.log("false");



// function faireQuelqueChose (){
    // console.log("je fais un truc!");
    // console.log("trop cool");
// }
// const faireUneTache =(tache)=> {
//  console.log("je fais:"+ tache);     
// };
// faireUneTache("les courses");
// faireUneTache("le menage");

let total =0;
function addition(x , y) {
    // total = x + y ; 
    // return   x + y; 
    // return total;   
}
function soustraction(x){
    total-= x;
    return total;
}
function division (x){
    total /= x;
}
function multiplication(x){
    if(total === 0) {
        return (total = x);
        
    } else {
        total *= x;
        return total;
    }
}
function reset() {
    total =0
}




