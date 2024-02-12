function tour5M3start() {
    document.getElementById('tour5M3start').disabled = true;
    document.getElementById("tour5M3toss").style.display = "block";
    document.getElementById("tour5-match").style.display = "none";
    document.getElementById("gameName").style.fontSize = "20px";

}

// function pressing() {
//     document.getElementById('tour5-match').style.display = "block";
//     document.getElementById('tour5M3toss').style.display = "none";
// }



// var tour5odd1 = document.getElementById('tour5M3odd');
// tour5odd1.onclick = tour5odd;

// let g = Math.floor(Math.random() * 6) + 1;
// console.log("value is", g);

function tour5M3OddStart() {
    document.getElementById("tour5M3toss").style.display = "none";
    document.getElementById("tour5M3fist-T1").style.display = "block";
    document.getElementById("tour5M3fist-T2").style.display = "block";
    document.getElementById("tour5M3numberSelectorT").style.display = "block";

    var tour5M3rt1 = document.getElementById('tour5M3RT1');
    tour5M3rt1.onclick = tour5M3OddRT1;
    var tour5M3rt2 = document.getElementById('tour5M3RT2');
    tour5M3rt2.onclick = tour5M3OddRT2;
    var tour5M3rt3 = document.getElementById('tour5M3RT3');
    tour5M3rt3.onclick = tour5M3OddRT3;
    var tour5M3rt4 = document.getElementById('tour5M3RT4');
    tour5M3rt4.onclick = tour5M3OddRT4;
    var tour5M3rt5 = document.getElementById('tour5M3RT5');
    tour5M3rt5.onclick = tour5M3OddRT5;
    var tour5M3rt6 = document.getElementById('tour5M3RT6');
    tour5M3rt6.onclick = tour5M3OddRT6;
}

// var tour5eve1 = document.getElementById('tour5M3eve');
// tour5eve1.onclick = tour5M3eve;

function tour5M3eve() {
    document.getElementById("tour5M3toss").style.display = "none";
    document.getElementById("tour5M3fist-T1").style.display = "block";
    document.getElementById("tour5M3fist-T2").style.display = "block";
    document.getElementById("tour5M3numberSelectorT").style.display = "block";

    var tour5M3rt1 = document.getElementById('tour5M3RT1');
    tour5M3rt1.onclick = tour5M3EveRT1;
    var tour5M3rt2 = document.getElementById('tour5M3RT2');
    tour5M3rt2.onclick = tour5M3EveRT2;
    var tour5M3rt3 = document.getElementById('tour5M3RT3');
    tour5M3rt3.onclick = tour5M3EveRT3;
    var tour5M3rt4 = document.getElementById('tour5M3RT4');
    tour5M3rt4.onclick = tour5M3EveRT4;
    var tour5M3rt5 = document.getElementById('tour5M3RT5');
    tour5M3rt5.onclick = tour5M3EveRT5;
    var tour5M3rt6 = document.getElementById('tour5M3RT6');
    tour5M3rt6.onclick = tour5M3EveRT6;
}




function tour5M3forOdd1() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour5M3selectionByUser").style.display = "block";

        document.getElementById("tour5M3tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour5M3selectionByUser").style.display = "none";
        document.getElementById("tour5M3tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M3selectionByComp").style.display = "block";
        document.getElementById("tour5M3RT1").disabled = true;
        document.getElementById("tour5M3RT2").disabled = true;
        document.getElementById("tour5M3RT3").disabled = true;
        document.getElementById("tour5M3RT4").disabled = true;
        document.getElementById("tour5M3RT5").disabled = true;
        document.getElementById("tour5M3RT6").disabled = true;
        var tour5M3opt = ['Bat', 'Bowl'];
        const tour5M3chose = Math.floor(Math.random() * tour5M3opt.length);
        const tour5M3selectedopt = tour5M3opt[tour5M3chose];
        document.getElementById("tour5M3compOpt").innerText = tour5M3selectedopt;
        var tour5M3selected = 'Bat';
        if (tour5M3selectedopt.includes(tour5M3selected)) {
            // console.log(`bat selected`);
            tour5M3matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour5M3matchStartBat();
        }
    }
}
function tour5M3forOdd2() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour5M3selectionByUser").style.display = "block";

        document.getElementById("tour5M3tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour5M3selectionByUser").style.display = "none";
        document.getElementById("tour5M3tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M3selectionByComp").style.display = "block";
        document.getElementById("tour5M3RT1").disabled = true;
        document.getElementById("tour5M3RT2").disabled = true;
        document.getElementById("tour5M3RT3").disabled = true;
        document.getElementById("tour5M3RT4").disabled = true;
        document.getElementById("tour5M3RT5").disabled = true;
        document.getElementById("tour5M3RT6").disabled = true;
        var tour5M3opt = ['Bat', 'Bowl'];
        const tour5M3chose = Math.floor(Math.random() * tour5M3opt.length);
        const tour5M3selectedopt = tour5M3opt[tour5M3chose];
        document.getElementById("tour5M3compOpt").innerText = tour5M3selectedopt;
        var tour5M3selected = 'Bat';
        if (tour5M3selectedopt.includes(tour5M3selected)) {
            // console.log(`bat selected`);
            tour5M3matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour5M3matchStartBat();
        }
    }
}

function tour5M3forEve1() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour5M3selectionByUser").style.display = "block";

        document.getElementById("tour5M3tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour5M3selectionByUser").style.display = "none";
        document.getElementById("tour5M3tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M3RT1").disabled = true;
        document.getElementById("tour5M3RT2").disabled = true;
        document.getElementById("tour5M3RT3").disabled = true;
        document.getElementById("tour5M3RT4").disabled = true;
        document.getElementById("tour5M3RT5").disabled = true;
        document.getElementById("tour5M3RT6").disabled = true;
        document.getElementById("tour5M3selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour5M3compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour5M3matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour5M3matchStartBat();
        }
    }
}
function tour5M3forEve2() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour5M3selectionByUser").style.display = "block";

        document.getElementById("tour5M3tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour5M3selectionByUser").style.display = "none";
        document.getElementById("tour5M3tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M3RT1").disabled = true;
        document.getElementById("tour5M3RT2").disabled = true;
        document.getElementById("tour5M3RT3").disabled = true;
        document.getElementById("tour5M3RT4").disabled = true;
        document.getElementById("tour5M3RT5").disabled = true;
        document.getElementById("tour5M3RT6").disabled = true;
        document.getElementById("tour5M3selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour5M3compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour5M3matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour5M3matchStartBat();
        }
    }
}
//CHECK FROM HERE

//console.log()(x);

// If user chose odd
function tour5M3OddRT1() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "block";
    document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    document.getElementById("tour5M3num-TB2").style.display = "none";
    document.getElementById("tour5M3num-TB3").style.display = "none";
    document.getElementById("tour5M3num-TB4").style.display = "none";
    document.getElementById("tour5M3num-TB5").style.display = "none";
    document.getElementById("tour5M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M3forOdd1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}

function tour5M3OddRT2() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "none";
    document.getElementById("tour5M3num-TB2").style.display = "block";
    document.getElementById("tour5M3num-TB2").style.marginLeft = "550px";
    document.getElementById("tour5M3num-TB3").style.display = "none";
    document.getElementById("tour5M3num-TB4").style.display = "none";
    document.getElementById("tour5M3num-TB5").style.display = "none";
    document.getElementById("tour5M3num-TB6").style.display = "none";

    setTimeout(function () {
        tour5M3forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}

function tour5M3OddRT3() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "none";
    document.getElementById("tour5M3num-TB2").style.display = "none";
    document.getElementById("tour5M3num-TB3").style.display = "block";
    document.getElementById("tour5M3num-TB3").style.marginLeft = "570px";
    document.getElementById("tour5M3num-TB4").style.display = "none";
    document.getElementById("tour5M3num-TB5").style.display = "none";
    document.getElementById("tour5M3num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M3forOdd1();
    }, 1000);
    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}

function tour5M3OddRT4() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "none";
    document.getElementById("tour5M3num-TB2").style.display = "none";
    document.getElementById("tour5M3num-TB3").style.display = "none";
    document.getElementById("tour5M3num-TB4").style.display = "block";
    document.getElementById("tour5M3num-TB4").style.marginLeft = "550px";
    document.getElementById("tour5M3num-TB5").style.display = "none";
    document.getElementById("tour5M3num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M3forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}

function tour5M3OddRT5() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "none";
    document.getElementById("tour5M3num-TB2").style.display = "none";
    document.getElementById("tour5M3num-TB3").style.display = "none";
    document.getElementById("tour5M3num-TB4").style.display = "none";
    document.getElementById("tour5M3num-TB5").style.display = "block";
    document.getElementById("tour5M3num-TB5").style.marginLeft = "540px";
    document.getElementById("tour5M3num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M3forOdd1();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}

function tour5M3OddRT6() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "none";
    document.getElementById("tour5M3num-TB2").style.display = "none";
    document.getElementById("tour5M3num-TB3").style.display = "none";
    document.getElementById("tour5M3num-TB4").style.display = "none";
    document.getElementById("tour5M3num-TB5").style.display = "none";
    document.getElementById("tour5M3num-TB6").style.display = "block";
    document.getElementById("tour5M3num-TB6").style.marginLeft = "570px";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M3forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}
// If user chose Eve
function tour5M3EveRT1() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "block";
    document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    document.getElementById("tour5M3num-TB2").style.display = "none";
    document.getElementById("tour5M3num-TB3").style.display = "none";
    document.getElementById("tour5M3num-TB4").style.display = "none";
    document.getElementById("tour5M3num-TB5").style.display = "none";
    document.getElementById("tour5M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M3forEve1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}

function tour5M3EveRT2() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "none";
    document.getElementById("tour5M3num-TB2").style.marginLeft = "570px";
    document.getElementById("tour5M3num-TB2").style.display = "block";
    document.getElementById("tour5M3num-TB3").style.display = "none";
    document.getElementById("tour5M3num-TB4").style.display = "none";
    document.getElementById("tour5M3num-TB5").style.display = "none";
    document.getElementById("tour5M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M3forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}

function tour5M3EveRT3() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "none";
    document.getElementById("tour5M3num-TB3").style.marginLeft = "570px";
    document.getElementById("tour5M3num-TB2").style.display = "none";
    document.getElementById("tour5M3num-TB3").style.display = "block";
    document.getElementById("tour5M3num-TB4").style.display = "none";
    document.getElementById("tour5M3num-TB5").style.display = "none";
    document.getElementById("tour5M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M3forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}

function tour5M3EveRT4() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "none";
    document.getElementById("tour5M3num-TB4").style.marginLeft = "570px";
    document.getElementById("tour5M3num-TB2").style.display = "none";
    document.getElementById("tour5M3num-TB3").style.display = "none";
    document.getElementById("tour5M3num-TB4").style.display = "block";
    document.getElementById("tour5M3num-TB5").style.display = "none";
    document.getElementById("tour5M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M3forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}

function tour5M3EveRT5() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "none";
    document.getElementById("tour5M3num-TB5").style.marginLeft = "570px";
    document.getElementById("tour5M3num-TB2").style.display = "none";
    document.getElementById("tour5M3num-TB3").style.display = "none";
    document.getElementById("tour5M3num-TB4").style.display = "none";
    document.getElementById("tour5M3num-TB5").style.display = "block";
    document.getElementById("tour5M3num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M3forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}

function tour5M3EveRT6() {
    document.getElementById("tour5M3fist-T2").style.display = "none";
    document.getElementById("tour5M3num-TB1").style.display = "none";
    document.getElementById("tour5M3num-TB6").style.marginLeft = "570px";
    document.getElementById("tour5M3num-TB2").style.display = "none";
    document.getElementById("tour5M3num-TB3").style.display = "none";
    document.getElementById("tour5M3num-TB4").style.display = "none";
    document.getElementById("tour5M3num-TB5").style.display = "none";
    document.getElementById("tour5M3num-TB6").style.display = "block";
    //console.log()(x);
    setTimeout(function () {

        tour5M3forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "block";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "block";
        document.getElementById("tour5M3num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "block";
        document.getElementById("tour5M3num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "block";
        document.getElementById("tour5M3num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M3num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M3fist-T1").style.display = "none";
        document.getElementById("tour5M3num-TA1").style.display = "none";
        document.getElementById("tour5M3num-TA2").style.display = "none";
        document.getElementById("tour5M3num-TA3").style.display = "none";
        document.getElementById("tour5M3num-TA4").style.display = "none";
        document.getElementById("tour5M3num-TA5").style.display = "none";
        document.getElementById("tour5M3num-TA6").style.display = "block";
        document.getElementById("tour5M3num-TA6").style.marginLeft = "40%";
    }
}

/* TOSS END */

/* ENTERING MATCH */
function tour5M3cont() {
    document.getElementById("tour5M3tossing").style.display = "none";
    document.getElementById("tour5M3selectionByComp").style.display = "none";
    document.getElementById("tour5M3main-container").style.display = "block";
    document.getElementById("tour5M3main-container").style.filter = 'blur(0px)';
    document.getElementById("tour5M3R1").disabled = false;
    document.getElementById("tour5M3R2").disabled = false;
    document.getElementById("tour5M3R3").disabled = false;
    document.getElementById("tour5M3R4").disabled = false;
    document.getElementById("tour5M3R5").disabled = false;
    document.getElementById("tour5M3R6").disabled = false;
}
function tour5M3contChaseUser() {
    document.getElementById('tour5M3targetChaseComp').style.display = "none";
    document.getElementById('tour5M3targetChaseUser').style.display = "none";
    document.getElementById("tour5M3R1").disabled = false;
    document.getElementById("tour5M3R2").disabled = false;
    document.getElementById("tour5M3R3").disabled = false;
    document.getElementById("tour5M3R4").disabled = false;
    document.getElementById("tour5M3R5").disabled = false;
    document.getElementById("tour5M3R6").disabled = false;
}
function tour5M3contChaseComp() {
    document.getElementById('tour5M3targetChaseComp').style.display = "none";
    document.getElementById('tour5M3targetChaseUser').style.display = "none";
    document.getElementById("tour5M3R1").disabled = false;
    document.getElementById("tour5M3R2").disabled = false;
    document.getElementById("tour5M3R3").disabled = false;
    document.getElementById("tour5M3R4").disabled = false;
    document.getElementById("tour5M3R5").disabled = false;
    document.getElementById("tour5M3R6").disabled = false;
}


function tour5M3matchStartBowl() {
    tossing = document.getElementById("tour5M3tossing").style.display = "none";
    tossing = document.getElementById("tour5M3selectionByUser").style.display = "none";
    tossing = document.getElementById("tour5M3main-container").style.display = "block";
    tour5M3bowlfirst();
}

function tour5M3bowlfirst() {
    var r1 = document.getElementById('tour5M3R1');
    r1.onclick = tour5M3bowlFirstR1;
    var r2 = document.getElementById('tour5M3R2');
    r2.onclick = tour5M3bowlFirstR2;
    var r3 = document.getElementById('tour5M3R3');
    r3.onclick = tour5M3bowlFirstR3;
    var r4 = document.getElementById('tour5M3R4');
    r4.onclick = tour5M3bowlFirstR4;
    var r5 = document.getElementById('tour5M3R5');
    r5.onclick = tour5M3bowlFirstR5;
    var r6 = document.getElementById('tour5M3R6');
    r6.onclick = tour5M3bowlFirstR6;
}

function tour5M3batSecond() {
    var r1 = document.getElementById('tour5M3R1');
    r1.onclick = tour5M3batSecondR1;
    var r2 = document.getElementById('tour5M3R2');
    r2.onclick = tour5M3batSecondR2;
    var r3 = document.getElementById('tour5M3R3');
    r3.onclick = tour5M3batSecondR3;
    var r4 = document.getElementById('tour5M3R4');
    r4.onclick = tour5M3batSecondR4;
    var r5 = document.getElementById('tour5M3R5');
    r5.onclick = tour5M3batSecondR5;
    var r6 = document.getElementById('tour5M3R6');
    r6.onclick = tour5M3batSecondR6;
}


 var tour5M3compScore = 0;


function tour5M3bowlFirstR1() {
    let y = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "block";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "0%";
    if (y == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        document.getElementById('tour5M3targetValue').textContent = tour5M3compScore + 1;
        document.getElementById('tour5M3targetChaseUser').style.display = "block";
        document.getElementById('tour5M3runChaseUser').textContent = tour5M3compScore + 1;
        tour5M3batSecond();
    }
    else if (y == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += y;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (y == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += y;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (y == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += y;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (y == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += y;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (y == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
         document.getElementById('tour5M3num-A5').style.display = "none";
         document.getElementById('tour5M3num-A6').style.display = "block";
         tour5M3compScore += y;
         document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
     }


}

 function tour5M3bowlFirstR2() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "block";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let y = Math.floor(Math.random() * 6) + 1;
    if (y == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += y;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (y == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        document.getElementById('tour5M3targetValue').innerText = tour5M3compScore + 1;
        document.getElementById('tour5M3targetChaseUser').style.display = "block";
        document.getElementById('tour5M3runChaseUser').textContent = tour5M3compScore + 1;
        tour5M3batSecond();

    }
    else if (y == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += y;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (y == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += y;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (y == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += y;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (y == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3compScore += y;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }


}

function tour5M3bowlFirstR3() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "block";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        document.getElementById('tour5M3targetValue').innerText = tour5M3compScore + 1;
        document.getElementById('tour5M3targetChaseUser').style.display = "block";
        document.getElementById('tour5M3runChaseUser').textContent = tour5M3compScore + 1;
        tour5M3batSecond();
    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }


}

function tour5M3bowlFirstR4() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "block";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        document.getElementById('tour5M3targetValue').innerText = tour5M3compScore + 1;
        document.getElementById('tour5M3targetChaseUser').style.display = "block";
        document.getElementById('tour5M3runChaseUser').textContent = tour5M3compScore + 1;
        tour5M3batSecond();

    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }


}

function tour5M3bowlFirstR5() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "block";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        document.getElementById('tour5M3targetValue').innerText = tour5M3compScore + 1;
        document.getElementById('tour5M3targetChaseUser').style.display = "block";
        document.getElementById('tour5M3runChaseUser').textContent = tour5M3compScore + 1;
        tour5M3batSecond();

    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }


}

function tour5M3bowlFirstR6() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "block";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;

    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        document.getElementById('tour5M3targetValue').textContent = tour5M3compScore + 1;
        document.getElementById('tour5M3targetChaseUser').style.display = "block";
        document.getElementById('tour5M3runChaseUser').textContent = tour5M3compScore + 1;
        tour5M3batSecond();

    }


}

 var tour5M3userScore = 0;
 // var tour5M3runToChaseUser = (tour5M3userScore + 1);

function tour5M3batSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "block";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "0%";
    /*var halfCentury = false;
    if (userScore >= 50 && halfCentury == false) {
        document.getElementById("halfCenturyUser").style.display = "block";
        halfCentury == true;
    }*/
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 1;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M3compScore == tour5M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseComp > tour5M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M3compWonBy").textContent = (tour5M3runToChaseComp - tour5M3userScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By " + (tour5M3runToChaseComp - tour5M3userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 1;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp < tour5M3userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp < tour5M3userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp < tour5M3userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp < tour5M3userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3userScore = tour5M3userScore + 1;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp < tour5M3userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M3batSecondR2() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "block";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 2;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M3compScore == tour5M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseComp > tour5M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M3compWonBy").textContent = (tour5M3runToChaseComp - tour5M3userScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By " + (tour5M3runToChaseComp - tour5M3userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 2;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 2;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                          //If the user chased the target
            document.getElementById("tour5M3matchEnd").style.display = "block";
            document.getElementById("tour5M3userWins").style.display = "block";
            document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
            document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 2;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3userScore = tour5M3userScore + 2;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M3batSecondR3() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "block";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 3;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 3;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M3compScore == tour5M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseComp > tour5M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M3compWonBy").textContent = (tour5M3runToChaseComp - tour5M3userScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By " + (tour5M3runToChaseComp - tour5M3userScore) + " Runs";
                tourecomppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 3;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 3;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3userScore = tour5M3userScore + 3;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M3batSecondR4() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "block";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 4;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 4;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 4;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                tour5userpoints++;
                
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
            }, 1000);
        } else if (tour5M3compScore == tour5M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseComp > tour5M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M3compWonBy").textContent = (tour5M3runToChaseComp - tour5M3userScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By " + (tour5M3runToChaseComp - tour5M3userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 4;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3userScore = tour5M3userScore + 4;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M3batSecondR5() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "block";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 5;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 5;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 5;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 5;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M3compScore == tour5M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseComp > tour5M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M3compWonBy").textContent = (tour5M3runToChaseComp - tour5M3userScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By " + (tour5M3runToChaseComp - tour5M3userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3userScore = tour5M3userScore + 5;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M3batSecondR6() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "block";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 6;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 6;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 6;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 6;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 6;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        var tour5M3runToChaseComp = tour5M3compScore + 1;
        if (tour5M3runToChaseComp <= tour5M3userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M3compScore == tour5M3userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseComp > tour5M3userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M3compWonBy").textContent = (tour5M3runToChaseComp - tour5M3userScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By " + (tour5M3runToChaseComp - tour5M3userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }


}

function tour5M3matchStartBat() {
        tossing = document.getElementById("tour5M3tossing").style.display = "none";
        tossing = document.getElementById("tour5M3selectionByUser").style.display = "none";
        tossing = document.getElementById("tour5M3main-container").style.display = "block";
        tour5M3batFirst();
}

function tour5M3batFirst() {
    var r1 = document.getElementById('tour5M3R1');
    r1.onclick = tour5M3batFirstR1;
    var r2 = document.getElementById('tour5M3R2');
    r2.onclick = tour5M3batFirstR2;
    var r3 = document.getElementById('tour5M3R3');
    r3.onclick = tour5M3batFirstR3;
    var r4 = document.getElementById('tour5M3R4');
    r4.onclick = tour5M3batFirstR4;
    var r5 = document.getElementById('tour5M3R5');
    r5.onclick = tour5M3batFirstR5;
    var r6 = document.getElementById('tour5M3R6');
    r6.onclick = tour5M3batFirstR6;
}

// let runtextUser = document.getElementById('userRun').innerText;
// var halfCentury = false;
// if (runtextUser >= 50 && halfCentury == false) {
//     document.getElementById("halfCenturyUser").style.display = "block";
//     halfCentury == true;
// }

function tour5M3batFirstR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "block";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        document.getElementById('tour5M3targetValue').textContent = tour5M3userScore + 1;
        document.getElementById('tour5M3targetChaseComp').style.display = "block";
        document.getElementById('tour5M3runChaseComp').textContent = tour5M3userScore + 1;
        tour5M3bowlSecond();
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 1;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 1;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 1;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 1;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3userScore = tour5M3userScore + 1;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }


}

function tour5M3batFirstR2() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "block";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 2;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        document.getElementById('tour5M3targetValue').innerText = tour5M3userScore + 1;
        document.getElementById('tour5M3targetChaseComp').style.display = "block";
        document.getElementById('tour5M3runChaseComp').textContent = tour5M3userScore + 1;
        tour5M3bowlSecond();

    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 2;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 2;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 2;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3userScore = tour5M3userScore + 2;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }


}

function tour5M3batFirstR3() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "block";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 3;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 3;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        document.getElementById('tour5M3targetValue').innerText = tour5M3userScore + 1;
        document.getElementById('tour5M3targetChaseComp').style.display = "block";
        document.getElementById('tour5M3runChaseComp').textContent = tour5M3userScore + 1;
        tour5M3bowlSecond();
    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 3;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 3;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3userScore = tour5M3userScore + 3;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }


}

function tour5M3batFirstR4() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "block";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 4;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 4;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 4;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        document.getElementById('tour5M3targetValue').innerText = tour5M3userScore + 1;
        document.getElementById('tour5M3targetChaseComp').style.display = "block";
        document.getElementById('tour5M3runChaseComp').textContent = tour5M3userScore + 1;
        tour5M3bowlSecond();

    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 4;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3userScore = tour5M3userScore + 4;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }


}

function tour5M3batFirstR5() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "block";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 5;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 5;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 5;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 5;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        document.getElementById('tour5M3targetValue').innerText = tour5M3userScore + 1;
        document.getElementById('tour5M3targetChaseComp').style.display = "block";
        document.getElementById('tour5M3runChaseComp').textContent = tour5M3userScore + 1;
        tour5M3bowlSecond();

    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3userScore = tour5M3userScore + 5;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }


}

function tour5M3batFirstR6() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "block";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 6;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 6;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;

    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 6;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 6;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3userScore = tour5M3userScore + 6;
        document.getElementById('tour5M3userRun').textContent = tour5M3userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        document.getElementById('tour5M3targetValue').innerText = tour5M3userScore + 1;
        document.getElementById('tour5M3targetChaseComp').style.display = "block";
        document.getElementById('tour5M3runChaseComp').textContent = tour5M3userScore + 1;
        tour5M3bowlSecond();

    }


}

function tour5M3bowlSecond() {
    var r1 = document.getElementById('tour5M3R1');
    r1.onclick = tour5M3bowlSecondR1;
    var r2 = document.getElementById('tour5M3R2');
    r2.onclick = tour5M3bowlSecondR2;
    var r3 = document.getElementById('tour5M3R3');
    r3.onclick = tour5M3bowlSecondR3;
    var r4 = document.getElementById('tour5M3R4');
    r4.onclick = tour5M3bowlSecondR4;
    var r5 = document.getElementById('tour5M3R5');
    r5.onclick = tour5M3bowlSecondR5;
    var r6 = document.getElementById('tour5M3R6');
    r6.onclick = tour5M3bowlSecondR6;
}

function tour5M3bowlSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "block";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M3userScore == tour5M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseUser > tour5M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M3userWonBy").textContent = (tour5M3runToChaseUser - tour5M3compScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By " + (tour5M3runToChaseUser - tour5M3compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


 }

function tour5M3bowlSecondR2() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "block";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M3userScore == tour5M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseUser > tour5M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M3userWonBy").textContent = (tour5M3runToChaseUser - tour5M3compScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By " + (tour5M3runToChaseUser - tour5M3compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M3bowlSecondR3() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "block";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M3userScore == tour5M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseUser > tour5M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M3userWonBy").textContent = (tour5M3runToChaseUser - tour5M3compScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By " + (tour5M3runToChaseUser - tour5M3compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M3bowlSecondR4() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "block";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M3userScore == tour5M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseUser > tour5M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M3userWonBy").textContent = (tour5M3runToChaseUser - tour5M3compScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By " + (tour5M3runToChaseUser - tour5M3compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M3bowlSecondR5() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "block";
    document.getElementById('tour5M3num-B6').style.display = "none";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M3userScore == tour5M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseUser > tour5M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M3userWonBy").textContent = (tour5M3runToChaseUser - tour5M3compScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By " + (tour5M3runToChaseUser - tour5M3compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M3bowlSecondR6() {
    document.getElementById('tour5M3fist-2').style.display = "none";
    document.getElementById('tour5M3num-B1').style.display = "none";
    document.getElementById('tour5M3num-B2').style.display = "none";
    document.getElementById('tour5M3num-B3').style.display = "none";
    document.getElementById('tour5M3num-B4').style.display = "none";
    document.getElementById('tour5M3num-B5').style.display = "none";
    document.getElementById('tour5M3num-B6').style.display = "block";
    document.getElementById('tour5M3userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "block";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "block";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "block";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "block";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "block";
        document.getElementById('tour5M3num-A6').style.display = "none";
        tour5M3compScore += x;
        document.getElementById('tour5M3compRun').textContent = tour5M3compScore;
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M3compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M3fist-1').style.display = "none";
        document.getElementById('tour5M3num-A1').style.display = "none";
        document.getElementById('tour5M3num-A2').style.display = "none";
        document.getElementById('tour5M3num-A3').style.display = "none";
        document.getElementById('tour5M3num-A4').style.display = "none";
        document.getElementById('tour5M3num-A5').style.display = "none";
        document.getElementById('tour5M3num-A6').style.display = "block";
        var tour5M3runToChaseUser = tour5M3userScore + 1;
        if (tour5M3runToChaseUser <= tour5M3compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3compWins").style.display = "block";
                document.getElementById("tour5M3bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M3userScore == tour5M3compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3tie").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M3runToChaseUser > tour5M3compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M3userWonBy").textContent = (tour5M3runToChaseUser - tour5M3compScore);
                document.getElementById("tour5M3matchEnd").style.display = "block";
                document.getElementById("tour5M3userWins").style.display = "block";
                document.getElementById("tour5M3batFirstWinUser").style.display = "block";
                document.getElementById("tour5M3main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M3R1").disabled = true;
                document.getElementById("tour5M3R2").disabled = true;
                document.getElementById("tour5M3R3").disabled = true;
                document.getElementById("tour5M3R4").disabled = true;
                document.getElementById("tour5M3R5").disabled = true;
                document.getElementById("tour5M3R6").disabled = true;
                document.getElementById("tour5M3winner-container").style.display = "block";
                document.getElementById('tour5M3winner').textContent = "You Won By " + (tour5M3runToChaseUser - tour5M3compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }


    }


}

function tour5M3nextMatch() {
    document.getElementById("tour5M3main-container").style.display = "none";
    document.getElementById('tour5-match').style.display = "block";
    document.getElementById('tour5M4start').disabled = false;
    document.getElementById("tour5M3compWins").style.display = "none";
    document.getElementById("tour5M3userWins").style.display = "none";
    document.getElementById("tour5M3tie").style.display = "none";
    document.getElementById("tour5M3start").style.backgroundColor = '#685d5d';
    document.getElementById("tour5M3start").style.color = 'black';
    document.getElementById("tour5M4start").style.backgroundColor = 'rgb(13, 204, 13)';
    document.getElementById("tour5M4start").style.color = 'black';
    
    
    if(tour5userpoints == 3) {
    document.getElementById("tour5M3return").style.display = "block";
    document.getElementById("tour5-match").style.filter = 'blur(5px)';
        document.getElementById("tour5M3wintitle").innerText = "You Won The Tournament!";
        
    }
    else if(tour5comppoints == 3) {
        document.getElementById("tour5M3return").style.display = "block";
        document.getElementById("tour5-match").style.filter = 'blur(5px)';
        document.getElementById("tour5M3wintitle").innerText = "Opponent Won The Tournament!";
        
    }
    
}

function returnhome() {
    location.reload();
    
}

// document.getElementById("tour5return").style.display = "block";
// document.getElementById("tour5-match").style.filter = 'blur(5px)';
// function returnhome() {
//     location.reload();
// }

// function btnClose() {
//     document.getElementById("halfCenturyUser").style.display = "none";
// }
