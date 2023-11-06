import polozka from './polozka.json' assert { type: 'json' };
console.log("polozka"+1);
let pocitani = 1;
let sestupne = true;

const att = document.createAttribute("src");
let iCena = new Array(12);

Object.keys(polozka["polozky"]).forEach(function(key) {
    console.log(polozka["polozky"][key].jmeno);
    let i = "polozka"+pocitani;
    let x = "cena"+pocitani;
    document.getElementsByTagName("img")[pocitani-1].setAttribute("src", polozka["polozky"][key].img);
    const znaceni = document.getElementById(i);
    const urceniCeny = document.getElementById(x);
    znaceni.innerText = polozka["polozky"][key].jmeno;
    urceniCeny.innerText = polozka["polozky"][key].cena+" Kč";

 

    pocitani++;
    
    iCena = [polozka["polozky"][key].cena];
    
});

let tlacitko = document.getElementById("tlacitko");

tlacitko.addEventListener("click", function() {
    let polePolozek = Array.from(document.getElementsByClassName("sell"));
    polePolozek.sort(function(a, b) {
        let cenaA = parseInt(a.getElementsByClassName("cena")[0].innerText);
        let cenaB = parseInt(b.getElementsByClassName("cena")[0].innerText);
        return sestupne ? cenaB - cenaA : cenaA - cenaB;
    });
    let kontejner = document.getElementById("kontejner");
    polePolozek.forEach(function(sell) {
        kontejner.appendChild(sell);
    });
    sestupne = !sestupne;
});






console.log(iCena);






//let cislo = +prompt();
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

