var iDadoAtk;
var iDadoDef;
var turno = 1;
var ronda;

//maximizadores
let plusAtk;
let plusDef;
let plusLife;

let iSuerte;

var uno = {
    atk: 7,
    def: 5,
    life: 100,
    energia: 0,
    suerte:0
}
var dos = {
    atk: 7,
    def: 5,
    life: 100,
    energia: 0,
    suerte:0
}

$("#plusAtk").click(function () {
    $("#plusAtk").attr("disabled", true);
    // $("#plusAtk").removeClass("btn1");
    $("#plusAtk").addClass("btn-disabled");
    dos.atk = dos.atk + 2;
    $("#atk-j").html(dos.atk);
    console.log(uno);
    console.log(dos);
});
$("#plusDef").click(function () {
    $("#plusDef").attr("disabled", true);
    $("#plusDef").addClass("btn-disabled");
    dos.def = dos.def + 2;
    $("#def-j").html(dos.def);
    console.log(uno);
    console.log(dos);
});
$("#plusLife").click(function () {
    $("#plusLife").attr("disabled", true);
    $("#plusLife").addClass("btn-disabled");
    dos.life = dos.life + 2;
    $("#life-j").html(dos.life);
    console.log(uno);
    console.log(dos);
});

function rrandom() {
    ronda = Math.floor(Math.random() * (3 - 1)) + 1;
    return ronda;
}

function suerteRndm() {
    iSuerte = Math.floor(Math.random() * (101 - 1)) + 1;
    return iSuerte;
}

$(document).ready(function () {

    $("#spinner, #cpu-inicia, #humano-inicia").hide();

    $("#atk-r").html(uno.atk);
    $("#def-r").html(uno.def);
    $("#life-r").html(uno.life);
    $("#ener-r").html( uno.energia);
    $("#suerte-r").html(uno.suerte);

    $("#atk-j").html(dos.atk);
    $("#def-j").html( dos.def);
    $("#life-j").html(dos.life);
    $("#ener-j").html( dos.energia);
    $("#suerte-j").html(dos.suerte);

    $("#uno, #dos").attr("disabled", true);

    $("#turno").click(function () {
        $("#spinner").show();
        $("#turno").attr("disabled", true)
        var x = rrandom();
        switch (x) {
            case 1:
                $("#cpu-inicia").show();
                $("#uno").attr("disabled", false);
                $("#r-turno").html("En Turno");
                $("#r-turno").addClass('enTurno');
                $("#j-turno").html("En Espera");
                $("#j-turno").addClass('sinTurno');
                $("#dos,#j-defender").addClass("btn-disabled");
                break;
            case 2:
                $("#humano-inicia").show();
                $("#dos").attr("disabled", false);
                $("#j-turno").html("En Turno");
                $("#j-turno").addClass('enTurno');
                $("#r-turno").html("En Espera");
                $("#r-turno").addClass('sinTurno');
                break;
        }

        setTimeout(function () {
            // (x == 1) ? cpuATK(): $("#dos").attr("disabled", false);
            $("#spinner,#seleccion").hide();
        }, 2000);
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
// function cpuATK() {
$("#uno").click(function () {
    if (uno.life && dos.life > 0) {

        $("#uno").attr("disabled", true);
        $("#dos,#j-defender").attr("disabled", false);
        $("#dos,#j-defender").removeClass("btn-disabled");

        uno.atk = uno.atk + randomA();
        // dos.def = dos.def + randomD();
        $("#atk-r").html(uno.atk);
        // $("#def-j").html(dos.def);

        if (uno.atk > dos.def) {
            var x = uno.atk - dos.def;
            dos.life = dos.life - x;
            $("#life-j").html(dos.life);
            dos.energia = dos.energia + 1;
            if (dos.life <= 0) {
                isAlive();
            }
        } else {
            var x = dos.atk - uno.def;
            var isNegative = Math.sign(x);
            if (isNegative == 1) {
                uno.life = uno.life - x;
                $("#life-r").html(uno.life);

            } else {
                x *= -1;
                uno.life = uno.life - x;
                $("#life-r").html(uno.life);
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

    //aumentando defensa al final
    dos.def = dos.def + randomD();
    $("#def-j").html(dos.def);

    turno++;
    $("#resultado").html("Turno número: " + turno);
    $("#j-turno").html("En Turno");
    $("#j-turno").removeClass('sinTurno');
    $("#j-turno").addClass('enTurno');
    $("#r-turno").html("En Espera");
    $("#r-turno").addClass('sinTurno');
});

$("#dos").click(function () {
    if (uno.life && dos.life > 0) {

        $("#dos,#j-defender").attr("disabled", true);
        $("#dos,#j-defender").addClass("btn-disabled");
        $("#uno").attr("disabled", false);

        if (suerteRndm() == 13) {
            console.log("Lucky");
            dos.life = dos.life + 100;
        }
        // $("#uno").attr("disabled", false);

        dos.atk = dos.atk + randomA();
        // uno.def = uno.def + randomD();
        // $("#def-r").html(uno.def);
        $("#atk-j").html(dos.atk);

        if (dos.atk > uno.def) {
            var x = dos.atk - uno.def;
            uno.life = uno.life - x;
            $("#life-r").html(uno.life);
            uno.energia = uno.energia + 1;
            if (uno.life <= 0) {
                isAlive();
            }
        } else {
            var x = uno.atk - dos.def;
            var isNegative = Math.sign(x);
            if (isNegative == 1) {
                dos.life = dos.life - x;
                $("#life-j").html(dos.life);
            } else {
                x *= -1;
                dos.life = dos.life - x;
                $("#life-j").html(dos.life);
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

    //agregando defensa al final
    uno.def = uno.def + randomD();
    $("#def-r").html(uno.def);

    turno++;
    $("#resultado").html("Turno número: " + turno);
    $("#r-turno").html("En Turno");
    $("#r-turno").removeClass('sinTurno');
    $("#r-turno").addClass('enTurno');
    $("#j-turno").html("En Espera");
    $("#j-turno").addClass('sinTurno');
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