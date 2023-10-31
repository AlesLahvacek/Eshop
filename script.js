import polozka from './polozka.json' assert { type: 'json' };
console.log("polozka"+1);
let pocitani = 1;
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

console.log(iCena);

document.addEventListener("funguj","click", razeni());

function razeni() {
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
    });
}



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

