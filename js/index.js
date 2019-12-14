var iDadoAtk;
var iDadoDef;
var turno = 1;
var ronda;
var timer;
var iSegundos = 7;

//maximizadores
var plusAtk, plusDef, plusLife;

//bonus
var iSuerte;

//objetos
var uno = {
    atk: 7,
    def: 5,
    life: 100,
    energia: 5,
    suerte: 0
}
var dos = {
    atk: 7,
    def: 5,
    life: 100,
    energia: 5,
    suerte: 0
}

$("#plusAtk").click(function () {
    $("#plusAtk").attr("disabled", true).addClass("btn-disabled");
    dos.atk = dos.atk + 2;
    $("#atk-j").html(dos.atk);
    console.log(uno);
    console.log(dos);
});
$("#plusDef").click(function () {
    $("#plusDef").attr("disabled", true).addClass("btn-disabled");
    dos.def = dos.def + 2;
    $("#def-j").html(dos.def);
    console.log(uno);
    console.log(dos);
});
$("#plusLife").click(function () {
    $("#plusLife").attr("disabled", true).addClass("btn-disabled");
    dos.life = dos.life + 2;
    $("#life-j").html(dos.life);
    console.log(uno);
    console.log(dos);
});

$(document).ready(function () {

    $("#spinner, #cpu-inicia, #humano-inicia").hide();
    $('#turno').addClass('hover');

    $("#atk-r").html(uno.atk);
    $("#def-r").html(uno.def);
    $("#life-r").html(uno.life);
    $("#ener-r").html(uno.energia);
    $("#suerte-r").html(uno.suerte);

    $("#atk-j").html(dos.atk);
    $("#def-j").html(dos.def);
    $("#life-j").html(dos.life);
    $("#ener-j").html(dos.energia);
    $("#suerte-j").html(dos.suerte);

    // $("#uno, #dos").attr("disabled", true);
    $("#uno").attr("disabled", true);
});

$("#resultado").html("Turno: " + turno);

$("#turno").click(function () {
    $("#spinner").show();
    $("#turno").attr("disabled", true)
    var x = rrandom();
    switch (x) {
        case 1:
            $("#cpu-inicia").show();
            $("#uno").attr("disabled", false);
            $("#r-turno").html("En Turno").addClass('enTurno');
            $("#j-turno").html("En Espera").addClass('sinTurno');
            $("#dos,#j-defender,#j-passT").addClass("btn-disabled-def");
            $("#reloj").addClass('relojOff');
            setTimeout(function () {
                cpuSeleccionAccion();
            }, 5000);
            break;
        case 2:
            $("#humano-inicia").show();
            $("#dos,#j-defender,#j-passT").attr("disabled", false);
            $("#j-turno").html("En Turno").addClass('enTurno');
            $("#r-turno").html("En Espera").addClass('sinTurno');

            setTimeout(function () {
                tiempoTurno();
            }, 2000);
            break;
    }

    setTimeout(function () {
        $("#spinner,#seleccion").hide();
    }, 2000);
});

function cpuSeleccionATK() {
    $("#mensajes").html("CPU selecciono atk");
    if (uno.life && dos.life > 0) {

        $("#uno").attr("disabled", true);
        $("#dos,#j-defender,#j-passT").attr("disabled", false).removeClass("btn-disabled-def");

        uno.atk = uno.atk + randomA();
        // dos.def = dos.def + randomD();
        $("#atk-r").html(uno.atk);
        // $("#def-j").html(dos.def);

        if (uno.atk > dos.def) {
            var x = uno.atk - dos.def;
            dos.life = dos.life - x;
            $("#life-j").html(dos.life);
            dos.energia = dos.energia + 1;
            $("#j-heart").addClass("shake-opacity").addClass("red");
            moverCorazon();
            if (dos.life <= 0) {
                isAlive();
            }
        } else {
            var x = dos.atk - uno.def;
            var isNegative = Math.sign(x);
            if (isNegative == 1) {
                uno.life = uno.life - x;
                $("#life-r").html(uno.life);
                $("#heart").addClass("shake-opacity").addClass("red");
                moverCorazon2();

            } else {
                x *= -1;
                uno.life = uno.life - x;
                $("#life-r").html(uno.life);
                $("#heart").addClass("shake-opacity").addClass("red");
                moverCorazon2();
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
    $("#resultado").html("Turno: " + turno);
    $("#j-turno").html("En Turno").removeClass('sinTurno').addClass('enTurno');
    $("#r-turno").html("En Espera").addClass('sinTurno');

    iSegundos = 7;
    $("#countdown").html(iSegundos + ' seg');
    tiempoTurno();
}

function pasarTurno() {
    //actualizar reloj
    clearInterval(timer);
    $("#countdown").html('Tiempo!');
    $("#reloj").removeClass('relojOn').addClass('relojOff');

    //atributos
    dos.energia++;
    $("#ener-j").html(dos.energia);

    //desabilitar botones
    $("#dos,#j-defender,#j-passT").attr("disabled", true).addClass("btn-disabled-def");
    $("#uno").attr("disabled", false);

    //agregando defensa al final
    uno.def = uno.def + randomD();
    $("#def-r").html(uno.def);

    turno++;
    $("#resultado").html("Turno: " + turno);
    $("#r-turno").html("En Turno").removeClass('sinTurno').addClass('enTurno');
    $("#j-turno").html("En Espera").addClass('sinTurno');

    //hacer que el cpu haga algo al azar
    setTimeout(function () {
        cpuSeleccionAccion();
    }, 3000);
}

function rrandom() {
    ronda = Math.floor(Math.random() * (3 - 1)) + 1;
    return ronda;
}

function suerteRndm() {
    iSuerte = Math.floor(Math.random() * (101 - 1)) + 1;
    return iSuerte;
}


function randomA() {
    iDadoAtk = Math.floor(Math.random() * (6 - 1)) + 1;
    return iDadoAtk;
}

function randomD() {
    iDadoDef = Math.floor(Math.random() * (6 - 1)) + 1;
    return iDadoDef;
}

function playerSeleccionDEF() {
    clearInterval(timer);
    $("#countdown").html('Tiempo!');
    $("#reloj").removeClass('relojOn').addClass('relojOff');

    $("#dos,#j-passT,#j-defender").addClass("btn-disabled-def").attr("disabled", true);

    $("#def-j").html(dos.def = dos.def + 10);
    $("#uno").attr("disabled", false);

    turno++;
    $("#resultado").html("Turno: " + turno);
    $("#r-turno").html("En Turno").removeClass('sinTurno').addClass('enTurno');
    $("#j-turno").html("En Espera").addClass('sinTurno');

    //hacer que el cpu haga algo al azar
    setTimeout(function () {
        cpuSeleccionAccion();
    }, 3000);
}

function playerSeleccionATK() {
    clearInterval(timer);
    $("#countdown").html('Tiempo!');
    $("#reloj").removeClass('relojOn').addClass('relojOff');

    if (uno.life && dos.life > 0) {

        $("#dos,#j-defender,#j-passT").attr("disabled", true).addClass("btn-disabled-def");
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
            let x = dos.atk - uno.def;
            uno.life = uno.life - x;
            $("#life-r").html(uno.life);
            $("#heart").addClass("shake-opacity").addClass("red");
            moverCorazon2();
            uno.energia = uno.energia + 1;
            if (uno.life <= 0) {
                isAlive();
            }
        } else {
            let x = uno.atk - dos.def;
            let isNegative = Math.sign(x);
            if (isNegative == 1) {
                dos.life = dos.life - x;
                $("#life-j").html(dos.life);
                $("#j-heart").addClass("shake-opacity").addClass("red");
                moverCorazon();
            } else {
                x *= -1;
                dos.life = dos.life - x;
                $("#life-j").html(dos.life);
                $("#j-heart").addClass("shake-opacity").addClass("red");
                moverCorazon();
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
    $("#resultado").html("Turno: " + turno);
    $("#r-turno").html("En Turno").removeClass('sinTurno').addClass('enTurno');
    $("#j-turno").html("En Espera").addClass('sinTurno');

    //hacer que el cpu haga algo al azar
    setTimeout(function () {
        cpuSeleccionAccion();
    }, 3000);
    // cpuSeleccionAccion();
};


function isAlive() {
    if (uno.life <= 0) {
        $("#ganador").html("Ganador: JUGADOR");
        $("#uno,#dos").attr("disabled", true);
        return;

    } else if (dos.life <= 0) {
        $("#ganador").html("Ganador: CPU");
        $("#dos,#uno").attr("disabled", true);
        return;
    }
}

function tiempoTurno() {

    $("#reloj").removeClass('relojOff').addClass('relojOn');

    function showRemaining() {
        if (iSegundos <= 0) {

            clearInterval(timer);
            $("#countdown").html('Tiempo!');
            $("#reloj").removeClass('relojOn').addClass('relojOff');

            let x = Math.floor(Math.random() * (4 - 1)) + 1;
            switch (x) {
                case 1:
                    playerSeleccionATK();
                    break;
                case 2:
                    playerSeleccionDEF();
                    break;
                case 3:
                    pasarTurno();
                    break;
            }
            return;
        }

        iSegundos--;
        $("#countdown").html(iSegundos + ' seg');

    }
    timer = setInterval(showRemaining, 1000);
}

//atk automatico por el cpu
function cpuSeleccionAccion() {
    let value = Math.floor(Math.random() * (2 - 1)) + 1;
    switch (value) {
        case 1:
            cpuSeleccionATK();
            break;
        case 2:
            cpuSeleccionDEF();
            break;
        case 3:
            cpuSeleccionPASS();
            break;
    }
}

function moverCorazon(){

    setTimeout(function () {
        $("#j-heart").removeClass("shake-opacity").removeClass("red");
    }, 500);  
}
function moverCorazon2(){

    setTimeout(function () {
        $("#heart").removeClass("shake-opacity").removeClass("red");
    }, 500);  
}
//355 LINEAS