/* 1. RICEVO IL NOME DALL'UTENTE */
var whatsName = prompt('what is your name?');
console.log(whatsName);

/* 2. RICEVO IL COGNOME DALL'UTENTE */
var whatsSurname = prompt('what is your surname?');
console.log(whatsSurname);

/* 3. RICEVO IL COLORE PREFERITO DALL'UTENTE */
var whatsColor = prompt('what is your favourite color?')
console.log(whatsColor);

/* 4. RIPORTO IN HTML IL RISULTATO */
// document.getElementById('name').innerHTML = whatsName;
document.getElementById('name').innerHTML = whatsName + whatsSurname + whatsColor + 20;
