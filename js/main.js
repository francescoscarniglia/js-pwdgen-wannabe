/* 1. NAME FROM THE USER */
var whatsName = prompt('what is your name?');
console.log(whatsName);

/* 2.SURNAME FROM THE USER */
var whatsSurname = prompt('what is your surname?');
console.log(whatsSurname);

/* 3.FAVOURITE COLOR FROM THE USER */
var whatsColor = prompt('what is your favourite color?')
console.log(whatsColor);

/* 4. PRINT RESULTS IN HTML */
document.getElementById('name').innerHTML = whatsName + whatsSurname + whatsColor + 20;
