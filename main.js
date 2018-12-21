const status = document.querySelector('.status');
const hands = document.querySelectorAll('.hands img');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const grajBtn = document.querySelector('#grajBtn');
const info = document.querySelector('.info');


const stawka = document.querySelector('.stawka');
let saldo = document.querySelector('#saldo');

let aktualneSaldo = parseInt(saldo.textContent,10);

img1.addEventListener('click', wyborHands);
img2.addEventListener('click', wyborHands);
img3.addEventListener('click', wyborHands);
// Wylaczenie opcji button
grajBtn.disabled = true;
grajBtn.style.opacity = 0.2;

wybor = 0;
// Wybor lapki
function wyborHands(e) {
if (e.target == img1) { 
    e.target.classList.toggle('choose');
    img2.classList.remove('choose');
    img3.classList.remove('choose');
    wybor = 1;
} else if (e.target == img2) { 
    img1.classList.remove('choose');
    img3.classList.remove('choose');
    e.target.classList.toggle('choose');
    wybor = 2;
} else if (e.target == img3) { 
    e.target.classList.toggle('choose');
    img1.classList.remove('choose');
    img2.classList.remove('choose');
    wybor = 3;
}


// opcja z wylaczeniem button i wlaczeniem
if ((img1.classList == 'choose' || img2.classList == 'choose' || img3.classList == 'choose') ) 
{
    grajBtn.disabled = false;
    grajBtn.style.opacity = 1;
} else {
    grajBtn.disabled = true;
grajBtn.style.opacity = 0.2;
}


} 

// Button graj i licznik wygranych

const wynikGracza = document.querySelector('.wynikGracza');
const wynikKomputera = document.querySelector('.wynikKomputera');

grajBtn.addEventListener('click', ruchKomputera);



punktyGracza = 0;
punktyKomputera = 0;


// BUTTON 

function ruchKomputera() {

    var ranLiczba = Math.floor((Math.random() * 3) + 1);
    

    const div = document.createElement('div');
    div.innerHTML = '<img src="img/kamien.png" id="img1">'
    

    if(ranLiczba == wybor) {
        
        status.textContent = 'Remis komuter wylosował'
        // status.innerHTML = '<img src="img/kamien.png" id="img1">'

    }

    if (ranLiczba == 1 && wybor == 2) {
        status.textContent = 'Przegrałeś / komputer wybrał kamień';
        punktyKomputera++;
    }

    if (ranLiczba == 1 && wybor == 3) {
        status.textContent = 'Wygrałeś / komputer wybrał kamień';
        punktyGracza++;
    }

    if (ranLiczba == 2 && wybor == 1) {
        status.textContent = 'Wygrałeś / komputer wybrał Nozyce';
        punktyGracza++;
    }

    if (ranLiczba == 2 && wybor == 3) {
        status.textContent = 'Przegrałeś / komputer wybrał Nozyce'
        punktyKomputera++;
    }

    if (ranLiczba == 3 && wybor == 1) {
        status.textContent = 'Przegrałeś / komputer wybrał papier'
        punktyKomputera++;
    }

    if (ranLiczba == 3 && wybor == 2) {
        status.textContent = 'Wygrałeś / komputer wybrał papier'
        punktyGracza++;
    }
    // Wpisanie wyników to tabeli 
wynikGracza.textContent = `Gracz: ${punktyGracza}`;
wynikKomputera.textContent = `Komputer: ${punktyKomputera}`;

// Sprawdzanie czy nie ma wyniku 3:0


if((punktyGracza - punktyKomputera) >= 3){
    info.textContent = `Wygrywasz o ${punktyGracza - punktyKomputera} punkty !`
    info.style.color = 'green';
} else if((punktyKomputera - punktyGracza) >= 3){
    info.textContent = `Przegrywasz o ${punktyKomputera - punktyGracza} punkty !`
    info.style.color = 'red';
} else {
    info.textContent = "";
    info.style.color = 'black';
}



if(stawka.classList.contains('displayBlock')) {    
    if(status.textContent.indexOf('Wygrałeś') != -1 ) {
        
        aktualneSaldo = aktualneSaldo + parseInt(stawka.value, 10);
        saldo.textContent = aktualneSaldo;
    } else if (status.textContent.indexOf('Przegrałeś') != -1 ) { 
        
        aktualneSaldo = aktualneSaldo - parseInt(stawka.value, 10);
        saldo.textContent = aktualneSaldo;
    } 
}
}


// GRA O PIENIADZE 

const checkBox = document.querySelector('.checkBox1');

checkBox.addEventListener('change', moneyGame)


function moneyGame() {

    stawka.classList.toggle('displayBlock');
    stawka.value = 1000;
}

