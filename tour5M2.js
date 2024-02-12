
function tour5M2start() {
    document.getElementById('tour5M2start').disabled = true;
    document.getElementById('tour5M3start').disabled = false;
    document.getElementById("tour5M2toss").style.display = "block";
    document.getElementById("tour5-match").style.display = "none";
    document.getElementById("gameName").style.fontSize = "20px";

}

// function pressing() {
//     document.getElementById('tour5-match').style.display = "block";
//     document.getElementById('tour5M2toss').style.display = "none";
// }



// var tour5odd1 = document.getElementById('tour5M2odd');
// tour5odd1.onclick = tour5odd;

// let c = Math.floor(Math.random() * 6) + 1;
// console.log("value is", c);

function tour5M2OddStart() {
    document.getElementById("tour5M2toss").style.display = "none";
    document.getElementById("tour5M2fist-T1").style.display = "block";
    document.getElementById("tour5M2fist-T2").style.display = "block";
    document.getElementById("tour5M2numberSelectorT").style.display = "block";

    var tour5M2rt1 = document.getElementById('tour5M2RT1');
    tour5M2rt1.onclick = tour5M2OddRT1;
    var tour5M2rt2 = document.getElementById('tour5M2RT2');
    tour5M2rt2.onclick = tour5M2OddRT2;
    var tour5M2rt3 = document.getElementById('tour5M2RT3');
    tour5M2rt3.onclick = tour5M2OddRT3;
    var tour5M2rt4 = document.getElementById('tour5M2RT4');
    tour5M2rt4.onclick = tour5M2OddRT4;
    var tour5M2rt5 = document.getElementById('tour5M2RT5');
    tour5M2rt5.onclick = tour5M2OddRT5;
    var tour5M2rt6 = document.getElementById('tour5M2RT6');
    tour5M2rt6.onclick = tour5M2OddRT6;
}

// var tour5eve1 = document.getElementById('tour5M2eve');
// tour5eve1.onclick = tour5M2eve;

function tour5M2eve() {
    document.getElementById("tour5M2toss").style.display = "none";
    document.getElementById("tour5M2fist-T1").style.display = "block";
    document.getElementById("tour5M2fist-T2").style.display = "block";
    document.getElementById("tour5M2numberSelectorT").style.display = "block";

    var tour5M2rt1 = document.getElementById('tour5M2RT1');
    tour5M2rt1.onclick = tour5M2EveRT1;
    var tour5M2rt2 = document.getElementById('tour5M2RT2');
    tour5M2rt2.onclick = tour5M2EveRT2;
    var tour5M2rt3 = document.getElementById('tour5M2RT3');
    tour5M2rt3.onclick = tour5M2EveRT3;
    var tour5M2rt4 = document.getElementById('tour5M2RT4');
    tour5M2rt4.onclick = tour5M2EveRT4;
    var tour5M2rt5 = document.getElementById('tour5M2RT5');
    tour5M2rt5.onclick = tour5M2EveRT5;
    var tour5M2rt6 = document.getElementById('tour5M2RT6');
    tour5M2rt6.onclick = tour5M2EveRT6;
}




function tour5M2forOdd1() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour5M2selectionByUser").style.display = "block";

        document.getElementById("tour5M2tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour5M2selectionByUser").style.display = "none";
        document.getElementById("tour5M2tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M2selectionByComp").style.display = "block";
        document.getElementById("tour5M2RT1").disabled = true;
        document.getElementById("tour5M2RT2").disabled = true;
        document.getElementById("tour5M2RT3").disabled = true;
        document.getElementById("tour5M2RT4").disabled = true;
        document.getElementById("tour5M2RT5").disabled = true;
        document.getElementById("tour5M2RT6").disabled = true;
        var tour5M2opt = ['Bat', 'Bowl'];
        const tour5M2chose = Math.floor(Math.random() * tour5M2opt.length);
        const tour5M2selectedopt = tour5M2opt[tour5M2chose];
        document.getElementById("tour5M2compOpt").innerText = tour5M2selectedopt;
        var tour5M2selected = 'Bat';
        if (tour5M2selectedopt.includes(tour5M2selected)) {
            // console.log(`bat selected`);
            tour5M2matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour5M2matchStartBat();
        }
    }
}
function tour5M2forOdd2() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour5M2selectionByUser").style.display = "block";

        document.getElementById("tour5M2tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour5M2selectionByUser").style.display = "none";
        document.getElementById("tour5M2tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M2selectionByComp").style.display = "block";
        document.getElementById("tour5M2RT1").disabled = true;
        document.getElementById("tour5M2RT2").disabled = true;
        document.getElementById("tour5M2RT3").disabled = true;
        document.getElementById("tour5M2RT4").disabled = true;
        document.getElementById("tour5M2RT5").disabled = true;
        document.getElementById("tour5M2RT6").disabled = true;
        var tour5M2opt = ['Bat', 'Bowl'];
        const tour5M2chose = Math.floor(Math.random() * tour5M2opt.length);
        const tour5M2selectedopt = tour5M2opt[tour5M2chose];
        document.getElementById("tour5M2compOpt").innerText = tour5M2selectedopt;
        var tour5M2selected = 'Bat';
        if (tour5M2selectedopt.includes(tour5M2selected)) {
            // console.log(`bat selected`);
            tour5M2matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour5M2matchStartBat();
        }
    }
}

function tour5M2forEve1() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour5M2selectionByUser").style.display = "block";

        document.getElementById("tour5M2tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour5M2selectionByUser").style.display = "none";
        document.getElementById("tour5M2tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M2RT1").disabled = true;
        document.getElementById("tour5M2RT2").disabled = true;
        document.getElementById("tour5M2RT3").disabled = true;
        document.getElementById("tour5M2RT4").disabled = true;
        document.getElementById("tour5M2RT5").disabled = true;
        document.getElementById("tour5M2RT6").disabled = true;
        document.getElementById("tour5M2selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour5M2compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour5M2matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour5M2matchStartBat();
        }
    }
}
function tour5M2forEve2() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour5M2selectionByUser").style.display = "block";

        document.getElementById("tour5M2tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour5M2selectionByUser").style.display = "none";
        document.getElementById("tour5M2tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M2RT1").disabled = true;
        document.getElementById("tour5M2RT2").disabled = true;
        document.getElementById("tour5M2RT3").disabled = true;
        document.getElementById("tour5M2RT4").disabled = true;
        document.getElementById("tour5M2RT5").disabled = true;
        document.getElementById("tour5M2RT6").disabled = true;
        document.getElementById("tour5M2selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour5M2compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour5M2matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour5M2matchStartBat();
        }
    }
}
//CHECK FROM HERE

//console.log()(x);

// If user chose odd
function tour5M2OddRT1() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "block";
    document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    document.getElementById("tour5M2num-TB2").style.display = "none";
    document.getElementById("tour5M2num-TB3").style.display = "none";
    document.getElementById("tour5M2num-TB4").style.display = "none";
    document.getElementById("tour5M2num-TB5").style.display = "none";
    document.getElementById("tour5M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M2forOdd1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}

function tour5M2OddRT2() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "none";
    document.getElementById("tour5M2num-TB2").style.display = "block";
    document.getElementById("tour5M2num-TB2").style.marginLeft = "550px";
    document.getElementById("tour5M2num-TB3").style.display = "none";
    document.getElementById("tour5M2num-TB4").style.display = "none";
    document.getElementById("tour5M2num-TB5").style.display = "none";
    document.getElementById("tour5M2num-TB6").style.display = "none";

    setTimeout(function () {
        tour5M2forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}

function tour5M2OddRT3() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "none";
    document.getElementById("tour5M2num-TB2").style.display = "none";
    document.getElementById("tour5M2num-TB3").style.display = "block";
    document.getElementById("tour5M2num-TB3").style.marginLeft = "570px";
    document.getElementById("tour5M2num-TB4").style.display = "none";
    document.getElementById("tour5M2num-TB5").style.display = "none";
    document.getElementById("tour5M2num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M2forOdd1();
    }, 1000);
    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}

function tour5M2OddRT4() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "none";
    document.getElementById("tour5M2num-TB2").style.display = "none";
    document.getElementById("tour5M2num-TB3").style.display = "none";
    document.getElementById("tour5M2num-TB4").style.display = "block";
    document.getElementById("tour5M2num-TB4").style.marginLeft = "550px";
    document.getElementById("tour5M2num-TB5").style.display = "none";
    document.getElementById("tour5M2num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M2forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}

function tour5M2OddRT5() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "none";
    document.getElementById("tour5M2num-TB2").style.display = "none";
    document.getElementById("tour5M2num-TB3").style.display = "none";
    document.getElementById("tour5M2num-TB4").style.display = "none";
    document.getElementById("tour5M2num-TB5").style.display = "block";
    document.getElementById("tour5M2num-TB5").style.marginLeft = "540px";
    document.getElementById("tour5M2num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M2forOdd1();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}

function tour5M2OddRT6() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "none";
    document.getElementById("tour5M2num-TB2").style.display = "none";
    document.getElementById("tour5M2num-TB3").style.display = "none";
    document.getElementById("tour5M2num-TB4").style.display = "none";
    document.getElementById("tour5M2num-TB5").style.display = "none";
    document.getElementById("tour5M2num-TB6").style.display = "block";
    document.getElementById("tour5M2num-TB6").style.marginLeft = "570px";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M2forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}
// If user chose Eve
function tour5M2EveRT1() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "block";
    document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    document.getElementById("tour5M2num-TB2").style.display = "none";
    document.getElementById("tour5M2num-TB3").style.display = "none";
    document.getElementById("tour5M2num-TB4").style.display = "none";
    document.getElementById("tour5M2num-TB5").style.display = "none";
    document.getElementById("tour5M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M2forEve1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}

function tour5M2EveRT2() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "none";
    document.getElementById("tour5M2num-TB2").style.marginLeft = "570px";
    document.getElementById("tour5M2num-TB2").style.display = "block";
    document.getElementById("tour5M2num-TB3").style.display = "none";
    document.getElementById("tour5M2num-TB4").style.display = "none";
    document.getElementById("tour5M2num-TB5").style.display = "none";
    document.getElementById("tour5M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M2forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}

function tour5M2EveRT3() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "none";
    document.getElementById("tour5M2num-TB3").style.marginLeft = "570px";
    document.getElementById("tour5M2num-TB2").style.display = "none";
    document.getElementById("tour5M2num-TB3").style.display = "block";
    document.getElementById("tour5M2num-TB4").style.display = "none";
    document.getElementById("tour5M2num-TB5").style.display = "none";
    document.getElementById("tour5M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M2forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}

function tour5M2EveRT4() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "none";
    document.getElementById("tour5M2num-TB4").style.marginLeft = "570px";
    document.getElementById("tour5M2num-TB2").style.display = "none";
    document.getElementById("tour5M2num-TB3").style.display = "none";
    document.getElementById("tour5M2num-TB4").style.display = "block";
    document.getElementById("tour5M2num-TB5").style.display = "none";
    document.getElementById("tour5M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M2forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}

function tour5M2EveRT5() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "none";
    document.getElementById("tour5M2num-TB5").style.marginLeft = "570px";
    document.getElementById("tour5M2num-TB2").style.display = "none";
    document.getElementById("tour5M2num-TB3").style.display = "none";
    document.getElementById("tour5M2num-TB4").style.display = "none";
    document.getElementById("tour5M2num-TB5").style.display = "block";
    document.getElementById("tour5M2num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M2forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}

function tour5M2EveRT6() {
    document.getElementById("tour5M2fist-T2").style.display = "none";
    document.getElementById("tour5M2num-TB1").style.display = "none";
    document.getElementById("tour5M2num-TB6").style.marginLeft = "570px";
    document.getElementById("tour5M2num-TB2").style.display = "none";
    document.getElementById("tour5M2num-TB3").style.display = "none";
    document.getElementById("tour5M2num-TB4").style.display = "none";
    document.getElementById("tour5M2num-TB5").style.display = "none";
    document.getElementById("tour5M2num-TB6").style.display = "block";
    //console.log()(x);
    setTimeout(function () {

        tour5M2forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "block";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "block";
        document.getElementById("tour5M2num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "block";
        document.getElementById("tour5M2num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "block";
        document.getElementById("tour5M2num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M2num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M2fist-T1").style.display = "none";
        document.getElementById("tour5M2num-TA1").style.display = "none";
        document.getElementById("tour5M2num-TA2").style.display = "none";
        document.getElementById("tour5M2num-TA3").style.display = "none";
        document.getElementById("tour5M2num-TA4").style.display = "none";
        document.getElementById("tour5M2num-TA5").style.display = "none";
        document.getElementById("tour5M2num-TA6").style.display = "block";
        document.getElementById("tour5M2num-TA6").style.marginLeft = "40%";
    }
}

/* TOSS END */

/* ENTERING MATCH */
function tour5M2cont() {
    document.getElementById("tour5M2tossing").style.display = "none";
    document.getElementById("tour5M2selectionByComp").style.display = "none";
    document.getElementById("tour5M2main-container").style.display = "block";
    document.getElementById("tour5M2main-container").style.filter = 'blur(0px)';
    document.getElementById("tour5M2R1").disabled = false;
    document.getElementById("tour5M2R2").disabled = false;
    document.getElementById("tour5M2R3").disabled = false;
    document.getElementById("tour5M2R4").disabled = false;
    document.getElementById("tour5M2R5").disabled = false;
    document.getElementById("tour5M2R6").disabled = false;
}
function tour5M2contChaseUser() {
    document.getElementById('tour5M2targetChaseComp').style.display = "none";
    document.getElementById('tour5M2targetChaseUser').style.display = "none";
    document.getElementById("tour5M2R1").disabled = false;
    document.getElementById("tour5M2R2").disabled = false;
    document.getElementById("tour5M2R3").disabled = false;
    document.getElementById("tour5M2R4").disabled = false;
    document.getElementById("tour5M2R5").disabled = false;
    document.getElementById("tour5M2R6").disabled = false;
}
function tour5M2contChaseComp() {
    document.getElementById('tour5M2targetChaseComp').style.display = "none";
    document.getElementById('tour5M2targetChaseUser').style.display = "none";
    document.getElementById("tour5M2R1").disabled = false;
    document.getElementById("tour5M2R2").disabled = false;
    document.getElementById("tour5M2R3").disabled = false;
    document.getElementById("tour5M2R4").disabled = false;
    document.getElementById("tour5M2R5").disabled = false;
    document.getElementById("tour5M2R6").disabled = false;
}


function tour5M2matchStartBowl() {
    tossing = document.getElementById("tour5M2tossing").style.display = "none";
    tossing = document.getElementById("tour5M2selectionByUser").style.display = "none";
    tossing = document.getElementById("tour5M2main-container").style.display = "block";
    tour5M2bowlfirst();
}

function tour5M2bowlfirst() {
    var r1 = document.getElementById('tour5M2R1');
    r1.onclick = tour5M2bowlFirstR1;
    var r2 = document.getElementById('tour5M2R2');
    r2.onclick = tour5M2bowlFirstR2;
    var r3 = document.getElementById('tour5M2R3');
    r3.onclick = tour5M2bowlFirstR3;
    var r4 = document.getElementById('tour5M2R4');
    r4.onclick = tour5M2bowlFirstR4;
    var r5 = document.getElementById('tour5M2R5');
    r5.onclick = tour5M2bowlFirstR5;
    var r6 = document.getElementById('tour5M2R6');
    r6.onclick = tour5M2bowlFirstR6;
}

function tour5M2batSecond() {
    var r1 = document.getElementById('tour5M2R1');
    r1.onclick = tour5M2batSecondR1;
    var r2 = document.getElementById('tour5M2R2');
    r2.onclick = tour5M2batSecondR2;
    var r3 = document.getElementById('tour5M2R3');
    r3.onclick = tour5M2batSecondR3;
    var r4 = document.getElementById('tour5M2R4');
    r4.onclick = tour5M2batSecondR4;
    var r5 = document.getElementById('tour5M2R5');
    r5.onclick = tour5M2batSecondR5;
    var r6 = document.getElementById('tour5M2R6');
    r6.onclick = tour5M2batSecondR6;
}


 var tour5M2compScore = 0;


function tour5M2bowlFirstR1() {
    let y = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "block";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "0%";
    if (y == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        document.getElementById('tour5M2targetValue').textContent = tour5M2compScore + 1;
        document.getElementById('tour5M2targetChaseUser').style.display = "block";
        document.getElementById('tour5M2runChaseUser').textContent = tour5M2compScore + 1;
        tour5M2batSecond();
    }
    else if (y == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += y;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (y == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += y;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (y == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += y;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (y == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += y;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (y == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
         document.getElementById('tour5M2num-A5').style.display = "none";
         document.getElementById('tour5M2num-A6').style.display = "block";
         tour5M2compScore += y;
         document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
     }


}

 function tour5M2bowlFirstR2() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "block";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let y = Math.floor(Math.random() * 6) + 1;
    if (y == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += y;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (y == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        document.getElementById('tour5M2targetValue').innerText = tour5M2compScore + 1;
        document.getElementById('tour5M2targetChaseUser').style.display = "block";
        document.getElementById('tour5M2runChaseUser').textContent = tour5M2compScore + 1;
        tour5M2batSecond();

    }
    else if (y == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += y;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (y == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += y;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (y == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += y;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (y == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2compScore += y;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }


}

function tour5M2bowlFirstR3() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "block";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        document.getElementById('tour5M2targetValue').innerText = tour5M2compScore + 1;
        document.getElementById('tour5M2targetChaseUser').style.display = "block";
        document.getElementById('tour5M2runChaseUser').textContent = tour5M2compScore + 1;
        tour5M2batSecond();
    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }


}

function tour5M2bowlFirstR4() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "block";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        document.getElementById('tour5M2targetValue').innerText = tour5M2compScore + 1;
        document.getElementById('tour5M2targetChaseUser').style.display = "block";
        document.getElementById('tour5M2runChaseUser').textContent = tour5M2compScore + 1;
        tour5M2batSecond();

    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }


}

function tour5M2bowlFirstR5() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "block";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        document.getElementById('tour5M2targetValue').innerText = tour5M2compScore + 1;
        document.getElementById('tour5M2targetChaseUser').style.display = "block";
        document.getElementById('tour5M2runChaseUser').textContent = tour5M2compScore + 1;
        tour5M2batSecond();

    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }


}

function tour5M2bowlFirstR6() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "block";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;

    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        document.getElementById('tour5M2targetValue').textContent = tour5M2compScore + 1;
        document.getElementById('tour5M2targetChaseUser').style.display = "block";
        document.getElementById('tour5M2runChaseUser').textContent = tour5M2compScore + 1;
        tour5M2batSecond();

    }


}

 var tour5M2userScore = 0;
 // var tour5M2runToChaseUser = (tour5M2userScore + 1);

function tour5M2batSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "block";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "0%";
    /*var halfCentury = false;
    if (userScore >= 50 && halfCentury == false) {
        document.getElementById("halfCenturyUser").style.display = "block";
        halfCentury == true;
    }*/
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 1;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M2compScore == tour5M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseComp > tour5M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M2compWonBy").textContent = (tour5M2runToChaseComp - tour5M2userScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By " + (tour5M2runToChaseComp - tour5M2userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 1;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp < tour5M2userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp < tour5M2userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp < tour5M2userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp < tour5M2userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2userScore = tour5M2userScore + 1;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp < tour5M2userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M2batSecondR2() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "block";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 2;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M2compScore == tour5M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseComp > tour5M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M2compWonBy").textContent = (tour5M2runToChaseComp - tour5M2userScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By " + (tour5M2runToChaseComp - tour5M2userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 2;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 2;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                          //If the user chased the target
            document.getElementById("tour5M2matchEnd").style.display = "block";
            document.getElementById("tour5M2userWins").style.display = "block";
            document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
            document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 2;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2userScore = tour5M2userScore + 2;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M2batSecondR3() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "block";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 3;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 3;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M2compScore == tour5M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseComp > tour5M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M2compWonBy").textContent = (tour5M2runToChaseComp - tour5M2userScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By " + (tour5M2runToChaseComp - tour5M2userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 3;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 3;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2userScore = tour5M2userScore + 3;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M2batSecondR4() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "block";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 4;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 4;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 4;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M2compScore == tour5M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseComp > tour5M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M2compWonBy").textContent = (tour5M2runToChaseComp - tour5M2userScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By " + (tour5M2runToChaseComp - tour5M2userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 4;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2userScore = tour5M2userScore + 4;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M2batSecondR5() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "block";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 5;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 5;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 5;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 5;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
            }, 1000);
        } else if (tour5M2compScore == tour5M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseComp > tour5M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M2compWonBy").textContent = (tour5M2runToChaseComp - tour5M2userScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By " + (tour5M2runToChaseComp - tour5M2userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2userScore = tour5M2userScore + 5;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M2batSecondR6() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "block";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 6;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 6;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 6;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 6;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 6;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        var tour5M2runToChaseComp = tour5M2compScore + 1;
        if (tour5M2runToChaseComp <= tour5M2userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M2compScore == tour5M2userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseComp > tour5M2userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M2compWonBy").textContent = (tour5M2runToChaseComp - tour5M2userScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By " + (tour5M2runToChaseComp - tour5M2userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }


}

function tour5M2matchStartBat() {
        tossing = document.getElementById("tour5M2tossing").style.display = "none";
        tossing = document.getElementById("tour5M2selectionByUser").style.display = "none";
        tossing = document.getElementById("tour5M2main-container").style.display = "block";
        tour5M2batFirst();
}

function tour5M2batFirst() {
    var r1 = document.getElementById('tour5M2R1');
    r1.onclick = tour5M2batFirstR1;
    var r2 = document.getElementById('tour5M2R2');
    r2.onclick = tour5M2batFirstR2;
    var r3 = document.getElementById('tour5M2R3');
    r3.onclick = tour5M2batFirstR3;
    var r4 = document.getElementById('tour5M2R4');
    r4.onclick = tour5M2batFirstR4;
    var r5 = document.getElementById('tour5M2R5');
    r5.onclick = tour5M2batFirstR5;
    var r6 = document.getElementById('tour5M2R6');
    r6.onclick = tour5M2batFirstR6;
}

// let runtextUser = document.getElementById('userRun').innerText;
// var halfCentury = false;
// if (runtextUser >= 50 && halfCentury == false) {
//     document.getElementById("halfCenturyUser").style.display = "block";
//     halfCentury == true;
// }

function tour5M2batFirstR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "block";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        document.getElementById('tour5M2targetValue').textContent = tour5M2userScore + 1;
        document.getElementById('tour5M2targetChaseComp').style.display = "block";
        document.getElementById('tour5M2runChaseComp').textContent = tour5M2userScore + 1;
        tour5M2bowlSecond();
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 1;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 1;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 1;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 1;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2userScore = tour5M2userScore + 1;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }


}

function tour5M2batFirstR2() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "block";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 2;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        document.getElementById('tour5M2targetValue').innerText = tour5M2userScore + 1;
        document.getElementById('tour5M2targetChaseComp').style.display = "block";
        document.getElementById('tour5M2runChaseComp').textContent = tour5M2userScore + 1;
        tour5M2bowlSecond();

    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 2;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 2;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 2;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2userScore = tour5M2userScore + 2;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }


}

function tour5M2batFirstR3() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "block";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 3;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 3;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        document.getElementById('tour5M2targetValue').innerText = tour5M2userScore + 1;
        document.getElementById('tour5M2targetChaseComp').style.display = "block";
        document.getElementById('tour5M2runChaseComp').textContent = tour5M2userScore + 1;
        tour5M2bowlSecond();
    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 3;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 3;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2userScore = tour5M2userScore + 3;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }


}

function tour5M2batFirstR4() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "block";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 4;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 4;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 4;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        document.getElementById('tour5M2targetValue').innerText = tour5M2userScore + 1;
        document.getElementById('tour5M2targetChaseComp').style.display = "block";
        document.getElementById('tour5M2runChaseComp').textContent = tour5M2userScore + 1;
        tour5M2bowlSecond();

    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 4;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2userScore = tour5M2userScore + 4;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }


}

function tour5M2batFirstR5() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "block";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 5;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 5;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 5;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 5;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        document.getElementById('tour5M2targetValue').innerText = tour5M2userScore + 1;
        document.getElementById('tour5M2targetChaseComp').style.display = "block";
        document.getElementById('tour5M2runChaseComp').textContent = tour5M2userScore + 1;
        tour5M2bowlSecond();

    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2userScore = tour5M2userScore + 5;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }


}

function tour5M2batFirstR6() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "block";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 6;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 6;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;

    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 6;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 6;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2userScore = tour5M2userScore + 6;
        document.getElementById('tour5M2userRun').textContent = tour5M2userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        document.getElementById('tour5M2targetValue').innerText = tour5M2userScore + 1;
        document.getElementById('tour5M2targetChaseComp').style.display = "block";
        document.getElementById('tour5M2runChaseComp').textContent = tour5M2userScore + 1;
        tour5M2bowlSecond();

    }


}

function tour5M2bowlSecond() {
    var r1 = document.getElementById('tour5M2R1');
    r1.onclick = tour5M2bowlSecondR1;
    var r2 = document.getElementById('tour5M2R2');
    r2.onclick = tour5M2bowlSecondR2;
    var r3 = document.getElementById('tour5M2R3');
    r3.onclick = tour5M2bowlSecondR3;
    var r4 = document.getElementById('tour5M2R4');
    r4.onclick = tour5M2bowlSecondR4;
    var r5 = document.getElementById('tour5M2R5');
    r5.onclick = tour5M2bowlSecondR5;
    var r6 = document.getElementById('tour5M2R6');
    r6.onclick = tour5M2bowlSecondR6;
}

function tour5M2bowlSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "block";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M2userScore == tour5M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseUser > tour5M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M2userWonBy").textContent = (tour5M2runToChaseUser - tour5M2compScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By " + (tour5M2runToChaseUser - tour5M2compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


 }

function tour5M2bowlSecondR2() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "block";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M2userScore == tour5M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseUser > tour5M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M2userWonBy").textContent = (tour5M2runToChaseUser - tour5M2compScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By " + (tour5M2runToChaseUser - tour5M2compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M2bowlSecondR3() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "block";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
            }, 1000);
        } else if (tour5M2userScore == tour5M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseUser > tour5M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M2userWonBy").textContent = (tour5M2runToChaseUser - tour5M2compScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By " + (tour5M2runToChaseUser - tour5M2compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M2bowlSecondR4() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "block";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M2userScore == tour5M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseUser > tour5M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M2userWonBy").textContent = (tour5M2runToChaseUser - tour5M2compScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By " + (tour5M2runToChaseUser - tour5M2compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M2bowlSecondR5() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "block";
    document.getElementById('tour5M2num-B6').style.display = "none";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M2userScore == tour5M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseUser > tour5M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M2userWonBy").textContent = (tour5M2runToChaseUser - tour5M2compScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By " + (tour5M2runToChaseUser - tour5M2compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M2bowlSecondR6() {
    document.getElementById('tour5M2fist-2').style.display = "none";
    document.getElementById('tour5M2num-B1').style.display = "none";
    document.getElementById('tour5M2num-B2').style.display = "none";
    document.getElementById('tour5M2num-B3').style.display = "none";
    document.getElementById('tour5M2num-B4').style.display = "none";
    document.getElementById('tour5M2num-B5').style.display = "none";
    document.getElementById('tour5M2num-B6').style.display = "block";
    document.getElementById('tour5M2userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "block";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "block";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "block";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "block";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "block";
        document.getElementById('tour5M2num-A6').style.display = "none";
        tour5M2compScore += x;
        document.getElementById('tour5M2compRun').textContent = tour5M2compScore;
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M2compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M2fist-1').style.display = "none";
        document.getElementById('tour5M2num-A1').style.display = "none";
        document.getElementById('tour5M2num-A2').style.display = "none";
        document.getElementById('tour5M2num-A3').style.display = "none";
        document.getElementById('tour5M2num-A4').style.display = "none";
        document.getElementById('tour5M2num-A5').style.display = "none";
        document.getElementById('tour5M2num-A6').style.display = "block";
        var tour5M2runToChaseUser = tour5M2userScore + 1;
        if (tour5M2runToChaseUser <= tour5M2compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2compWins").style.display = "block";
                document.getElementById("tour5M2bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M2userScore == tour5M2compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2tie").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M2runToChaseUser > tour5M2compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M2userWonBy").textContent = (tour5M2runToChaseUser - tour5M2compScore);
                document.getElementById("tour5M2matchEnd").style.display = "block";
                document.getElementById("tour5M2userWins").style.display = "block";
                document.getElementById("tour5M2batFirstWinUser").style.display = "block";
                document.getElementById("tour5M2main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M2R1").disabled = true;
                document.getElementById("tour5M2R2").disabled = true;
                document.getElementById("tour5M2R3").disabled = true;
                document.getElementById("tour5M2R4").disabled = true;
                document.getElementById("tour5M2R5").disabled = true;
                document.getElementById("tour5M2R6").disabled = true;
                document.getElementById("tour5M2winner-container").style.display = "block";
                document.getElementById('tour5M2winner').textContent = "You Won By " + (tour5M2runToChaseUser - tour5M2compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }


    }


}

function tour5M2nextMatch() {
    document.getElementById("tour5M2main-container").style.display = "none";
    document.getElementById('tour5-match').style.display = "block";
    document.getElementById('tour5M3start').disabled = false;
    document.getElementById("tour5M2compWins").style.display = "none";
    document.getElementById("tour5M2userWins").style.display = "none";
    document.getElementById("tour5M2tie").style.display = "none";
    document.getElementById("tour5M2start").style.backgroundColor = '#685d5d';
    document.getElementById("tour5M2start").style.color = 'black';
    document.getElementById("tour5M3start").style.backgroundColor = 'rgb(13, 204, 13)';
    document.getElementById("tour5M3start").style.color = 'black';

}

// function btnClose() {
//     document.getElementById("halfCenturyUser").style.display = "none";
// }
