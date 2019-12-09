var iDadoAtk;
var iDadoDef;

var uno = {
    atk: 10,
    def: 5,
    life: 50
}
var dos = {
    atk: 10,
    def: 5,
    life: 50
}

function randomA() {
    iDadoAtk = Math.floor(Math.random() * (6 - 1)) + 1;
    return iDadoAtk;
}

function randomD() {
    iDadoDef = Math.floor(Math.random() * (11 - 1)) + 1;
    return iDadoDef;
}

/*nota  para jugar
tu no puedes ver tu defensa pero si tu atk
y no puedes ver el atk del cpu pero si la defensa
*/

let turno = 1;
let ronda = 1;
while (uno.life >= 0 && dos.life >= 0) {

    uno.atk = uno.atk + randomA();
    uno.def = uno.def + randomD();
    dos.atk = dos.atk + randomA();
    dos.def = dos.def + randomD();

    if (turno == 1) {
        if (uno.atk > dos.def) {
            var x = uno.atk - dos.def;
            //    console.log(x);
            dos.life = dos.life - x;
            //    console.log(dos.life);
        } else {
            var x = dos.atk - uno.def;
            var isNegative = Math.sign(x);
            if (isNegative == 1) {
                uno.life = uno.life - x;
            } else {
                x *= -1;
                uno.life = uno.life - x;
            }
        }
        turno = 2;
    } else {
        // uno.life = uno.life - dos.atk;
        if (dos.atk > uno.def) {
            var x = dos.atk - uno.def;
            uno.life = uno.life - x;
        } else {
            var x = uno.atk - dos.def;
            var isNegative = Math.sign(x);
            if (isNegative == 1) {
                dos.life = dos.life - x;
            } else {
                x *= -1;
                dos.life = dos.life - x;
            }
        }
        turno = 1;
    }


    console.log(uno)
    console.log(dos)
    console.log("------------ FIN " + ronda + " --------");
    ronda++;
    // break;

    if (uno.life >= 0 && dos.life >= 0) {
        continue;
    } else if (uno.life >= 0) {
        var x = "EL ganador es UNO con: " + uno.life;
        $("#resultado").html(x);
    } else {
        var x = "EL ganador es DOS con: " + dos.life;
        $("#resultado").html(x);
    }
}