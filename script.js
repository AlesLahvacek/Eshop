let produkty = document.querySelector(".sell");
let cena = document.querySelector(".cena");
let cena2;


let cislo = +prompt();
//cena2 = 50 + cislo;




const data = JSON.stringify(polozka.json);

console.log((data));






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

