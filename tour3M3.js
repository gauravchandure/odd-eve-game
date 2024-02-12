function tour3M3start() {
    document.getElementById('tour3M3start').disabled = true;
    document.getElementById("tour3M3toss").style.display = "block";
    document.getElementById("tour3-match").style.display = "none";
    document.getElementById("gameName").style.fontSize = "20px";

}

// function pressing() {
//     document.getElementById('tour3-match').style.display = "block";
//     document.getElementById('tour3M3toss').style.display = "none";
// }



// var tour3odd1 = document.getElementById('tour3M3odd');
// tour3odd1.onclick = tour3odd;

// let a = Math.floor(Math.random() * 6) + 1;
// console.log("value is", a);

function tour3M3OddStart() {
    document.getElementById("tour3M3toss").style.display = "none";
    document.getElementById("tour3M3fist-T1").style.display = "block";
    document.getElementById("tour3M3fist-T2").style.display = "block";
    document.getElementById("tour3M3numberSelectorT").style.display = "block";

    var tour3M3rt1 = document.getElementById('tour3M3RT1');
    tour3M3rt1.onclick = tour3M3OddRT1;
    var tour3M3rt2 = document.getElementById('tour3M3RT2');
    tour3M3rt2.onclick = tour3M3OddRT2;
    var tour3M3rt3 = document.getElementById('tour3M3RT3');
    tour3M3rt3.onclick = tour3M3OddRT3;
    var tour3M3rt4 = document.getElementById('tour3M3RT4');
    tour3M3rt4.onclick = tour3M3OddRT4;
    var tour3M3rt5 = document.getElementById('tour3M3RT5');
    tour3M3rt5.onclick = tour3M3OddRT5;
    var tour3M3rt6 = document.getElementById('tour3M3RT6');
    tour3M3rt6.onclick = tour3M3OddRT6;
}

// var tour3eve1 = document.getElementById('tour3M3eve');
// tour3eve1.onclick = tour3M3eve;

function tour3M3eve() {
    document.getElementById("tour3M3toss").style.display = "none";
    document.getElementById("tour3M3fist-T1").style.display = "block";
    document.getElementById("tour3M3fist-T2").style.display = "block";
    document.getElementById("tour3M3numberSelectorT").style.display = "block";

    var tour3M3rt1 = document.getElementById('tour3M3RT1');
    tour3M3rt1.onclick = tour3M3EveRT1;
    var tour3M3rt2 = document.getElementById('tour3M3RT2');
    tour3M3rt2.onclick = tour3M3EveRT2;
    var tour3M3rt3 = document.getElementById('tour3M3RT3');
    tour3M3rt3.onclick = tour3M3EveRT3;
    var tour3M3rt4 = document.getElementById('tour3M3RT4');
    tour3M3rt4.onclick = tour3M3EveRT4;
    var tour3M3rt5 = document.getElementById('tour3M3RT5');
    tour3M3rt5.onclick = tour3M3EveRT5;
    var tour3M3rt6 = document.getElementById('tour3M3RT6');
    tour3M3rt6.onclick = tour3M3EveRT6;
}




function tour3M3forOdd1() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour3M3selectionByUser").style.display = "block";

        document.getElementById("tour3M3tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour3M3selectionByUser").style.display = "none";
        document.getElementById("tour3M3tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M3selectionByComp").style.display = "block";
        document.getElementById("tour3M3RT1").disabled = true;
        document.getElementById("tour3M3RT2").disabled = true;
        document.getElementById("tour3M3RT3").disabled = true;
        document.getElementById("tour3M3RT4").disabled = true;
        document.getElementById("tour3M3RT5").disabled = true;
        document.getElementById("tour3M3RT6").disabled = true;
        var tour3M3opt = ['Bat', 'Bowl'];
        const tour3M3chose = Math.floor(Math.random() * tour3M3opt.length);
        const tour3M3selectedopt = tour3M3opt[tour3M3chose];
        document.getElementById("tour3M3compOpt").innerText = tour3M3selectedopt;
        var tour3M3selected = 'Bat';
        if (tour3M3selectedopt.includes(tour3M3selected)) {
            // console.log(`bat selected`);
            tour3M3matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour3M3matchStartBat();
        }
    }
}
function tour3M3forOdd2() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour3M3selectionByUser").style.display = "block";

        document.getElementById("tour3M3tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour3M3selectionByUser").style.display = "none";
        document.getElementById("tour3M3tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M3selectionByComp").style.display = "block";
        document.getElementById("tour3M3RT1").disabled = true;
        document.getElementById("tour3M3RT2").disabled = true;
        document.getElementById("tour3M3RT3").disabled = true;
        document.getElementById("tour3M3RT4").disabled = true;
        document.getElementById("tour3M3RT5").disabled = true;
        document.getElementById("tour3M3RT6").disabled = true;
        var tour3M3opt = ['Bat', 'Bowl'];
        const tour3M3chose = Math.floor(Math.random() * tour3M3opt.length);
        const tour3M3selectedopt = tour3M3opt[tour3M3chose];
        document.getElementById("tour3M3compOpt").innerText = tour3M3selectedopt;
        var tour3M3selected = 'Bat';
        if (tour3M3selectedopt.includes(tour3M3selected)) {
            // console.log(`bat selected`);
            tour3M3matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour3M3matchStartBat();
        }
    }
}

function tour3M3forEve1() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour3M3selectionByUser").style.display = "block";

        document.getElementById("tour3M3tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour3M3selectionByUser").style.display = "none";
        document.getElementById("tour3M3tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M3RT1").disabled = true;
        document.getElementById("tour3M3RT2").disabled = true;
        document.getElementById("tour3M3RT3").disabled = true;
        document.getElementById("tour3M3RT4").disabled = true;
        document.getElementById("tour3M3RT5").disabled = true;
        document.getElementById("tour3M3RT6").disabled = true;
        document.getElementById("tour3M3selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour3M3compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour3M3matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour3M3matchStartBat();
        }
    }
}
function tour3M3forEve2() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour3M3selectionByUser").style.display = "block";

        document.getElementById("tour3M3tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour3M3selectionByUser").style.display = "none";
        document.getElementById("tour3M3tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M3RT1").disabled = true;
        document.getElementById("tour3M3RT2").disabled = true;
        document.getElementById("tour3M3RT3").disabled = true;
        document.getElementById("tour3M3RT4").disabled = true;
        document.getElementById("tour3M3RT5").disabled = true;
        document.getElementById("tour3M3RT6").disabled = true;
        document.getElementById("tour3M3selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour3M3compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour3M3matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour3M3matchStartBat();
        }
    }
}
//CHECK FROM HERE

//console.log()(x);

// If user chose odd
function tour3M3OddRT1() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "block";
    document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    document.getElementById("tour3M3num-TB2").style.display = "none";
    document.getElementById("tour3M3num-TB3").style.display = "none";
    document.getElementById("tour3M3num-TB4").style.display = "none";
    document.getElementById("tour3M3num-TB5").style.display = "none";
    document.getElementById("tour3M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M3forOdd1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}

function tour3M3OddRT2() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "none";
    document.getElementById("tour3M3num-TB2").style.display = "block";
    document.getElementById("tour3M3num-TB2").style.marginLeft = "550px";
    document.getElementById("tour3M3num-TB3").style.display = "none";
    document.getElementById("tour3M3num-TB4").style.display = "none";
    document.getElementById("tour3M3num-TB5").style.display = "none";
    document.getElementById("tour3M3num-TB6").style.display = "none";

    setTimeout(function () {
        tour3M3forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}

function tour3M3OddRT3() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "none";
    document.getElementById("tour3M3num-TB2").style.display = "none";
    document.getElementById("tour3M3num-TB3").style.display = "block";
    document.getElementById("tour3M3num-TB3").style.marginLeft = "570px";
    document.getElementById("tour3M3num-TB4").style.display = "none";
    document.getElementById("tour3M3num-TB5").style.display = "none";
    document.getElementById("tour3M3num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M3forOdd1();
    }, 1000);
    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}

function tour3M3OddRT4() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "none";
    document.getElementById("tour3M3num-TB2").style.display = "none";
    document.getElementById("tour3M3num-TB3").style.display = "none";
    document.getElementById("tour3M3num-TB4").style.display = "block";
    document.getElementById("tour3M3num-TB4").style.marginLeft = "550px";
    document.getElementById("tour3M3num-TB5").style.display = "none";
    document.getElementById("tour3M3num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M3forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}

function tour3M3OddRT5() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "none";
    document.getElementById("tour3M3num-TB2").style.display = "none";
    document.getElementById("tour3M3num-TB3").style.display = "none";
    document.getElementById("tour3M3num-TB4").style.display = "none";
    document.getElementById("tour3M3num-TB5").style.display = "block";
    document.getElementById("tour3M3num-TB5").style.marginLeft = "540px";
    document.getElementById("tour3M3num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M3forOdd1();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}

function tour3M3OddRT6() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "none";
    document.getElementById("tour3M3num-TB2").style.display = "none";
    document.getElementById("tour3M3num-TB3").style.display = "none";
    document.getElementById("tour3M3num-TB4").style.display = "none";
    document.getElementById("tour3M3num-TB5").style.display = "none";
    document.getElementById("tour3M3num-TB6").style.display = "block";
    document.getElementById("tour3M3num-TB6").style.marginLeft = "570px";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M3forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}
// If user chose Eve
function tour3M3EveRT1() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "block";
    document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    document.getElementById("tour3M3num-TB2").style.display = "none";
    document.getElementById("tour3M3num-TB3").style.display = "none";
    document.getElementById("tour3M3num-TB4").style.display = "none";
    document.getElementById("tour3M3num-TB5").style.display = "none";
    document.getElementById("tour3M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M3forEve1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}

function tour3M3EveRT2() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "none";
    document.getElementById("tour3M3num-TB2").style.marginLeft = "570px";
    document.getElementById("tour3M3num-TB2").style.display = "block";
    document.getElementById("tour3M3num-TB3").style.display = "none";
    document.getElementById("tour3M3num-TB4").style.display = "none";
    document.getElementById("tour3M3num-TB5").style.display = "none";
    document.getElementById("tour3M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M3forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}

function tour3M3EveRT3() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "none";
    document.getElementById("tour3M3num-TB3").style.marginLeft = "570px";
    document.getElementById("tour3M3num-TB2").style.display = "none";
    document.getElementById("tour3M3num-TB3").style.display = "block";
    document.getElementById("tour3M3num-TB4").style.display = "none";
    document.getElementById("tour3M3num-TB5").style.display = "none";
    document.getElementById("tour3M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M3forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}

function tour3M3EveRT4() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "none";
    document.getElementById("tour3M3num-TB4").style.marginLeft = "570px";
    document.getElementById("tour3M3num-TB2").style.display = "none";
    document.getElementById("tour3M3num-TB3").style.display = "none";
    document.getElementById("tour3M3num-TB4").style.display = "block";
    document.getElementById("tour3M3num-TB5").style.display = "none";
    document.getElementById("tour3M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M3forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}

function tour3M3EveRT5() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "none";
    document.getElementById("tour3M3num-TB5").style.marginLeft = "570px";
    document.getElementById("tour3M3num-TB2").style.display = "none";
    document.getElementById("tour3M3num-TB3").style.display = "none";
    document.getElementById("tour3M3num-TB4").style.display = "none";
    document.getElementById("tour3M3num-TB5").style.display = "block";
    document.getElementById("tour3M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M3forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}

function tour3M3EveRT6() {
    document.getElementById("tour3M3fist-T2").style.display = "none";
    document.getElementById("tour3M3num-TB1").style.display = "none";
    document.getElementById("tour3M3num-TB6").style.marginLeft = "570px";
    document.getElementById("tour3M3num-TB2").style.display = "none";
    document.getElementById("tour3M3num-TB3").style.display = "none";
    document.getElementById("tour3M3num-TB4").style.display = "none";
    document.getElementById("tour3M3num-TB5").style.display = "none";
    document.getElementById("tour3M3num-TB6").style.display = "block";
    //console.log()(x);
    setTimeout(function () {

        tour3M3forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "block";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "block";
        document.getElementById("tour3M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "block";
        document.getElementById("tour3M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "block";
        document.getElementById("tour3M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M3fist-T1").style.display = "none";
        document.getElementById("tour3M3num-TA1").style.display = "none";
        document.getElementById("tour3M3num-TA2").style.display = "none";
        document.getElementById("tour3M3num-TA3").style.display = "none";
        document.getElementById("tour3M3num-TA4").style.display = "none";
        document.getElementById("tour3M3num-TA5").style.display = "none";
        document.getElementById("tour3M3num-TA6").style.display = "block";
        document.getElementById("tour3M3num-TA6").style.marginLeft = "40%";
    }
}

/* TOSS END */

/* ENTERING MATCH */
function tour3M3cont() {
    document.getElementById("tour3M3tossing").style.display = "none";
    document.getElementById("tour3M3selectionByComp").style.display = "none";
    document.getElementById("tour3M3main-container").style.display = "block";
    document.getElementById("tour3M3main-container").style.filter = 'blur(0px)';
    document.getElementById("tour3M3R1").disabled = false;
    document.getElementById("tour3M3R2").disabled = false;
    document.getElementById("tour3M3R3").disabled = false;
    document.getElementById("tour3M3R4").disabled = false;
    document.getElementById("tour3M3R5").disabled = false;
    document.getElementById("tour3M3R6").disabled = false;
}
function tour3M3contChaseUser() {
    document.getElementById('tour3M3targetChaseComp').style.display = "none";
    document.getElementById('tour3M3targetChaseUser').style.display = "none";
    document.getElementById("tour3M3R1").disabled = false;
    document.getElementById("tour3M3R2").disabled = false;
    document.getElementById("tour3M3R3").disabled = false;
    document.getElementById("tour3M3R4").disabled = false;
    document.getElementById("tour3M3R5").disabled = false;
    document.getElementById("tour3M3R6").disabled = false;
}
function tour3M3contChaseComp() {
    document.getElementById('tour3M3targetChaseComp').style.display = "none";
    document.getElementById('tour3M3targetChaseUser').style.display = "none";
    document.getElementById("tour3M3R1").disabled = false;
    document.getElementById("tour3M3R2").disabled = false;
    document.getElementById("tour3M3R3").disabled = false;
    document.getElementById("tour3M3R4").disabled = false;
    document.getElementById("tour3M3R5").disabled = false;
    document.getElementById("tour3M3R6").disabled = false;
}


function tour3M3matchStartBowl() {
    tossing = document.getElementById("tour3M3tossing").style.display = "none";
    tossing = document.getElementById("tour3M3selectionByUser").style.display = "none";
    tossing = document.getElementById("tour3M3main-container").style.display = "block";
    tour3M3bowlfirst();
}

function tour3M3bowlfirst() {
    var r1 = document.getElementById('tour3M3R1');
    r1.onclick = tour3M3bowlFirstR1;
    var r2 = document.getElementById('tour3M3R2');
    r2.onclick = tour3M3bowlFirstR2;
    var r3 = document.getElementById('tour3M3R3');
    r3.onclick = tour3M3bowlFirstR3;
    var r4 = document.getElementById('tour3M3R4');
    r4.onclick = tour3M3bowlFirstR4;
    var r5 = document.getElementById('tour3M3R5');
    r5.onclick = tour3M3bowlFirstR5;
    var r6 = document.getElementById('tour3M3R6');
    r6.onclick = tour3M3bowlFirstR6;
}

function tour3M3batSecond() {
    var r1 = document.getElementById('tour3M3R1');
    r1.onclick = tour3M3batSecondR1;
    var r2 = document.getElementById('tour3M3R2');
    r2.onclick = tour3M3batSecondR2;
    var r3 = document.getElementById('tour3M3R3');
    r3.onclick = tour3M3batSecondR3;
    var r4 = document.getElementById('tour3M3R4');
    r4.onclick = tour3M3batSecondR4;
    var r5 = document.getElementById('tour3M3R5');
    r5.onclick = tour3M3batSecondR5;
    var r6 = document.getElementById('tour3M3R6');
    r6.onclick = tour3M3batSecondR6;
}


 var tour3M3compScore = 0;


function tour3M3bowlFirstR1() {
    let y = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "block";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "0%";
    if (y == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        document.getElementById('tour3M3targetValue').textContent = tour3M3compScore + 1;
        document.getElementById('tour3M3targetChaseUser').style.display = "block";
        document.getElementById('tour3M3runChaseUser').textContent = tour3M3compScore + 1;
        tour3M3batSecond();
    }
    else if (y == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += y;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (y == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += y;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (y == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += y;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (y == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += y;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (y == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
         document.getElementById('tour3M3num-A5').style.display = "none";
         document.getElementById('tour3M3num-A6').style.display = "block";
         tour3M3compScore += y;
         document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
     }


}

 function tour3M3bowlFirstR2() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "block";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let y = Math.floor(Math.random() * 6) + 1;
    if (y == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += y;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (y == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        document.getElementById('tour3M3targetValue').innerText = tour3M3compScore + 1;
        document.getElementById('tour3M3targetChaseUser').style.display = "block";
        document.getElementById('tour3M3runChaseUser').textContent = tour3M3compScore + 1;
        tour3M3batSecond();

    }
    else if (y == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += y;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (y == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += y;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (y == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += y;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (y == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3compScore += y;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }


}

function tour3M3bowlFirstR3() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "block";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        document.getElementById('tour3M3targetValue').innerText = tour3M3compScore + 1;
        document.getElementById('tour3M3targetChaseUser').style.display = "block";
        document.getElementById('tour3M3runChaseUser').textContent = tour3M3compScore + 1;
        tour3M3batSecond();
    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }


}

function tour3M3bowlFirstR4() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "block";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        document.getElementById('tour3M3targetValue').innerText = tour3M3compScore + 1;
        document.getElementById('tour3M3targetChaseUser').style.display = "block";
        document.getElementById('tour3M3runChaseUser').textContent = tour3M3compScore + 1;
        tour3M3batSecond();

    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }


}

function tour3M3bowlFirstR5() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "block";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;

    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        document.getElementById('tour3M3targetValue').innerText = tour3M3compScore + 1;
        document.getElementById('tour3M3targetChaseUser').style.display = "block";
        document.getElementById('tour3M3runChaseUser').textContent = tour3M3compScore + 1;
        tour3M3batSecond();

    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }


}

function tour3M3bowlFirstR6() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "block";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;

    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;

    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        document.getElementById('tour3M3targetValue').textContent = tour3M3compScore + 1;
        document.getElementById('tour3M3targetChaseUser').style.display = "block";
        document.getElementById('tour3M3runChaseUser').textContent = tour3M3compScore + 1;
        tour3M3batSecond();

    }


}

 var tour3M3userScore = 0;
 // var tour3M3runToChaseUser = (tour3M3userScore + 1);

function tour3M3batSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "block";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "0%";
    /*var halfCentury = false;
    if (userScore >= 50 && halfCentury == false) {
        document.getElementById("halfCenturyUser").style.display = "block";
        halfCentury == true;
    }*/
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 1;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M3compScore == tour3M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseComp > tour3M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M3compWonBy").textContent = (tour3M3runToChaseComp - tour3M3userScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By " + (tour3M3runToChaseComp - tour3M3userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 1;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp < tour3M3userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp < tour3M3userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp < tour3M3userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp < tour3M3userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3userScore = tour3M3userScore + 1;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp < tour3M3userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M3batSecondR2() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "block";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 2;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M3compScore == tour3M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseComp > tour3M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M3compWonBy").textContent = (tour3M3runToChaseComp - tour3M3userScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By " + (tour3M3runToChaseComp - tour3M3userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 2;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 2;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                          //If the user chased the target
            document.getElementById("tour3M3matchEnd").style.display = "block";
            document.getElementById("tour3M3userWins").style.display = "block";
            document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
            document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 2;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3userScore = tour3M3userScore + 2;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M3batSecondR3() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "block";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 3;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 3;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M3compScore == tour3M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseComp > tour3M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M3compWonBy").textContent = (tour3M3runToChaseComp - tour3M3userScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By " + (tour3M3runToChaseComp - tour3M3userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 3;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 3;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3userScore = tour3M3userScore + 3;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M3batSecondR4() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "block";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 4;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 4;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 4;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M3compScore == tour3M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseComp > tour3M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M3compWonBy").textContent = (tour3M3runToChaseComp - tour3M3userScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By " + (tour3M3runToChaseComp - tour3M3userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 4;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3userScore = tour3M3userScore + 4;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M3batSecondR5() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "block";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 5;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 5;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 5;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 5;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M3compScore == tour3M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseComp > tour3M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M3compWonBy").textContent = (tour3M3runToChaseComp - tour3M3userScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By " + (tour3M3runToChaseComp - tour3M3userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3userScore = tour3M3userScore + 5;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M3batSecondR6() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "block";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 6;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 6;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 6;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 6;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 6;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        var tour3M3runToChaseComp = tour3M3compScore + 1;
        if (tour3M3runToChaseComp <= tour3M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                tour3userpoints++;
                
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By 1 Wicket";
            }, 1000);
        } else if (tour3M3compScore == tour3M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseComp > tour3M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M3compWonBy").textContent = (tour3M3runToChaseComp - tour3M3userScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By " + (tour3M3runToChaseComp - tour3M3userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }


}

function tour3M3matchStartBat() {
        tossing = document.getElementById("tour3M3tossing").style.display = "none";
        tossing = document.getElementById("tour3M3selectionByUser").style.display = "none";
        tossing = document.getElementById("tour3M3main-container").style.display = "block";
        tour3M3batFirst();
}

function tour3M3batFirst() {
    var r1 = document.getElementById('tour3M3R1');
    r1.onclick = tour3M3batFirstR1;
    var r2 = document.getElementById('tour3M3R2');
    r2.onclick = tour3M3batFirstR2;
    var r3 = document.getElementById('tour3M3R3');
    r3.onclick = tour3M3batFirstR3;
    var r4 = document.getElementById('tour3M3R4');
    r4.onclick = tour3M3batFirstR4;
    var r5 = document.getElementById('tour3M3R5');
    r5.onclick = tour3M3batFirstR5;
    var r6 = document.getElementById('tour3M3R6');
    r6.onclick = tour3M3batFirstR6;
}

// let runtextUser = document.getElementById('userRun').innerText;
// var halfCentury = false;
// if (runtextUser >= 50 && halfCentury == false) {
//     document.getElementById("halfCenturyUser").style.display = "block";
//     halfCentury == true;
// }

function tour3M3batFirstR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "block";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        document.getElementById('tour3M3targetValue').textContent = tour3M3userScore + 1;
        document.getElementById('tour3M3targetChaseComp').style.display = "block";
        document.getElementById('tour3M3runChaseComp').textContent = tour3M3userScore + 1;
        tour3M3bowlSecond();
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 1;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 1;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 1;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 1;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3userScore = tour3M3userScore + 1;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }


}

function tour3M3batFirstR2() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "block";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 2;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        document.getElementById('tour3M3targetValue').innerText = tour3M3userScore + 1;
        document.getElementById('tour3M3targetChaseComp').style.display = "block";
        document.getElementById('tour3M3runChaseComp').textContent = tour3M3userScore + 1;
        tour3M3bowlSecond();

    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 2;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 2;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 2;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3userScore = tour3M3userScore + 2;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }


}

function tour3M3batFirstR3() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "block";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 3;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 3;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        document.getElementById('tour3M3targetValue').innerText = tour3M3userScore + 1;
        document.getElementById('tour3M3targetChaseComp').style.display = "block";
        document.getElementById('tour3M3runChaseComp').textContent = tour3M3userScore + 1;
        tour3M3bowlSecond();
    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 3;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 3;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3userScore = tour3M3userScore + 3;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }


}

function tour3M3batFirstR4() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "block";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 4;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 4;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 4;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        document.getElementById('tour3M3targetValue').innerText = tour3M3userScore + 1;
        document.getElementById('tour3M3targetChaseComp').style.display = "block";
        document.getElementById('tour3M3runChaseComp').textContent = tour3M3userScore + 1;
        tour3M3bowlSecond();

    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 4;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3userScore = tour3M3userScore + 4;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }


}

function tour3M3batFirstR5() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "block";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 5;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 5;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 5;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 5;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        document.getElementById('tour3M3targetValue').innerText = tour3M3userScore + 1;
        document.getElementById('tour3M3targetChaseComp').style.display = "block";
        document.getElementById('tour3M3runChaseComp').textContent = tour3M3userScore + 1;
        tour3M3bowlSecond();

    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3userScore = tour3M3userScore + 5;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }


}

function tour3M3batFirstR6() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "block";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 6;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 6;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;

    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 6;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 6;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3userScore = tour3M3userScore + 6;
        document.getElementById('tour3M3userRun').textContent = tour3M3userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        document.getElementById('tour3M3targetValue').innerText = tour3M3userScore + 1;
        document.getElementById('tour3M3targetChaseComp').style.display = "block";
        document.getElementById('tour3M3runChaseComp').textContent = tour3M3userScore + 1;
        tour3M3bowlSecond();

    }


}

function tour3M3bowlSecond() {
    var r1 = document.getElementById('tour3M3R1');
    r1.onclick = tour3M3bowlSecondR1;
    var r2 = document.getElementById('tour3M3R2');
    r2.onclick = tour3M3bowlSecondR2;
    var r3 = document.getElementById('tour3M3R3');
    r3.onclick = tour3M3bowlSecondR3;
    var r4 = document.getElementById('tour3M3R4');
    r4.onclick = tour3M3bowlSecondR4;
    var r5 = document.getElementById('tour3M3R5');
    r5.onclick = tour3M3bowlSecondR5;
    var r6 = document.getElementById('tour3M3R6');
    r6.onclick = tour3M3bowlSecondR6;
}

function tour3M3bowlSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "block";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M3userScore == tour3M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseUser > tour3M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M3userWonBy").textContent = (tour3M3runToChaseUser - tour3M3compScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By " + (tour3M3runToChaseUser - tour3M3compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


 }

function tour3M3bowlSecondR2() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "block";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M3userScore == tour3M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseUser > tour3M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M3userWonBy").textContent = (tour3M3runToChaseUser - tour3M3compScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By " + (tour3M3runToChaseUser - tour3M3compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M3bowlSecondR3() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "block";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M3userScore == tour3M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseUser > tour3M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M3userWonBy").textContent = (tour3M3runToChaseUser - tour3M3compScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By " + (tour3M3runToChaseUser - tour3M3compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M3bowlSecondR4() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "block";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M3userScore == tour3M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseUser > tour3M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M3userWonBy").textContent = (tour3M3runToChaseUser - tour3M3compScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By " + (tour3M3runToChaseUser - tour3M3compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M3bowlSecondR5() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "block";
    document.getElementById('tour3M3num-B6').style.display = "none";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M3userScore == tour3M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseUser > tour3M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M3userWonBy").textContent = (tour3M3runToChaseUser - tour3M3compScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By " + (tour3M3runToChaseUser - tour3M3compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M3bowlSecondR6() {
    document.getElementById('tour3M3fist-2').style.display = "none";
    document.getElementById('tour3M3num-B1').style.display = "none";
    document.getElementById('tour3M3num-B2').style.display = "none";
    document.getElementById('tour3M3num-B3').style.display = "none";
    document.getElementById('tour3M3num-B4').style.display = "none";
    document.getElementById('tour3M3num-B5').style.display = "none";
    document.getElementById('tour3M3num-B6').style.display = "block";
    document.getElementById('tour3M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "block";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "block";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "block";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "block";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "block";
        document.getElementById('tour3M3num-A6').style.display = "none";
        tour3M3compScore += x;
        document.getElementById('tour3M3compRun').textContent = tour3M3compScore;
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour3M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M3fist-1').style.display = "none";
        document.getElementById('tour3M3num-A1').style.display = "none";
        document.getElementById('tour3M3num-A2').style.display = "none";
        document.getElementById('tour3M3num-A3').style.display = "none";
        document.getElementById('tour3M3num-A4').style.display = "none";
        document.getElementById('tour3M3num-A5').style.display = "none";
        document.getElementById('tour3M3num-A6').style.display = "block";
        var tour3M3runToChaseUser = tour3M3userScore + 1;
        if (tour3M3runToChaseUser <= tour3M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3compWins").style.display = "block";
                document.getElementById("tour3M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M3userScore == tour3M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3tie").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M3runToChaseUser > tour3M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M3userWonBy").textContent = (tour3M3runToChaseUser - tour3M3compScore);
                document.getElementById("tour3M3matchEnd").style.display = "block";
                document.getElementById("tour3M3userWins").style.display = "block";
                document.getElementById("tour3M3batFirstWinUser").style.display = "block";
                document.getElementById("tour3M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M3R1").disabled = true;
                document.getElementById("tour3M3R2").disabled = true;
                document.getElementById("tour3M3R3").disabled = true;
                document.getElementById("tour3M3R4").disabled = true;
                document.getElementById("tour3M3R5").disabled = true;
                document.getElementById("tour3M3R6").disabled = true;
                document.getElementById("tour3M3winner-container").style.display = "block";
                document.getElementById('tour3M3winner').textContent = "You Won By " + (tour3M3runToChaseUser - tour3M3compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }


    }


}

function tour3M3nextMatch() {
    document.getElementById("tour3M3main-container").style.display = "none";
    document.getElementById('tour3-match').style.display = "flex";
    document.getElementById("tour3M3compWins").style.display = "none";
    document.getElementById("tour3M3userWins").style.display = "none";
    document.getElementById("tour3M3tie").style.display = "none";
    document.getElementById("tour3M3start").style.backgroundColor = '#685d5d';
    document.getElementById("tour3M3start").style.color = 'black';
    document.getElementById("tour3return1").style.display = "block";
    document.getElementById("tour3-match").style.filter = 'blur(5px)';
    
    
    if(tour3userpoints > tour3comppoints) {
        document.getElementById("tour3M3wintitle").innerText = "You Won The Tournament!";
        
    }
    else if(tour3userpoints < tour3comppoints) {
        document.getElementById("tour3M3wintitle").innerText = "Opponent Won The Tournament!";
        
    }
    else if(tour3userpoints == tour3comppoints){
        document.getElementById("tour3M3wintitle").innerText = "Series Tied!";
        
    }

}

function returnhome() {
    location.reload();
    
}

// function btnClose() {
//     document.getElementById("halfCenturyUser").style.display = "none";
// }
