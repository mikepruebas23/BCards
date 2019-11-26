var iDadoAtk;
var iDadoDef;
var turno = 1;
var ronda;

var uno = {
    atk: 7,
    def: 5,
    life: 10
}
var dos = {
    atk: 7,
    def: 5,
    life: 10
}

function rrandom() {
    ronda = Math.floor(Math.random() * (3 - 1)) + 1;
    return ronda;
}
$(document).ready(function () {

    $("#atk-r").html("ATK: "+ uno.atk);
    $("#def-r").html("DEF: " + uno.def);
    $("#life-r").html("LIFE: " + uno.life);

    $("#atk-j").html("ATK: " + uno.atk);
    $("#def-j").html("DEF: " + uno.def);
    $("#life-j").html("LIFE: " + uno.life);

    $("#uno").attr("disabled", true);
    $("#dos").attr("disabled", true);
    $("#turno").click(function () {

        var x = rrandom();
        (x == 1) ? $("#uno").attr("disabled", false): $("#dos").attr("disabled", false);
        $("#turno").attr("disabled", true)
    });
});

function randomA() {
    iDadoAtk = Math.floor(Math.random() * (6 - 1)) + 1;
    return iDadoAtk;
}

function randomD() {
    iDadoDef = Math.floor(Math.random() * (6 - 1)) + 1;
    return iDadoDef;
}

$("#resultado").html("Turno número: " + turno);
$("#uno").click(function () {
    if (uno.life && dos.life > 0) {

        $("#uno").attr("disabled", true);
        $("#dos").attr("disabled", false);

        uno.atk = uno.atk + randomA();
        dos.def = dos.def + randomD();
        $("#atk-r").html("ATK: "+ uno.atk);
        $("#def-j").html("DEF: " + dos.def);

        if (uno.atk > dos.def) {
            var x = uno.atk - dos.def;
            dos.life = dos.life - x;
            $("#life-j").html("LIFE: " + dos.life);
            if (dos.life <= 0) {
                isAlive();
            }
        } else {
            var x = dos.atk - uno.def;
            var isNegative = Math.sign(x);
            if (isNegative == 1) {
                uno.life = uno.life - x;
                $("#life-r").html("LIFE: " + uno.life);
        
            } else {
                x *= -1;
                uno.life = uno.life - x;
                $("#life-r").html("LIFE: " + uno.life);
                if (uno.life <= 0) {
                    isAlive();
                }
            }
            if (uno.life <= 0) {
                isAlive();
            }
        }

    } else {
        isAlive();
    }

    turno++;
    $("#resultado").html("Turno número: " + turno);
});
$("#dos").click(function () {

    if (uno.life && dos.life > 0) {

        $("#dos").attr("disabled", true);
        $("#uno").attr("disabled", false);

        dos.atk = dos.atk + randomA();
        uno.def = uno.def + randomD();
        $("#def-r").html("DEF: " + uno.def);
        $("#atk-j").html("ATK: " + dos.atk);

        if (dos.atk > uno.def) {
            var x = dos.atk - uno.def;
            uno.life = uno.life - x;
            $("#life-r").html("LIFE: " + uno.life);

            if (uno.life <= 0) {
                isAlive();
            }
        } else {
            var x = uno.atk - dos.def;
            var isNegative = Math.sign(x);
            if (isNegative == 1) {
                dos.life = dos.life - x;
                $("#life-j").html("LIFE: " + dos.life);
            } else {
                x *= -1;
                dos.life = dos.life - x;
                $("#life-j").html("LIFE: " + dos.life);
                if (dos.life <= 0) {
                    isAlive();
                }
            }
            if (dos.life <= 0) {
                isAlive();
            }
        }

    } else {
        isAlive();
    }

    turno++;
    $("#resultado").html("Turno número: " + turno);
});

function isAlive() {
    if (uno.life <= 0) {
        $("#ganador").html("Ganador: JUGADOR");
        $("#uno").attr("disabled", true);
        $("#dos").attr("disabled", true);
        return;
    } else if (dos.life <= 0) {
        $("#ganador").html("Ganador: CPU");
        $("#dos").attr("disabled", true);
        $("#uno").attr("disabled", true);
        return;
    }
}