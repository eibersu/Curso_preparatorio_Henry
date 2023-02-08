function mayorYMenorPar(num) {
    if(num > 5 && num < 10 && num % 2 === 0) console.log(true); //numero mayor a 5 y menor a 10 y sea par
    else console.log(false);
}

//mayorYMenorPar(6);

//mayorYMenorPar(8);

function operadorOr(stryn) {
    if(stryn === 'Pablo' || stryn.length < 2) console.log(true);
    else console.log(false);
}

//operadorOr('W');

//negacion

function neg(permis) {
    if(permis) console.log('Tiene permiso');
}

//neg(true);
//neg(true);

function neg(permis) {
    if(permis === true) console.log('Tiene permiso');
}

//neg(true);

function neg(permis) {
    if(permis !== true) console.log('Tiene permiso');
}

//neg(false);

function condicionCompleja(num) {
    if (num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
};

condicionCompleja(10);
condicionCompleja(15);
condicionCompleja(3);
condicionCompleja(12);

//AND
function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7);
mayorYMenorYPar(8); 

// OR
function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
 }
 operadorOr('Henry');
 operadorOr('Javascript');
 operadorOr('H');

 // NOT
function negacion(permiso) {
    if (permiso) console.log('Tiene permiso');
 }
 negacion(true);
 negacion(false);
