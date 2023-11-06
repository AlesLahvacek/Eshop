// Při načtení stránky zobrazíme položky z LocalStorage
window.onload = function() {
    let kosik = document.getElementById('kosik');
    let ulozenyKosik = JSON.parse(localStorage.getItem('kosik'));
    if (ulozenyKosik) {
        ulozenyKosik.forEach(function(polozka) {
            let novyElement = document.createElement('div');
            novyElement.innerText = polozka;
            kosik.appendChild(novyElement);
        });
    }
}

// Přidáme událost kliknutí na každý <article>
let polozky = document.getElementsByTagName('article');
for (let i = 0; i < polozky.length; i++) {
    polozky[i].addEventListener('click', function() {
        let kosik = localStorage.getItem('kosik');
        if (kosik) {
            kosik = JSON.parse(kosik);
        } else {
            kosik = [];
        }
        kosik.push(this.innerText);
        localStorage.setItem('kosik', JSON.stringify(kosik));
    });
}

// Přidáme událost kliknutí na tlačítko pro vymazání košíku
document.getElementById('vymazat').addEventListener('click', function() {
    localStorage.removeItem('kosik');
    let kosik = document.getElementById('kosik');
    while (kosik.firstChild) {
        kosik.removeChild(kosik.firstChild);
    }
});