var iDadoAtk;
var iDadoDef;

var uno = {
    atk: 10,
    def: 5,
    life: 100
}
var dos = {
    atk: 10,
    def: 5,
    life: 100
}

function randomA() {
    iDadoAtk = Math.floor(Math.random() * (6 - 1)) + 1;
    return iDadoAtk;
}

function randomD() {
    iDadoDef = Math.floor(Math.random() * (11 - 5)) + 5;
    return iDadoDef;
}

// randomAD()[0] - atk
// randomAD()[1] -def
function increaseAUNO() {
    uno.atk = uno.atk + randomA();
    return uno.atk;
}
function increaseADOS() {
    dos.atk = dos.atk + randomA();
    return dos.atk;
}

function increaseD() {
    dos.def = dos.def + randomD();
    return dos.def;
}

if ( increaseAUNO() >  increaseD()) {
    console.log("MAYOR", increaseAUNO());
    dos.life = dos.life - increaseAUNO();
} else {
    console.log("MENOR", increaseAUNO());
    uno.life = uno.life - increaseADOS();
}
console.log(uno)
console.log(dos)
console.log("------------FIN 1 ------------")

dos.atk = dos.atk + randomA();
uno.def = uno.def + randomD();
if (dos.atk > uno.def) {
    console.log("MAYOR", dos.atk);
    uno.life = uno.life - dos.atk;
} else {
    console.log("MENOR", dos.atk);
    dos.life = dos.life - uno.atk;
}

console.log(uno)
console.log(dos)
console.log("------------FIN 2 ------------")

uno.atk = uno.atk + randomA();
dos.def = dos.def + randomD();

if (uno.atk > dos.def) {
    console.log("MAYOR", uno.atk);
    dos.life = dos.life - uno.atk;
} else {
    console.log("MENOR", uno.atk);
    uno.life = uno.life - dos.atk;
}
console.log(uno)
console.log(dos)
console.log("------------FIN 3 ------------")