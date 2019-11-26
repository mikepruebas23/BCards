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


    $("#atk-r").html(uno.atk);
    $("#def-r").html(uno.def);
    $("#life-r").html(uno.life);

    $("#atk-j").html(uno.atk);
    $("#def-j").html(uno.def);
    $("#life-j").html(uno.life);

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
// while (uno.life >= 0 && dos.life >= 0) {
$("#uno").click(function () {
    if (uno.life && dos.life > 0) {

        $("#uno").attr("disabled", true);
        $("#dos").attr("disabled", false);

        uno.atk = uno.atk + randomA();
        dos.def = dos.def + randomD();
        $("#atk-r").html(uno.atk);
        $("#def-j").html(dos.def);

        if (uno.atk > dos.def) {
            var x = uno.atk - dos.def;
            dos.life = dos.life - x;
            $("#life-j").html(dos.life);
            if (dos.life <= 0) {
                isAlive();
            }
        } else {
            var x = dos.atk - uno.def;
            var isNegative = Math.sign(x);
            if (isNegative == 1) {
                uno.life = uno.life - x;
                $("#life-r").html(uno.life);
        
                // if(uno.life <= 0){
                //     isAlive();
                // }
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
        console.log(uno);
        console.log(dos);
        console.log('----------------');

        // $("#uno").attr("disabled", true);
        // $("#dos").attr("disabled", false);

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
        $("#def-r").html(uno.def);
        $("#atk-j").html(dos.atk);

        if (dos.atk > uno.def) {
            var x = dos.atk - uno.def;
            uno.life = uno.life - x;
            $("#life-r").html(uno.life);

            if (uno.life <= 0) {
                isAlive();
            }
        } else {
            var x = uno.atk - dos.def;
            var isNegative = Math.sign(x);
            if (isNegative == 1) {
                dos.life = dos.life - x;
                $("#life-j").html(dos.life);
                // if(dos.life <= 0){
                //     isAlive();
                // }
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
        console.log(uno);
        console.log(dos);
        console.log('----------------');

        // $("#dos").attr("disabled", true);
        // $("#uno").attr("disabled", false);

        // isAlive();

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