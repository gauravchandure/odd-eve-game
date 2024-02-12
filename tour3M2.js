
function tour3M2start() {
    document.getElementById('tour3M2start').disabled = true;
    document.getElementById('tour3M3start').disabled = false;
    document.getElementById("tour3M2toss").style.display = "block";
    document.getElementById("tour3-match").style.display = "none";
    document.getElementById("gameName").style.fontSize = "20px";

}

// function pressing() {
//     document.getElementById('tour3-match').style.display = "block";
//     document.getElementById('tour3M2toss').style.display = "none";
// }



// var tour3odd1 = document.getElementById('tour3M2odd');
// tour3odd1.onclick = tour3odd;

// let z = Math.floor(Math.random() * 6) + 1;
// console.log("value is", z);

function tour3M2OddStart() {
    document.getElementById("tour3M2toss").style.display = "none";
    document.getElementById("tour3M2fist-T1").style.display = "block";
    document.getElementById("tour3M2fist-T2").style.display = "block";
    document.getElementById("tour3M2numberSelectorT").style.display = "block";

    var tour3M2rt1 = document.getElementById('tour3M2RT1');
    tour3M2rt1.onclick = tour3M2OddRT1;
    var tour3M2rt2 = document.getElementById('tour3M2RT2');
    tour3M2rt2.onclick = tour3M2OddRT2;
    var tour3M2rt3 = document.getElementById('tour3M2RT3');
    tour3M2rt3.onclick = tour3M2OddRT3;
    var tour3M2rt4 = document.getElementById('tour3M2RT4');
    tour3M2rt4.onclick = tour3M2OddRT4;
    var tour3M2rt5 = document.getElementById('tour3M2RT5');
    tour3M2rt5.onclick = tour3M2OddRT5;
    var tour3M2rt6 = document.getElementById('tour3M2RT6');
    tour3M2rt6.onclick = tour3M2OddRT6;
}

// var tour3eve1 = document.getElementById('tour3M2eve');
// tour3eve1.onclick = tour3M2eve;

function tour3M2eve() {
    document.getElementById("tour3M2toss").style.display = "none";
    document.getElementById("tour3M2fist-T1").style.display = "block";
    document.getElementById("tour3M2fist-T2").style.display = "block";
    document.getElementById("tour3M2numberSelectorT").style.display = "block";

    var tour3M2rt1 = document.getElementById('tour3M2RT1');
    tour3M2rt1.onclick = tour3M2EveRT1;
    var tour3M2rt2 = document.getElementById('tour3M2RT2');
    tour3M2rt2.onclick = tour3M2EveRT2;
    var tour3M2rt3 = document.getElementById('tour3M2RT3');
    tour3M2rt3.onclick = tour3M2EveRT3;
    var tour3M2rt4 = document.getElementById('tour3M2RT4');
    tour3M2rt4.onclick = tour3M2EveRT4;
    var tour3M2rt5 = document.getElementById('tour3M2RT5');
    tour3M2rt5.onclick = tour3M2EveRT5;
    var tour3M2rt6 = document.getElementById('tour3M2RT6');
    tour3M2rt6.onclick = tour3M2EveRT6;
}




function tour3M2forOdd1() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour3M2selectionByUser").style.display = "block";

        document.getElementById("tour3M2tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour3M2selectionByUser").style.display = "none";
        document.getElementById("tour3M2tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M2selectionByComp").style.display = "block";
        document.getElementById("tour3M2RT1").disabled = true;
        document.getElementById("tour3M2RT2").disabled = true;
        document.getElementById("tour3M2RT3").disabled = true;
        document.getElementById("tour3M2RT4").disabled = true;
        document.getElementById("tour3M2RT5").disabled = true;
        document.getElementById("tour3M2RT6").disabled = true;
        var tour3M2opt = ['Bat', 'Bowl'];
        const tour3M2chose = Math.floor(Math.random() * tour3M2opt.length);
        const tour3M2selectedopt = tour3M2opt[tour3M2chose];
        document.getElementById("tour3M2compOpt").innerText = tour3M2selectedopt;
        var tour3M2selected = 'Bat';
        if (tour3M2selectedopt.includes(tour3M2selected)) {
            // console.log(`bat selected`);
            tour3M2matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour3M2matchStartBat();
        }
    }
}
function tour3M2forOdd2() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour3M2selectionByUser").style.display = "block";

        document.getElementById("tour3M2tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour3M2selectionByUser").style.display = "none";
        document.getElementById("tour3M2tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M2selectionByComp").style.display = "block";
        document.getElementById("tour3M2RT1").disabled = true;
        document.getElementById("tour3M2RT2").disabled = true;
        document.getElementById("tour3M2RT3").disabled = true;
        document.getElementById("tour3M2RT4").disabled = true;
        document.getElementById("tour3M2RT5").disabled = true;
        document.getElementById("tour3M2RT6").disabled = true;
        var tour3M2opt = ['Bat', 'Bowl'];
        const tour3M2chose = Math.floor(Math.random() * tour3M2opt.length);
        const tour3M2selectedopt = tour3M2opt[tour3M2chose];
        document.getElementById("tour3M2compOpt").innerText = tour3M2selectedopt;
        var tour3M2selected = 'Bat';
        if (tour3M2selectedopt.includes(tour3M2selected)) {
            // console.log(`bat selected`);
            tour3M2matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour3M2matchStartBat();
        }
    }
}

function tour3M2forEve1() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour3M2selectionByUser").style.display = "block";

        document.getElementById("tour3M2tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour3M2selectionByUser").style.display = "none";
        document.getElementById("tour3M2tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M2RT1").disabled = true;
        document.getElementById("tour3M2RT2").disabled = true;
        document.getElementById("tour3M2RT3").disabled = true;
        document.getElementById("tour3M2RT4").disabled = true;
        document.getElementById("tour3M2RT5").disabled = true;
        document.getElementById("tour3M2RT6").disabled = true;
        document.getElementById("tour3M2selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour3M2compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour3M2matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour3M2matchStartBat();
        }
    }
}
function tour3M2forEve2() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour3M2selectionByUser").style.display = "block";

        document.getElementById("tour3M2tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour3M2selectionByUser").style.display = "none";
        document.getElementById("tour3M2tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M2RT1").disabled = true;
        document.getElementById("tour3M2RT2").disabled = true;
        document.getElementById("tour3M2RT3").disabled = true;
        document.getElementById("tour3M2RT4").disabled = true;
        document.getElementById("tour3M2RT5").disabled = true;
        document.getElementById("tour3M2RT6").disabled = true;
        document.getElementById("tour3M2selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour3M2compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour3M2matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour3M2matchStartBat();
        }
    }
}
//CHECK FROM HERE

//console.log()(x);

// If user chose odd
function tour3M2OddRT1() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "block";
    document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    document.getElementById("tour3M2num-TB2").style.display = "none";
    document.getElementById("tour3M2num-TB3").style.display = "none";
    document.getElementById("tour3M2num-TB4").style.display = "none";
    document.getElementById("tour3M2num-TB5").style.display = "none";
    document.getElementById("tour3M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M2forOdd1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}

function tour3M2OddRT2() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "none";
    document.getElementById("tour3M2num-TB2").style.display = "block";
    document.getElementById("tour3M2num-TB2").style.marginLeft = "550px";
    document.getElementById("tour3M2num-TB3").style.display = "none";
    document.getElementById("tour3M2num-TB4").style.display = "none";
    document.getElementById("tour3M2num-TB5").style.display = "none";
    document.getElementById("tour3M2num-TB6").style.display = "none";

    setTimeout(function () {
        tour3M2forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}

function tour3M2OddRT3() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "none";
    document.getElementById("tour3M2num-TB2").style.display = "none";
    document.getElementById("tour3M2num-TB3").style.display = "block";
    document.getElementById("tour3M2num-TB3").style.marginLeft = "570px";
    document.getElementById("tour3M2num-TB4").style.display = "none";
    document.getElementById("tour3M2num-TB5").style.display = "none";
    document.getElementById("tour3M2num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M2forOdd1();
    }, 1000);
    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}

function tour3M2OddRT4() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "none";
    document.getElementById("tour3M2num-TB2").style.display = "none";
    document.getElementById("tour3M2num-TB3").style.display = "none";
    document.getElementById("tour3M2num-TB4").style.display = "block";
    document.getElementById("tour3M2num-TB4").style.marginLeft = "550px";
    document.getElementById("tour3M2num-TB5").style.display = "none";
    document.getElementById("tour3M2num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M2forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}

function tour3M2OddRT5() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "none";
    document.getElementById("tour3M2num-TB2").style.display = "none";
    document.getElementById("tour3M2num-TB3").style.display = "none";
    document.getElementById("tour3M2num-TB4").style.display = "none";
    document.getElementById("tour3M2num-TB5").style.display = "block";
    document.getElementById("tour3M2num-TB5").style.marginLeft = "540px";
    document.getElementById("tour3M2num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M2forOdd1();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}

function tour3M2OddRT6() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "none";
    document.getElementById("tour3M2num-TB2").style.display = "none";
    document.getElementById("tour3M2num-TB3").style.display = "none";
    document.getElementById("tour3M2num-TB4").style.display = "none";
    document.getElementById("tour3M2num-TB5").style.display = "none";
    document.getElementById("tour3M2num-TB6").style.display = "block";
    document.getElementById("tour3M2num-TB6").style.marginLeft = "570px";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M2forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}
// If user chose Eve
function tour3M2EveRT1() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "block";
    document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    document.getElementById("tour3M2num-TB2").style.display = "none";
    document.getElementById("tour3M2num-TB3").style.display = "none";
    document.getElementById("tour3M2num-TB4").style.display = "none";
    document.getElementById("tour3M2num-TB5").style.display = "none";
    document.getElementById("tour3M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M2forEve1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}

function tour3M2EveRT2() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "none";
    document.getElementById("tour3M2num-TB2").style.marginLeft = "570px";
    document.getElementById("tour3M2num-TB2").style.display = "block";
    document.getElementById("tour3M2num-TB3").style.display = "none";
    document.getElementById("tour3M2num-TB4").style.display = "none";
    document.getElementById("tour3M2num-TB5").style.display = "none";
    document.getElementById("tour3M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M2forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}

function tour3M2EveRT3() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "none";
    document.getElementById("tour3M2num-TB3").style.marginLeft = "570px";
    document.getElementById("tour3M2num-TB2").style.display = "none";
    document.getElementById("tour3M2num-TB3").style.display = "block";
    document.getElementById("tour3M2num-TB4").style.display = "none";
    document.getElementById("tour3M2num-TB5").style.display = "none";
    document.getElementById("tour3M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M2forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}

function tour3M2EveRT4() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "none";
    document.getElementById("tour3M2num-TB4").style.marginLeft = "570px";
    document.getElementById("tour3M2num-TB2").style.display = "none";
    document.getElementById("tour3M2num-TB3").style.display = "none";
    document.getElementById("tour3M2num-TB4").style.display = "block";
    document.getElementById("tour3M2num-TB5").style.display = "none";
    document.getElementById("tour3M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M2forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}

function tour3M2EveRT5() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "none";
    document.getElementById("tour3M2num-TB5").style.marginLeft = "570px";
    document.getElementById("tour3M2num-TB2").style.display = "none";
    document.getElementById("tour3M2num-TB3").style.display = "none";
    document.getElementById("tour3M2num-TB4").style.display = "none";
    document.getElementById("tour3M2num-TB5").style.display = "block";
    document.getElementById("tour3M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M2forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}

function tour3M2EveRT6() {
    document.getElementById("tour3M2fist-T2").style.display = "none";
    document.getElementById("tour3M2num-TB1").style.display = "none";
    document.getElementById("tour3M2num-TB6").style.marginLeft = "570px";
    document.getElementById("tour3M2num-TB2").style.display = "none";
    document.getElementById("tour3M2num-TB3").style.display = "none";
    document.getElementById("tour3M2num-TB4").style.display = "none";
    document.getElementById("tour3M2num-TB5").style.display = "none";
    document.getElementById("tour3M2num-TB6").style.display = "block";
    //console.log()(x);
    setTimeout(function () {

        tour3M2forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "block";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "block";
        document.getElementById("tour3M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "block";
        document.getElementById("tour3M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "block";
        document.getElementById("tour3M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M2fist-T1").style.display = "none";
        document.getElementById("tour3M2num-TA1").style.display = "none";
        document.getElementById("tour3M2num-TA2").style.display = "none";
        document.getElementById("tour3M2num-TA3").style.display = "none";
        document.getElementById("tour3M2num-TA4").style.display = "none";
        document.getElementById("tour3M2num-TA5").style.display = "none";
        document.getElementById("tour3M2num-TA6").style.display = "block";
        document.getElementById("tour3M2num-TA6").style.marginLeft = "40%";
    }
}

/* TOSS END */

/* ENTERING MATCH */
function tour3M2cont() {
    document.getElementById("tour3M2tossing").style.display = "none";
    document.getElementById("tour3M2selectionByComp").style.display = "none";
    document.getElementById("tour3M2main-container").style.display = "block";
    document.getElementById("tour3M2main-container").style.filter = 'blur(0px)';
    document.getElementById("tour3M2R1").disabled = false;
    document.getElementById("tour3M2R2").disabled = false;
    document.getElementById("tour3M2R3").disabled = false;
    document.getElementById("tour3M2R4").disabled = false;
    document.getElementById("tour3M2R5").disabled = false;
    document.getElementById("tour3M2R6").disabled = false;
}
function tour3M2contChaseUser() {
    document.getElementById('tour3M2targetChaseComp').style.display = "none";
    document.getElementById('tour3M2targetChaseUser').style.display = "none";
    document.getElementById("tour3M2R1").disabled = false;
    document.getElementById("tour3M2R2").disabled = false;
    document.getElementById("tour3M2R3").disabled = false;
    document.getElementById("tour3M2R4").disabled = false;
    document.getElementById("tour3M2R5").disabled = false;
    document.getElementById("tour3M2R6").disabled = false;
}
function tour3M2contChaseComp() {
    document.getElementById('tour3M2targetChaseComp').style.display = "none";
    document.getElementById('tour3M2targetChaseUser').style.display = "none";
    document.getElementById("tour3M2R1").disabled = false;
    document.getElementById("tour3M2R2").disabled = false;
    document.getElementById("tour3M2R3").disabled = false;
    document.getElementById("tour3M2R4").disabled = false;
    document.getElementById("tour3M2R5").disabled = false;
    document.getElementById("tour3M2R6").disabled = false;
}


function tour3M2matchStartBowl() {
    tossing = document.getElementById("tour3M2tossing").style.display = "none";
    tossing = document.getElementById("tour3M2selectionByUser").style.display = "none";
    tossing = document.getElementById("tour3M2main-container").style.display = "block";
    tour3M2bowlfirst();
}

function tour3M2bowlfirst() {
    var r1 = document.getElementById('tour3M2R1');
    r1.onclick = tour3M2bowlFirstR1;
    var r2 = document.getElementById('tour3M2R2');
    r2.onclick = tour3M2bowlFirstR2;
    var r3 = document.getElementById('tour3M2R3');
    r3.onclick = tour3M2bowlFirstR3;
    var r4 = document.getElementById('tour3M2R4');
    r4.onclick = tour3M2bowlFirstR4;
    var r5 = document.getElementById('tour3M2R5');
    r5.onclick = tour3M2bowlFirstR5;
    var r6 = document.getElementById('tour3M2R6');
    r6.onclick = tour3M2bowlFirstR6;
}

function tour3M2batSecond() {
    var r1 = document.getElementById('tour3M2R1');
    r1.onclick = tour3M2batSecondR1;
    var r2 = document.getElementById('tour3M2R2');
    r2.onclick = tour3M2batSecondR2;
    var r3 = document.getElementById('tour3M2R3');
    r3.onclick = tour3M2batSecondR3;
    var r4 = document.getElementById('tour3M2R4');
    r4.onclick = tour3M2batSecondR4;
    var r5 = document.getElementById('tour3M2R5');
    r5.onclick = tour3M2batSecondR5;
    var r6 = document.getElementById('tour3M2R6');
    r6.onclick = tour3M2batSecondR6;
}


 var tour3M2compScore = 0;


function tour3M2bowlFirstR1() {
    let y = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "block";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "0%";
    if (y == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        document.getElementById('tour3M2targetValue').textContent = tour3M2compScore + 1;
        document.getElementById('tour3M2targetChaseUser').style.display = "block";
        document.getElementById('tour3M2runChaseUser').textContent = tour3M2compScore + 1;
        tour3M2batSecond();
    }
    else if (y == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += y;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (y == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += y;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (y == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += y;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (y == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += y;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (y == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
         document.getElementById('tour3M2num-A5').style.display = "none";
         document.getElementById('tour3M2num-A6').style.display = "block";
         tour3M2compScore += y;
         document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
     }


}

 function tour3M2bowlFirstR2() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "block";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let y = Math.floor(Math.random() * 6) + 1;
    if (y == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += y;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (y == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        document.getElementById('tour3M2targetValue').innerText = tour3M2compScore + 1;
        document.getElementById('tour3M2targetChaseUser').style.display = "block";
        document.getElementById('tour3M2runChaseUser').textContent = tour3M2compScore + 1;
        tour3M2batSecond();

    }
    else if (y == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += y;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (y == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += y;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (y == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += y;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (y == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2compScore += y;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }


}

function tour3M2bowlFirstR3() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "block";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        document.getElementById('tour3M2targetValue').innerText = tour3M2compScore + 1;
        document.getElementById('tour3M2targetChaseUser').style.display = "block";
        document.getElementById('tour3M2runChaseUser').textContent = tour3M2compScore + 1;
        tour3M2batSecond();
    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }


}

function tour3M2bowlFirstR4() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "block";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        document.getElementById('tour3M2targetValue').innerText = tour3M2compScore + 1;
        document.getElementById('tour3M2targetChaseUser').style.display = "block";
        document.getElementById('tour3M2runChaseUser').textContent = tour3M2compScore + 1;
        tour3M2batSecond();

    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }


}

function tour3M2bowlFirstR5() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "block";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;

    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        document.getElementById('tour3M2targetValue').innerText = tour3M2compScore + 1;
        document.getElementById('tour3M2targetChaseUser').style.display = "block";
        document.getElementById('tour3M2runChaseUser').textContent = tour3M2compScore + 1;
        tour3M2batSecond();

    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }


}

function tour3M2bowlFirstR6() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "block";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;

    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;

    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        document.getElementById('tour3M2targetValue').textContent = tour3M2compScore + 1;
        document.getElementById('tour3M2targetChaseUser').style.display = "block";
        document.getElementById('tour3M2runChaseUser').textContent = tour3M2compScore + 1;
        tour3M2batSecond();

    }


}

 var tour3M2userScore = 0;
 // var tour3M2runToChaseUser = (tour3M2userScore + 1);

function tour3M2batSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "block";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "0%";
    /*var halfCentury = false;
    if (userScore >= 50 && halfCentury == false) {
        document.getElementById("halfCenturyUser").style.display = "block";
        halfCentury == true;
    }*/
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 1;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M2compScore == tour3M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseComp > tour3M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M2compWonBy").textContent = (tour3M2runToChaseComp - tour3M2userScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By " + (tour3M2runToChaseComp - tour3M2userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 1;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp < tour3M2userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp < tour3M2userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp < tour3M2userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp < tour3M2userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2userScore = tour3M2userScore + 1;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp < tour3M2userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M2batSecondR2() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "block";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 2;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M2compScore == tour3M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseComp > tour3M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M2compWonBy").textContent = (tour3M2runToChaseComp - tour3M2userScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By " + (tour3M2runToChaseComp - tour3M2userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 2;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 2;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                          //If the user chased the target
            document.getElementById("tour3M2matchEnd").style.display = "block";
            document.getElementById("tour3M2userWins").style.display = "block";
            document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
            document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 2;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2userScore = tour3M2userScore + 2;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M2batSecondR3() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "block";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 3;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 3;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M2compScore == tour3M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseComp > tour3M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M2compWonBy").textContent = (tour3M2runToChaseComp - tour3M2userScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By " + (tour3M2runToChaseComp - tour3M2userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 3;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 3;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2userScore = tour3M2userScore + 3;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M2batSecondR4() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "block";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 4;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 4;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 4;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M2compScore == tour3M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseComp > tour3M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M2compWonBy").textContent = (tour3M2runToChaseComp - tour3M2userScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By " + (tour3M2runToChaseComp - tour3M2userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 4;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2userScore = tour3M2userScore + 4;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M2batSecondR5() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "block";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 5;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 5;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 5;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 5;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M2compScore == tour3M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseComp > tour3M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M2compWonBy").textContent = (tour3M2runToChaseComp - tour3M2userScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By " + (tour3M2runToChaseComp - tour3M2userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2userScore = tour3M2userScore + 5;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M2batSecondR6() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "block";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 6;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 6;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 6;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 6;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 6;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        var tour3M2runToChaseComp = tour3M2compScore + 1;
        if (tour3M2runToChaseComp <= tour3M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M2compScore == tour3M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseComp > tour3M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M2compWonBy").textContent = (tour3M2runToChaseComp - tour3M2userScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By " + (tour3M2runToChaseComp - tour3M2userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }


}

function tour3M2matchStartBat() {
        tossing = document.getElementById("tour3M2tossing").style.display = "none";
        tossing = document.getElementById("tour3M2selectionByUser").style.display = "none";
        tossing = document.getElementById("tour3M2main-container").style.display = "block";
        tour3M2batFirst();
}

function tour3M2batFirst() {
    var r1 = document.getElementById('tour3M2R1');
    r1.onclick = tour3M2batFirstR1;
    var r2 = document.getElementById('tour3M2R2');
    r2.onclick = tour3M2batFirstR2;
    var r3 = document.getElementById('tour3M2R3');
    r3.onclick = tour3M2batFirstR3;
    var r4 = document.getElementById('tour3M2R4');
    r4.onclick = tour3M2batFirstR4;
    var r5 = document.getElementById('tour3M2R5');
    r5.onclick = tour3M2batFirstR5;
    var r6 = document.getElementById('tour3M2R6');
    r6.onclick = tour3M2batFirstR6;
}

// let runtextUser = document.getElementById('userRun').innerText;
// var halfCentury = false;
// if (runtextUser >= 50 && halfCentury == false) {
//     document.getElementById("halfCenturyUser").style.display = "block";
//     halfCentury == true;
// }

function tour3M2batFirstR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "block";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        document.getElementById('tour3M2targetValue').textContent = tour3M2userScore + 1;
        document.getElementById('tour3M2targetChaseComp').style.display = "block";
        document.getElementById('tour3M2runChaseComp').textContent = tour3M2userScore + 1;
        tour3M2bowlSecond();
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 1;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 1;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 1;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 1;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2userScore = tour3M2userScore + 1;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }


}

function tour3M2batFirstR2() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "block";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 2;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        document.getElementById('tour3M2targetValue').innerText = tour3M2userScore + 1;
        document.getElementById('tour3M2targetChaseComp').style.display = "block";
        document.getElementById('tour3M2runChaseComp').textContent = tour3M2userScore + 1;
        tour3M2bowlSecond();

    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 2;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 2;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 2;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2userScore = tour3M2userScore + 2;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }


}

function tour3M2batFirstR3() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "block";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 3;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 3;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        document.getElementById('tour3M2targetValue').innerText = tour3M2userScore + 1;
        document.getElementById('tour3M2targetChaseComp').style.display = "block";
        document.getElementById('tour3M2runChaseComp').textContent = tour3M2userScore + 1;
        tour3M2bowlSecond();
    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 3;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 3;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2userScore = tour3M2userScore + 3;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }


}

function tour3M2batFirstR4() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "block";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 4;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 4;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 4;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        document.getElementById('tour3M2targetValue').innerText = tour3M2userScore + 1;
        document.getElementById('tour3M2targetChaseComp').style.display = "block";
        document.getElementById('tour3M2runChaseComp').textContent = tour3M2userScore + 1;
        tour3M2bowlSecond();

    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 4;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2userScore = tour3M2userScore + 4;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }


}

function tour3M2batFirstR5() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "block";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 5;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 5;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 5;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 5;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        document.getElementById('tour3M2targetValue').innerText = tour3M2userScore + 1;
        document.getElementById('tour3M2targetChaseComp').style.display = "block";
        document.getElementById('tour3M2runChaseComp').textContent = tour3M2userScore + 1;
        tour3M2bowlSecond();

    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2userScore = tour3M2userScore + 5;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }


}

function tour3M2batFirstR6() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "block";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 6;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 6;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;

    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 6;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 6;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2userScore = tour3M2userScore + 6;
        document.getElementById('tour3M2userRun').textContent = tour3M2userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        document.getElementById('tour3M2targetValue').innerText = tour3M2userScore + 1;
        document.getElementById('tour3M2targetChaseComp').style.display = "block";
        document.getElementById('tour3M2runChaseComp').textContent = tour3M2userScore + 1;
        tour3M2bowlSecond();

    }


}

function tour3M2bowlSecond() {
    var r1 = document.getElementById('tour3M2R1');
    r1.onclick = tour3M2bowlSecondR1;
    var r2 = document.getElementById('tour3M2R2');
    r2.onclick = tour3M2bowlSecondR2;
    var r3 = document.getElementById('tour3M2R3');
    r3.onclick = tour3M2bowlSecondR3;
    var r4 = document.getElementById('tour3M2R4');
    r4.onclick = tour3M2bowlSecondR4;
    var r5 = document.getElementById('tour3M2R5');
    r5.onclick = tour3M2bowlSecondR5;
    var r6 = document.getElementById('tour3M2R6');
    r6.onclick = tour3M2bowlSecondR6;
}

function tour3M2bowlSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "block";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M2userScore == tour3M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseUser > tour3M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M2userWonBy").textContent = (tour3M2runToChaseUser - tour3M2compScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By " + (tour3M2runToChaseUser - tour3M2compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


 }

function tour3M2bowlSecondR2() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "block";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M2userScore == tour3M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseUser > tour3M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M2userWonBy").textContent = (tour3M2runToChaseUser - tour3M2compScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By " + (tour3M2runToChaseUser - tour3M2compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M2bowlSecondR3() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "block";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M2userScore == tour3M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseUser > tour3M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M2userWonBy").textContent = (tour3M2runToChaseUser - tour3M2compScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By " + (tour3M2runToChaseUser - tour3M2compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M2bowlSecondR4() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "block";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M2userScore == tour3M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseUser > tour3M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M2userWonBy").textContent = (tour3M2runToChaseUser - tour3M2compScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By " + (tour3M2runToChaseUser - tour3M2compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M2bowlSecondR5() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "block";
    document.getElementById('tour3M2num-B6').style.display = "none";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M2userScore == tour3M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseUser > tour3M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M2userWonBy").textContent = (tour3M2runToChaseUser - tour3M2compScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By " + (tour3M2runToChaseUser - tour3M2compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M2bowlSecondR6() {
    document.getElementById('tour3M2fist-2').style.display = "none";
    document.getElementById('tour3M2num-B1').style.display = "none";
    document.getElementById('tour3M2num-B2').style.display = "none";
    document.getElementById('tour3M2num-B3').style.display = "none";
    document.getElementById('tour3M2num-B4').style.display = "none";
    document.getElementById('tour3M2num-B5').style.display = "none";
    document.getElementById('tour3M2num-B6').style.display = "block";
    document.getElementById('tour3M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "block";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "block";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "block";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "block";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "block";
        document.getElementById('tour3M2num-A6').style.display = "none";
        tour3M2compScore += x;
        document.getElementById('tour3M2compRun').textContent = tour3M2compScore;
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour3M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M2fist-1').style.display = "none";
        document.getElementById('tour3M2num-A1').style.display = "none";
        document.getElementById('tour3M2num-A2').style.display = "none";
        document.getElementById('tour3M2num-A3').style.display = "none";
        document.getElementById('tour3M2num-A4').style.display = "none";
        document.getElementById('tour3M2num-A5').style.display = "none";
        document.getElementById('tour3M2num-A6').style.display = "block";
        var tour3M2runToChaseUser = tour3M2userScore + 1;
        if (tour3M2runToChaseUser <= tour3M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2compWins").style.display = "block";
                document.getElementById("tour3M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M2userScore == tour3M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2tie").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M2runToChaseUser > tour3M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M2userWonBy").textContent = (tour3M2runToChaseUser - tour3M2compScore);
                document.getElementById("tour3M2matchEnd").style.display = "block";
                document.getElementById("tour3M2userWins").style.display = "block";
                document.getElementById("tour3M2batFirstWinUser").style.display = "block";
                document.getElementById("tour3M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M2R1").disabled = true;
                document.getElementById("tour3M2R2").disabled = true;
                document.getElementById("tour3M2R3").disabled = true;
                document.getElementById("tour3M2R4").disabled = true;
                document.getElementById("tour3M2R5").disabled = true;
                document.getElementById("tour3M2R6").disabled = true;
                document.getElementById("tour3M2winner-container").style.display = "block";
                document.getElementById('tour3M2winner').textContent = "You Won By " + (tour3M2runToChaseUser - tour3M2compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }


    }


}

function tour3M2nextMatch() {
    document.getElementById("tour3M2main-container").style.display = "none";
    document.getElementById('tour3-match').style.display = "flex";
    document.getElementById('tour3M3start').disabled = false;
    document.getElementById("tour3M2compWins").style.display = "none";
    document.getElementById("tour3M2userWins").style.display = "none";
    document.getElementById("tour3M2tie").style.display = "none";
    document.getElementById("tour3M2start").style.backgroundColor = '#685d5d';
    document.getElementById("tour3M2start").style.color = 'black';
    document.getElementById("tour3M3start").style.backgroundColor = 'rgb(13, 204, 13)';
    document.getElementById("tour3M3start").style.color = 'black';
    
    
    if(tour3userpoints > tour3comppoints) {
    document.getElementById("tour3return").style.display = "block";
    document.getElementById("tour3-match").style.filter = 'blur(5px)';
        document.getElementById("tour3M2wintitle").innerText = "You Won The Tournament!";
        
    }
    else if(tour3userpoints < tour3comppoints) {
        document.getElementById("tour3return").style.display = "block";
        document.getElementById("tour3-match").style.filter = 'blur(5px)';
        document.getElementById("tour3M2wintitle").innerText = "Opponent Won The Tournament!";
        
    }

}

function returnhome() {
    location.reload();
    
}

// function btnClose() {
//     document.getElementById("halfCenturyUser").style.display = "none";
// }
