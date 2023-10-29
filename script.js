import polozka from './polozka.json' assert { type: 'json' };
console.log("polozka"+1);
let pocitani = 1;

Object.keys(polozka["polozky"]).forEach(function(key) {
    console.log(polozka["polozky"][key].jmeno);
    let pokus = "polozka"+pocitani;
    const znaceni = document.getElementById(pokus);
    znaceni.innerText = (polozka["polozky"][key].jmeno);
    pocitani++;
});



let produkty = document.querySelector(".sell");
let cena = document.querySelector(".cena");
let cena2;

console.log(polozka.ananas.cena);

let cislo = +prompt();
//cena2 = 50 + cislo;


// for (let i = 0; i < 12; i++) {
//     cena2 = new cena2[cena.innerHTML];
// }

console.log(produkty);
 console.log(cena);
 console.log(cena2);
 let value = cena[0];
 for (let i = 0; i < cena.length; i++) {
    
     if (value < parseInt(cena)) {
         value = cena[i];
     } else{
         let smol = value;
         console.log(smol);
     }
    
 }

