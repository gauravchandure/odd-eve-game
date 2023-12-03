/* START THE GAME */

function start() {
    console.log("hello");
    //document.getElementById("main-container").style.display = "block";
    document.getElementById("toss").style.display = "block";
    document.getElementById("start").style.display = "none";
    document.getElementById("gameName").style.fontSize = "20px";

}

/* TOSS START */

var odd1 = document.getElementById('odd');
odd1.onclick = odd;

function odd() {
    document.getElementById("toss").style.display = "none";
    document.getElementById("fist-T1").style.display = "block";
    document.getElementById("fist-T2").style.display = "block";
    document.getElementById("numberSelectorT").style.display = "block";

    var rt1 = document.getElementById('RT1');
    rt1.onclick = OddRT1;
    var rt2 = document.getElementById('RT2');
    rt2.onclick = OddRT2;
    var rt3 = document.getElementById('RT3');
    rt3.onclick = OddRT3;
    var rt4 = document.getElementById('RT4');
    rt4.onclick = OddRT4;
    var rt5 = document.getElementById('RT5');
    rt5.onclick = OddRT5;
    var rt6 = document.getElementById('RT6');
    rt6.onclick = OddRT6;
}

var eve1 = document.getElementById('eve');
eve1.onclick = eve;

function eve() {
    document.getElementById("toss").style.display = "none";
    document.getElementById("fist-T1").style.display = "block";
    document.getElementById("fist-T2").style.display = "block";
    document.getElementById("numberSelectorT").style.display = "block";

    var rt1 = document.getElementById('RT1');
    rt1.onclick = EveRT1;
    var rt2 = document.getElementById('RT2');
    rt2.onclick = EveRT2;
    var rt3 = document.getElementById('RT3');
    rt3.onclick = EveRT3;
    var rt4 = document.getElementById('RT4');
    rt4.onclick = EveRT4;
    var rt5 = document.getElementById('RT5');
    rt5.onclick = EveRT5;
    var rt6 = document.getElementById('RT6');
    rt6.onclick = EveRT6;
}



function forOdd1() {

    if (x == 2 || x == 4 || x == 6) {
        document.getElementById("selectionByUser").style.display = "block";

        document.getElementById("tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("selectionByUser").style.display = "none";
        document.getElementById("tossing").style.filter = 'blur(5px)';
        document.getElementById("main-container").style.filter = 'blur(5px)';
        document.getElementById("selectionByComp").style.display = "block";
        document.getElementById("R1").disabled = true;
        document.getElementById("R2").disabled = true;
        document.getElementById("R3").disabled = true;
        document.getElementById("R4").disabled = true;
        document.getElementById("R5").disabled = true;
        document.getElementById("R6").disabled = true;
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // console.log(`bat selected`);
            matchStartBowl();
        } else {
            // console.log('bowl selected');
            matchStartBat();
        }
    }
}
function forOdd2() {
    if (x == 1 || x == 3 || x == 5) {
        document.getElementById("selectionByUser").style.display = "block";

        document.getElementById("tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("selectionByUser").style.display = "none";
        document.getElementById("tossing").style.filter = 'blur(5px)';
        document.getElementById("main-container").style.filter = 'blur(5px)';
        document.getElementById("R1").disabled = true;
        document.getElementById("R2").disabled = true;
        document.getElementById("R3").disabled = true;
        document.getElementById("R4").disabled = true;
        document.getElementById("R5").disabled = true;
        document.getElementById("R6").disabled = true;
        document.getElementById("selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // console.log(`bat selected`);
            matchStartBowl();
        } else {
            // console.log('bowl selected');
            matchStartBat();
        }
    }
}

function forEve1() {
    if (x == 1 || x == 3 || x == 5) {
        document.getElementById("selectionByUser").style.display = "block";

        document.getElementById("tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("selectionByUser").style.display = "none";
        document.getElementById("tossing").style.filter = 'blur(5px)';
        document.getElementById("main-container").style.filter = 'blur(5px)';
        document.getElementById("R1").disabled = true;
        document.getElementById("R2").disabled = true;
        document.getElementById("R3").disabled = true;
        document.getElementById("R4").disabled = true;
        document.getElementById("R5").disabled = true;
        document.getElementById("R6").disabled = true;
        document.getElementById("selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // console.log(`bat selected`);
            matchStartBowl();
        } else {
            // console.log('bowl selected');
            matchStartBat();
        }
    }
}
function forEve2() {

    if (x == 2 || x == 4 || x == 6) {
        document.getElementById("selectionByUser").style.display = "block";

        document.getElementById("tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("selectionByUser").style.display = "none";
        document.getElementById("tossing").style.filter = 'blur(5px)';
        document.getElementById("main-container").style.filter = 'blur(5px)';
        document.getElementById("R1").disabled = true;
        document.getElementById("R2").disabled = true;
        document.getElementById("R3").disabled = true;
        document.getElementById("R4").disabled = true;
        document.getElementById("R5").disabled = true;
        document.getElementById("R6").disabled = true;
        document.getElementById("selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // console.log(`bat selected`);
            matchStartBowl();
        } else {
            // console.log('bowl selected');
            matchStartBat();
        }
    }
}

let x = Math.floor(Math.random() * 6) + 1;
console.log(x);

// If user chose odd
function OddRT1() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "block";
    document.getElementById("num-TB1").style.marginLeft = "570px";
    document.getElementById("num-TB2").style.display = "none";
    document.getElementById("num-TB3").style.display = "none";
    document.getElementById("num-TB4").style.display = "none";
    document.getElementById("num-TB5").style.display = "none";
    document.getElementById("num-TB6").style.display = "none";
    console.log(x);
    setTimeout(function () {

        forOdd1();

    }, 1000);

    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";


    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}

function OddRT2() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "none";
    document.getElementById("num-TB2").style.display = "block";
    document.getElementById("num-TB2").style.marginLeft = "550px";
    document.getElementById("num-TB3").style.display = "none";
    document.getElementById("num-TB4").style.display = "none";
    document.getElementById("num-TB5").style.display = "none";
    document.getElementById("num-TB6").style.display = "none";

    setTimeout(function () {
        forOdd2();
    }, 1000);

    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}

function OddRT3() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "none";
    document.getElementById("num-TB2").style.display = "none";
    document.getElementById("num-TB3").style.display = "block";
    document.getElementById("num-TB3").style.marginLeft = "570px";
    document.getElementById("num-TB4").style.display = "none";
    document.getElementById("num-TB5").style.display = "none";
    document.getElementById("num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        forOdd1();
    }, 1000);
    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}

function OddRT4() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "none";
    document.getElementById("num-TB2").style.display = "none";
    document.getElementById("num-TB3").style.display = "none";
    document.getElementById("num-TB4").style.display = "block";
    document.getElementById("num-TB4").style.marginLeft = "550px";
    document.getElementById("num-TB5").style.display = "none";
    document.getElementById("num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        forOdd2();
    }, 1000);

    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}

function OddRT5() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "none";
    document.getElementById("num-TB2").style.display = "none";
    document.getElementById("num-TB3").style.display = "none";
    document.getElementById("num-TB4").style.display = "none";
    document.getElementById("num-TB5").style.display = "block";
    document.getElementById("num-TB5").style.marginLeft = "540px";
    document.getElementById("num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        forOdd1();
    }, 1000);

    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}

function OddRT6() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "none";
    document.getElementById("num-TB2").style.display = "none";
    document.getElementById("num-TB3").style.display = "none";
    document.getElementById("num-TB4").style.display = "none";
    document.getElementById("num-TB5").style.display = "none";
    document.getElementById("num-TB6").style.display = "block";
    document.getElementById("num-TB6").style.marginLeft = "570px";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        forOdd2();
    }, 1000);

    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}
// If user chose Eve
function EveRT1() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "block";
    document.getElementById("num-TB1").style.marginLeft = "570px";
    document.getElementById("num-TB2").style.display = "none";
    document.getElementById("num-TB3").style.display = "none";
    document.getElementById("num-TB4").style.display = "none";
    document.getElementById("num-TB5").style.display = "none";
    document.getElementById("num-TB6").style.display = "none";
    console.log(x);
    setTimeout(function () {

        forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";


    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}

function EveRT2() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "none";
    document.getElementById("num-TB2").style.marginLeft = "570px";
    document.getElementById("num-TB2").style.display = "block";
    document.getElementById("num-TB3").style.display = "none";
    document.getElementById("num-TB4").style.display = "none";
    document.getElementById("num-TB5").style.display = "none";
    document.getElementById("num-TB6").style.display = "none";
    console.log(x);
    setTimeout(function () {

        forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";


    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}

function EveRT3() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "none";
    document.getElementById("num-TB3").style.marginLeft = "570px";
    document.getElementById("num-TB2").style.display = "none";
    document.getElementById("num-TB3").style.display = "block";
    document.getElementById("num-TB4").style.display = "none";
    document.getElementById("num-TB5").style.display = "none";
    document.getElementById("num-TB6").style.display = "none";
    console.log(x);
    setTimeout(function () {

        forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";


    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}

function EveRT4() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "none";
    document.getElementById("num-TB4").style.marginLeft = "570px";
    document.getElementById("num-TB2").style.display = "none";
    document.getElementById("num-TB3").style.display = "none";
    document.getElementById("num-TB4").style.display = "block";
    document.getElementById("num-TB5").style.display = "none";
    document.getElementById("num-TB6").style.display = "none";
    console.log(x);
    setTimeout(function () {

        forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";


    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}

function EveRT5() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "none";
    document.getElementById("num-TB5").style.marginLeft = "570px";
    document.getElementById("num-TB2").style.display = "none";
    document.getElementById("num-TB3").style.display = "none";
    document.getElementById("num-TB4").style.display = "none";
    document.getElementById("num-TB5").style.display = "block";
    document.getElementById("num-TB6").style.display = "none";
    console.log(x);
    setTimeout(function () {

        forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";


    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}

function EveRT6() {
    document.getElementById("fist-T2").style.display = "none";
    document.getElementById("num-TB1").style.display = "none";
    document.getElementById("num-TB6").style.marginLeft = "570px";
    document.getElementById("num-TB2").style.display = "none";
    document.getElementById("num-TB3").style.display = "none";
    document.getElementById("num-TB4").style.display = "none";
    document.getElementById("num-TB5").style.display = "none";
    document.getElementById("num-TB6").style.display = "block";
    console.log(x);
    setTimeout(function () {

        forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (x == 1) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "block";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";


    }
    else if (x == 2) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "block";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
        document.getElementById("num-TA2").style.marginLeft = "40%";
        document.getElementById("num-TB1").style.marginLeft = "570px";
    }
    else if (x == 3) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "block";
        document.getElementById("num-TA3").style.marginLeft = "40%";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 4) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "block";
        document.getElementById("num-TA4").style.marginLeft = "40%";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 5) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "block";
        document.getElementById("num-TA5").style.marginLeft = "40%";
        document.getElementById("num-TA6").style.display = "none";
    }
    else if (x == 6) {
        document.getElementById("fist-T1").style.display = "none";
        document.getElementById("num-TA1").style.display = "none";
        document.getElementById("num-TA2").style.display = "none";
        document.getElementById("num-TA3").style.display = "none";
        document.getElementById("num-TA4").style.display = "none";
        document.getElementById("num-TA5").style.display = "none";
        document.getElementById("num-TA6").style.display = "block";
        document.getElementById("num-TA6").style.marginLeft = "40%";
    }
}

/* TOSS END */

/* ENTERING MATCH */
function cont() {
    document.getElementById("tossing").style.display = "none";
    document.getElementById("selectionByComp").style.display = "none";
    document.getElementById("main-container").style.display = "block";
    document.getElementById("main-container").style.filter = 'blur(0px)';
    document.getElementById("R1").disabled = false;
    document.getElementById("R2").disabled = false;
    document.getElementById("R3").disabled = false;
    document.getElementById("R4").disabled = false;
    document.getElementById("R5").disabled = false;
    document.getElementById("R6").disabled = false;
}
function contChaseUser() {
    document.getElementById('targetChaseComp').style.display = "none";
    document.getElementById('targetChaseUser').style.display = "none";
    document.getElementById("R1").disabled = false;
    document.getElementById("R2").disabled = false;
    document.getElementById("R3").disabled = false;
    document.getElementById("R4").disabled = false;
    document.getElementById("R5").disabled = false;
    document.getElementById("R6").disabled = false;
}
function contChaseComp() {
    document.getElementById('targetChaseComp').style.display = "none";
    document.getElementById('targetChaseUser').style.display = "none";
    document.getElementById("R1").disabled = false;
    document.getElementById("R2").disabled = false;
    document.getElementById("R3").disabled = false;
    document.getElementById("R4").disabled = false;
    document.getElementById("R5").disabled = false;
    document.getElementById("R6").disabled = false;
}


function matchStartBowl() {
    tossing = document.getElementById("tossing").style.display = "none";
    tossing = document.getElementById("selectionByUser").style.display = "none";
    tossing = document.getElementById("main-container").style.display = "block";
    bowlfirst();
}

function bowlfirst() {
    var r1 = document.getElementById('R1');
    r1.onclick = bowlFirstR1;
    var r2 = document.getElementById('R2');
    r2.onclick = bowlFirstR2;
    var r3 = document.getElementById('R3');
    r3.onclick = bowlFirstR3;
    var r4 = document.getElementById('R4');
    r4.onclick = bowlFirstR4;
    var r5 = document.getElementById('R5');
    r5.onclick = bowlFirstR5;
    var r6 = document.getElementById('R6');
    r6.onclick = bowlFirstR6;
}

function batSecond() {
    var r1 = document.getElementById('R1');
    r1.onclick = batSecondR1;
    var r2 = document.getElementById('R2');
    r2.onclick = batSecondR2;
    var r3 = document.getElementById('R3');
    r3.onclick = batSecondR3;
    var r4 = document.getElementById('R4');
    r4.onclick = batSecondR4;
    var r5 = document.getElementById('R5');
    r5.onclick = batSecondR5;
    var r6 = document.getElementById('R6');
    r6.onclick = batSecondR6;
}


var compScore = 0;


function bowlFirstR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "block";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        document.getElementById('targetValue').textContent = compScore + 1;
        document.getElementById('targetChaseUser').style.display = "block";
        document.getElementById('runChaseUser').textContent = compScore + 1;
        batSecond();
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }


}

function bowlFirstR2() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "block";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        document.getElementById('targetValue').innerText = compScore + 1;
        document.getElementById('targetChaseUser').style.display = "block";
        document.getElementById('runChaseUser').textContent = compScore + 1;
        batSecond();

    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-270%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }


}

function bowlFirstR3() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "block";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-270%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        document.getElementById('targetValue').innerText = compScore + 1;
        document.getElementById('targetChaseUser').style.display = "block";
        document.getElementById('runChaseUser').textContent = compScore + 1;
        batSecond();
    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }


}

function bowlFirstR4() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "block";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        document.getElementById('targetValue').innerText = compScore + 1;
        document.getElementById('targetChaseUser').style.display = "block";
        document.getElementById('runChaseUser').textContent = compScore + 1;
        batSecond();

    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }


}

function bowlFirstR5() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "block";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;

    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        document.getElementById('targetValue').innerText = compScore + 1;
        document.getElementById('targetChaseUser').style.display = "block";
        document.getElementById('runChaseUser').textContent = compScore + 1;
        batSecond();

    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }


}

function bowlFirstR6() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "block";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;

    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;

    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        document.getElementById('targetValue').textContent = compScore + 1;
        document.getElementById('targetChaseUser').style.display = "block";
        document.getElementById('runChaseUser').textContent = compScore + 1;
        batSecond();

    }


}

var userScore = 0;
// var runToChaseUser = (userScore + 1); 

function batSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "block";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "0%";
    var halfCentury = false;
    if (userScore >= 50 && halfCentury == false) {
        document.getElementById("halfCenturyUser").style.display = "block";
        halfCentury == true;
    }
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 1;
        document.getElementById('userRun').textContent = userScore;
        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (compScore == userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseComp > userScore) {
            setTimeout(function () {         //If user do not chase the target                
                document.getElementById("compWonBy").textContent = (runToChaseComp - userScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("batFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 1;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp < userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 1;
        var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp < userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 1;
        var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp < userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 1;
        var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp < userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        userScore = userScore + 1;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp < userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }


}

function batSecondR2() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "block";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 2;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (compScore == userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseComp > userScore) {
            setTimeout(function () {         //If user do not chase the target                
                document.getElementById("compWonBy").textContent = (runToChaseComp - userScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("batFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 2;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 2;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                          //If the user chased the target
            document.getElementById("matchEnd").style.display = "block";
            document.getElementById("userWins").style.display = "block";
            document.getElementById("bowlFirstWinUser").style.display = "block";
            document.getElementById("main-container").style.filter = 'blur(5px)';
        }
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 2;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-270%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        userScore = userScore + 2;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }


}

function batSecondR3() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "block";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 3;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-270%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 3;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (compScore == userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseComp > userScore) {
            setTimeout(function () {         //If user do not chase the target                
                document.getElementById("compWonBy").textContent = (runToChaseComp - userScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("batFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 3;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 3;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        userScore = userScore + 3;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
            }, 1000);
        }
    }


}

function batSecondR4() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "block";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 4;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 4;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 4;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (compScore == userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseComp > userScore) {
            setTimeout(function () {         //If user do not chase the target                
                document.getElementById("compWonBy").textContent = (runToChaseComp - userScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("batFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 4;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        userScore = userScore + 4;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }


}

function batSecondR5() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "block";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 5;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 5;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 5;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 5;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (compScore == userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseComp > userScore) {
            setTimeout(function () {         //If user do not chase the target                
                document.getElementById("compWonBy").textContent = (runToChaseComp - userScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("batFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        userScore = userScore + 5;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }


}

function batSecondR6() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "block";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 6;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 6;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 6;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 6;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 6;
        document.getElementById('userRun').textContent = userScore;

        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        var runToChaseComp = compScore + 1;
        if (runToChaseComp <= userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("bowlFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (compScore == userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseComp > userScore) {
            setTimeout(function () {         //If user do not chase the target                
                document.getElementById("compWonBy").textContent = (runToChaseComp - userScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("batFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }

    }


}

function matchStartBat() {
    tossing = document.getElementById("tossing").style.display = "none";
    tossing = document.getElementById("selectionByUser").style.display = "none";
    tossing = document.getElementById("main-container").style.display = "block";
    batFirst();
}

function batFirst() {
    var r1 = document.getElementById('R1');
    r1.onclick = batFirstR1;
    var r2 = document.getElementById('R2');
    r2.onclick = batFirstR2;
    var r3 = document.getElementById('R3');
    r3.onclick = batFirstR3;
    var r4 = document.getElementById('R4');
    r4.onclick = batFirstR4;
    var r5 = document.getElementById('R5');
    r5.onclick = batFirstR5;
    var r6 = document.getElementById('R6');
    r6.onclick = batFirstR6;
}

let runtextUser = document.getElementById('userRun').innerText;
var halfCentury = false;
if (runtextUser >= 50 && halfCentury == false) {
    document.getElementById("halfCenturyUser").style.display = "block";
    halfCentury == true;
}

function batFirstR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "block";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        document.getElementById('targetValue').textContent = userScore + 1;
        document.getElementById('targetChaseComp').style.display = "block";
        document.getElementById('runChaseComp').textContent = userScore + 1;
        bowlSecond();
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 1;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 1;
        document.getElementById('userRun').textContent = userScore;

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 1;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 1;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        userScore = userScore + 1;
        document.getElementById('userRun').textContent = userScore;
    }


}

function batFirstR2() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "block";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 2;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        document.getElementById('targetValue').innerText = userScore + 1;
        document.getElementById('targetChaseComp').style.display = "block";
        document.getElementById('runChaseComp').textContent = userScore + 1;
        bowlSecond();

    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 2;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 2;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 2;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-270%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        userScore = userScore + 2;
        document.getElementById('userRun').textContent = userScore;
    }


}

function batFirstR3() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "block";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 3;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-270%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 3;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        document.getElementById('targetValue').innerText = userScore + 1;
        document.getElementById('targetChaseComp').style.display = "block";
        document.getElementById('runChaseComp').textContent = userScore + 1;
        bowlSecond();
    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 3;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 3;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        userScore = userScore + 3;
        document.getElementById('userRun').textContent = userScore;
    }


}

function batFirstR4() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "block";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 4;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 4;
        document.getElementById('userRun').textContent = userScore;


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 4;
        document.getElementById('userRun').textContent = userScore;

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        document.getElementById('targetValue').innerText = userScore + 1;
        document.getElementById('targetChaseComp').style.display = "block";
        document.getElementById('runChaseComp').textContent = userScore + 1;
        bowlSecond();

    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 4;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        userScore = userScore + 4;
        document.getElementById('userRun').textContent = userScore;
    }


}

function batFirstR5() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "block";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 5;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 5;
        document.getElementById('userRun').textContent = userScore;


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 5;
        document.getElementById('userRun').textContent = userScore;

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 5;
        document.getElementById('userRun').textContent = userScore;

    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        document.getElementById('targetValue').innerText = userScore + 1;
        document.getElementById('targetChaseComp').style.display = "block";
        document.getElementById('runChaseComp').textContent = userScore + 1;
        bowlSecond();

    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        userScore = userScore + 5;
        document.getElementById('userRun').textContent = userScore;
    }


}

function batFirstR6() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "block";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 6;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 6;
        document.getElementById('userRun').textContent = userScore;

    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 6;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 6;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        userScore = userScore + 6;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        document.getElementById('targetValue').innerText = userScore + 1;
        document.getElementById('targetChaseComp').style.display = "block";
        document.getElementById('runChaseComp').textContent = userScore + 1;
        bowlSecond();

    }


}

function bowlSecond() {
    var r1 = document.getElementById('R1');
    r1.onclick = bowlSecondR1;
    var r2 = document.getElementById('R2');
    r2.onclick = bowlSecondR2;
    var r3 = document.getElementById('R3');
    r3.onclick = bowlSecondR3;
    var r4 = document.getElementById('R4');
    r4.onclick = bowlSecondR4;
    var r5 = document.getElementById('R5');
    r5.onclick = bowlSecondR5;
    var r6 = document.getElementById('R6');
    r6.onclick = bowlSecondR6;
}

function bowlSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "block";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (userScore == compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseUser > compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("userWonBy").textContent = (runToChaseUser - compScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("batFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }


}

function bowlSecondR2() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "block";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-380%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (userScore == compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseUser > compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("userWonBy").textContent = (runToChaseUser - compScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("batFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-320%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-400%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-270%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }


}

function bowlSecondR3() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "block";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-270%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (userScore == compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseUser > compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("userWonBy").textContent = (runToChaseUser - compScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("batFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }


}

function bowlSecondR4() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "block";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (userScore == compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseUser > compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("userWonBy").textContent = (runToChaseUser - compScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("batFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }


}

function bowlSecondR5() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "block";
    document.getElementById('num-B6').style.display = "none";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (userScore == compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseUser > compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("userWonBy").textContent = (runToChaseUser - compScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("batFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }


    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }


}

function bowlSecondR6() {
    document.getElementById('fist-2').style.display = "none";
    document.getElementById('num-B1').style.display = "none";
    document.getElementById('num-B2').style.display = "none";
    document.getElementById('num-B3').style.display = "none";
    document.getElementById('num-B4').style.display = "none";
    document.getElementById('num-B5').style.display = "none";
    document.getElementById('num-B6').style.display = "block";
    document.getElementById('userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "block";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "block";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('compRunTable').style.marginLeft = "-250%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "block";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('compRunTable').style.marginLeft = "-350%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "block";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('compRunTable').style.marginLeft = "-300%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "block";
        document.getElementById('num-A6').style.display = "none";
        compScore += x;
        document.getElementById('compRun').textContent = compScore;
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('compRunTable').style.marginLeft = "-200%";
        document.getElementById('fist-1').style.display = "none";
        document.getElementById('num-A1').style.display = "none";
        document.getElementById('num-A2').style.display = "none";
        document.getElementById('num-A3').style.display = "none";
        document.getElementById('num-A4').style.display = "none";
        document.getElementById('num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "block";
        var runToChaseUser = userScore + 1;
        if (runToChaseUser <= compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("compWins").style.display = "block";
                document.getElementById("bowlFirstWinComp").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (userScore == compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("tie").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        } else if (runToChaseUser > compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("userWonBy").textContent = (runToChaseUser - compScore);
                document.getElementById("matchEnd").style.display = "block";
                document.getElementById("userWins").style.display = "block";
                document.getElementById("batFirstWinUser").style.display = "block";
                document.getElementById("main-container").style.filter = 'blur(5px)';
                document.getElementById("R1").disabled = true;
                document.getElementById("R2").disabled = true;
                document.getElementById("R3").disabled = true;
                document.getElementById("R4").disabled = true;
                document.getElementById("R5").disabled = true;
                document.getElementById("R6").disabled = true;
            }, 1000);
        }


    }


}

function btnClose() {
    document.getElementById("halfCenturyUser").style.display = "none";
}

/* For Playing Next Game */
function reload1() {
    location.reload();
}
function reload2() {
    location.reload();
}
function reload3() {
    location.reload();
}
function reload4() {
    location.reload();
}
function reload5() {
    location.reload();
}
