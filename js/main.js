/* 1. NAME FROM THE USER */
var whatsName = prompt('Qual\'è il tuo nome?');
console.log(whatsName);

/* 2.SURNAME FROM THE USER */
var whatsSurname = prompt('Qual\'è il tuo cognome?');
console.log(whatsSurname);

/* 3.FAVOURITE COLOR FROM THE USER */
var whatsColor = prompt('Qual\'è il tuo colore preferito')
console.log(whatsColor);

/* 4. PRINT RESULTS IN HTML */
document.getElementById('name').innerHTML = whatsName + whatsSurname + whatsColor + 20;
