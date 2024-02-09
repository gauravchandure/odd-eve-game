function tour5M5start() {
    document.getElementById('tour5M5start').disabled = true;
    document.getElementById("tour5M5toss").style.display = "block";
    document.getElementById("tour5-match").style.display = "none";
    document.getElementById("gameName").style.fontSize = "20px";

}

// function pressing() {
//     document.getElementById('tour5-match').style.display = "block";
//     document.getElementById('tour5M5toss').style.display = "none";
// }



// var tour5odd1 = document.getElementById('tour5M5odd');
// tour5odd1.onclick = tour5odd;

// let g = Math.floor(Math.random() * 6) + 1;
// console.log("value is", g);

function tour5M5OddStart() {
    document.getElementById("tour5M5toss").style.display = "none";
    document.getElementById("tour5M5fist-T1").style.display = "block";
    document.getElementById("tour5M5fist-T2").style.display = "block";
    document.getElementById("tour5M5numberSelectorT").style.display = "block";

    var tour5M5rt1 = document.getElementById('tour5M5RT1');
    tour5M5rt1.onclick = tour5M5OddRT1;
    var tour5M5rt2 = document.getElementById('tour5M5RT2');
    tour5M5rt2.onclick = tour5M5OddRT2;
    var tour5M5rt3 = document.getElementById('tour5M5RT3');
    tour5M5rt3.onclick = tour5M5OddRT3;
    var tour5M5rt4 = document.getElementById('tour5M5RT4');
    tour5M5rt4.onclick = tour5M5OddRT4;
    var tour5M5rt5 = document.getElementById('tour5M5RT5');
    tour5M5rt5.onclick = tour5M5OddRT5;
    var tour5M5rt6 = document.getElementById('tour5M5RT6');
    tour5M5rt6.onclick = tour5M5OddRT6;
}

// var tour5eve1 = document.getElementById('tour5M5eve');
// tour5eve1.onclick = tour5M5eve;

function tour5M5eve() {
    document.getElementById("tour5M5toss").style.display = "none";
    document.getElementById("tour5M5fist-T1").style.display = "block";
    document.getElementById("tour5M5fist-T2").style.display = "block";
    document.getElementById("tour5M5numberSelectorT").style.display = "block";

    var tour5M5rt1 = document.getElementById('tour5M5RT1');
    tour5M5rt1.onclick = tour5M5EveRT1;
    var tour5M5rt2 = document.getElementById('tour5M5RT2');
    tour5M5rt2.onclick = tour5M5EveRT2;
    var tour5M5rt3 = document.getElementById('tour5M5RT3');
    tour5M5rt3.onclick = tour5M5EveRT3;
    var tour5M5rt4 = document.getElementById('tour5M5RT4');
    tour5M5rt4.onclick = tour5M5EveRT4;
    var tour5M5rt5 = document.getElementById('tour5M5RT5');
    tour5M5rt5.onclick = tour5M5EveRT5;
    var tour5M5rt6 = document.getElementById('tour5M5RT6');
    tour5M5rt6.onclick = tour5M5EveRT6;
}




function tour5M5forOdd1() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour5M5selectionByUser").style.display = "block";

        document.getElementById("tour5M5tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour5M5selectionByUser").style.display = "none";
        document.getElementById("tour5M5tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M5selectionByComp").style.display = "block";
        document.getElementById("tour5M5RT1").disabled = true;
        document.getElementById("tour5M5RT2").disabled = true;
        document.getElementById("tour5M5RT3").disabled = true;
        document.getElementById("tour5M5RT4").disabled = true;
        document.getElementById("tour5M5RT5").disabled = true;
        document.getElementById("tour5M5RT6").disabled = true;
        var tour5M5opt = ['Bat', 'Bowl'];
        const tour5M5chose = Math.floor(Math.random() * tour5M5opt.length);
        const tour5M5selectedopt = tour5M5opt[tour5M5chose];
        document.getElementById("tour5M5compOpt").innerText = tour5M5selectedopt;
        var tour5M5selected = 'Bat';
        if (tour5M5selectedopt.includes(tour5M5selected)) {
            // console.log(`bat selected`);
            tour5M5matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour5M5matchStartBat();
        }
    }
}
function tour5M5forOdd2() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour5M5selectionByUser").style.display = "block";

        document.getElementById("tour5M5tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour5M5selectionByUser").style.display = "none";
        document.getElementById("tour5M5tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M5selectionByComp").style.display = "block";
        document.getElementById("tour5M5RT1").disabled = true;
        document.getElementById("tour5M5RT2").disabled = true;
        document.getElementById("tour5M5RT3").disabled = true;
        document.getElementById("tour5M5RT4").disabled = true;
        document.getElementById("tour5M5RT5").disabled = true;
        document.getElementById("tour5M5RT6").disabled = true;
        var tour5M5opt = ['Bat', 'Bowl'];
        const tour5M5chose = Math.floor(Math.random() * tour5M5opt.length);
        const tour5M5selectedopt = tour5M5opt[tour5M5chose];
        document.getElementById("tour5M5compOpt").innerText = tour5M5selectedopt;
        var tour5M5selected = 'Bat';
        if (tour5M5selectedopt.includes(tour5M5selected)) {
            // console.log(`bat selected`);
            tour5M5matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour5M5matchStartBat();
        }
    }
}

function tour5M5forEve1() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour5M5selectionByUser").style.display = "block";

        document.getElementById("tour5M5tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour5M5selectionByUser").style.display = "none";
        document.getElementById("tour5M5tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M5RT1").disabled = true;
        document.getElementById("tour5M5RT2").disabled = true;
        document.getElementById("tour5M5RT3").disabled = true;
        document.getElementById("tour5M5RT4").disabled = true;
        document.getElementById("tour5M5RT5").disabled = true;
        document.getElementById("tour5M5RT6").disabled = true;
        document.getElementById("tour5M5selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour5M5compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour5M5matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour5M5matchStartBat();
        }
    }
}
function tour5M5forEve2() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour5M5selectionByUser").style.display = "block";

        document.getElementById("tour5M5tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour5M5selectionByUser").style.display = "none";
        document.getElementById("tour5M5tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M5RT1").disabled = true;
        document.getElementById("tour5M5RT2").disabled = true;
        document.getElementById("tour5M5RT3").disabled = true;
        document.getElementById("tour5M5RT4").disabled = true;
        document.getElementById("tour5M5RT5").disabled = true;
        document.getElementById("tour5M5RT6").disabled = true;
        document.getElementById("tour5M5selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour5M5compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour5M5matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour5M5matchStartBat();
        }
    }
}
//CHECK FROM HERE

//console.log()(x);

// If user chose odd
function tour5M5OddRT1() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "block";
    document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    document.getElementById("tour5M5num-TB2").style.display = "none";
    document.getElementById("tour5M5num-TB3").style.display = "none";
    document.getElementById("tour5M5num-TB4").style.display = "none";
    document.getElementById("tour5M5num-TB5").style.display = "none";
    document.getElementById("tour5M5num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M5forOdd1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}

function tour5M5OddRT2() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "none";
    document.getElementById("tour5M5num-TB2").style.display = "block";
    document.getElementById("tour5M5num-TB2").style.marginLeft = "550px";
    document.getElementById("tour5M5num-TB3").style.display = "none";
    document.getElementById("tour5M5num-TB4").style.display = "none";
    document.getElementById("tour5M5num-TB5").style.display = "none";
    document.getElementById("tour5M5num-TB6").style.display = "none";

    setTimeout(function () {
        tour5M5forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}

function tour5M5OddRT3() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "none";
    document.getElementById("tour5M5num-TB2").style.display = "none";
    document.getElementById("tour5M5num-TB3").style.display = "block";
    document.getElementById("tour5M5num-TB3").style.marginLeft = "570px";
    document.getElementById("tour5M5num-TB4").style.display = "none";
    document.getElementById("tour5M5num-TB5").style.display = "none";
    document.getElementById("tour5M5num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M5forOdd1();
    }, 1000);
    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}

function tour5M5OddRT4() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "none";
    document.getElementById("tour5M5num-TB2").style.display = "none";
    document.getElementById("tour5M5num-TB3").style.display = "none";
    document.getElementById("tour5M5num-TB4").style.display = "block";
    document.getElementById("tour5M5num-TB4").style.marginLeft = "550px";
    document.getElementById("tour5M5num-TB5").style.display = "none";
    document.getElementById("tour5M5num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M5forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}

function tour5M5OddRT5() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "none";
    document.getElementById("tour5M5num-TB2").style.display = "none";
    document.getElementById("tour5M5num-TB3").style.display = "none";
    document.getElementById("tour5M5num-TB4").style.display = "none";
    document.getElementById("tour5M5num-TB5").style.display = "block";
    document.getElementById("tour5M5num-TB5").style.marginLeft = "540px";
    document.getElementById("tour5M5num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M5forOdd1();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}

function tour5M5OddRT6() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "none";
    document.getElementById("tour5M5num-TB2").style.display = "none";
    document.getElementById("tour5M5num-TB3").style.display = "none";
    document.getElementById("tour5M5num-TB4").style.display = "none";
    document.getElementById("tour5M5num-TB5").style.display = "none";
    document.getElementById("tour5M5num-TB6").style.display = "block";
    document.getElementById("tour5M5num-TB6").style.marginLeft = "570px";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M5forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}
// If user chose Eve
function tour5M5EveRT1() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "block";
    document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    document.getElementById("tour5M5num-TB2").style.display = "none";
    document.getElementById("tour5M5num-TB3").style.display = "none";
    document.getElementById("tour5M5num-TB4").style.display = "none";
    document.getElementById("tour5M5num-TB5").style.display = "none";
    document.getElementById("tour5M5num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M5forEve1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}

function tour5M5EveRT2() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "none";
    document.getElementById("tour5M5num-TB2").style.marginLeft = "570px";
    document.getElementById("tour5M5num-TB2").style.display = "block";
    document.getElementById("tour5M5num-TB3").style.display = "none";
    document.getElementById("tour5M5num-TB4").style.display = "none";
    document.getElementById("tour5M5num-TB5").style.display = "none";
    document.getElementById("tour5M5num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M5forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}

function tour5M5EveRT3() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "none";
    document.getElementById("tour5M5num-TB3").style.marginLeft = "570px";
    document.getElementById("tour5M5num-TB2").style.display = "none";
    document.getElementById("tour5M5num-TB3").style.display = "block";
    document.getElementById("tour5M5num-TB4").style.display = "none";
    document.getElementById("tour5M5num-TB5").style.display = "none";
    document.getElementById("tour5M5num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M5forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}

function tour5M5EveRT4() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "none";
    document.getElementById("tour5M5num-TB4").style.marginLeft = "570px";
    document.getElementById("tour5M5num-TB2").style.display = "none";
    document.getElementById("tour5M5num-TB3").style.display = "none";
    document.getElementById("tour5M5num-TB4").style.display = "block";
    document.getElementById("tour5M5num-TB5").style.display = "none";
    document.getElementById("tour5M5num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M5forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}

function tour5M5EveRT5() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "none";
    document.getElementById("tour5M5num-TB5").style.marginLeft = "570px";
    document.getElementById("tour5M5num-TB2").style.display = "none";
    document.getElementById("tour5M5num-TB3").style.display = "none";
    document.getElementById("tour5M5num-TB4").style.display = "none";
    document.getElementById("tour5M5num-TB5").style.display = "block";
    document.getElementById("tour5M5num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M5forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}

function tour5M5EveRT6() {
    document.getElementById("tour5M5fist-T2").style.display = "none";
    document.getElementById("tour5M5num-TB1").style.display = "none";
    document.getElementById("tour5M5num-TB6").style.marginLeft = "570px";
    document.getElementById("tour5M5num-TB2").style.display = "none";
    document.getElementById("tour5M5num-TB3").style.display = "none";
    document.getElementById("tour5M5num-TB4").style.display = "none";
    document.getElementById("tour5M5num-TB5").style.display = "none";
    document.getElementById("tour5M5num-TB6").style.display = "block";
    //console.log()(x);
    setTimeout(function () {

        tour5M5forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "block";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "block";
        document.getElementById("tour5M5num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "block";
        document.getElementById("tour5M5num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "block";
        document.getElementById("tour5M5num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M5num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M5fist-T1").style.display = "none";
        document.getElementById("tour5M5num-TA1").style.display = "none";
        document.getElementById("tour5M5num-TA2").style.display = "none";
        document.getElementById("tour5M5num-TA3").style.display = "none";
        document.getElementById("tour5M5num-TA4").style.display = "none";
        document.getElementById("tour5M5num-TA5").style.display = "none";
        document.getElementById("tour5M5num-TA6").style.display = "block";
        document.getElementById("tour5M5num-TA6").style.marginLeft = "40%";
    }
}

/* TOSS END */

/* ENTERING MATCH */
function tour5M5cont() {
    document.getElementById("tour5M5tossing").style.display = "none";
    document.getElementById("tour5M5selectionByComp").style.display = "none";
    document.getElementById("tour5M5main-container").style.display = "block";
    document.getElementById("tour5M5main-container").style.filter = 'blur(0px)';
    document.getElementById("tour5M5R1").disabled = false;
    document.getElementById("tour5M5R2").disabled = false;
    document.getElementById("tour5M5R3").disabled = false;
    document.getElementById("tour5M5R4").disabled = false;
    document.getElementById("tour5M5R5").disabled = false;
    document.getElementById("tour5M5R6").disabled = false;
}
function tour5M5contChaseUser() {
    document.getElementById('tour5M5targetChaseComp').style.display = "none";
    document.getElementById('tour5M5targetChaseUser').style.display = "none";
    document.getElementById("tour5M5R1").disabled = false;
    document.getElementById("tour5M5R2").disabled = false;
    document.getElementById("tour5M5R3").disabled = false;
    document.getElementById("tour5M5R4").disabled = false;
    document.getElementById("tour5M5R5").disabled = false;
    document.getElementById("tour5M5R6").disabled = false;
}
function tour5M5contChaseComp() {
    document.getElementById('tour5M5targetChaseComp').style.display = "none";
    document.getElementById('tour5M5targetChaseUser').style.display = "none";
    document.getElementById("tour5M5R1").disabled = false;
    document.getElementById("tour5M5R2").disabled = false;
    document.getElementById("tour5M5R3").disabled = false;
    document.getElementById("tour5M5R4").disabled = false;
    document.getElementById("tour5M5R5").disabled = false;
    document.getElementById("tour5M5R6").disabled = false;
}


function tour5M5matchStartBowl() {
    tossing = document.getElementById("tour5M5tossing").style.display = "none";
    tossing = document.getElementById("tour5M5selectionByUser").style.display = "none";
    tossing = document.getElementById("tour5M5main-container").style.display = "block";
    tour5M5bowlfirst();
}

function tour5M5bowlfirst() {
    var r1 = document.getElementById('tour5M5R1');
    r1.onclick = tour5M5bowlFirstR1;
    var r2 = document.getElementById('tour5M5R2');
    r2.onclick = tour5M5bowlFirstR2;
    var r3 = document.getElementById('tour5M5R3');
    r3.onclick = tour5M5bowlFirstR3;
    var r4 = document.getElementById('tour5M5R4');
    r4.onclick = tour5M5bowlFirstR4;
    var r5 = document.getElementById('tour5M5R5');
    r5.onclick = tour5M5bowlFirstR5;
    var r6 = document.getElementById('tour5M5R6');
    r6.onclick = tour5M5bowlFirstR6;
}

function tour5M5batSecond() {
    var r1 = document.getElementById('tour5M5R1');
    r1.onclick = tour5M5batSecondR1;
    var r2 = document.getElementById('tour5M5R2');
    r2.onclick = tour5M5batSecondR2;
    var r3 = document.getElementById('tour5M5R3');
    r3.onclick = tour5M5batSecondR3;
    var r4 = document.getElementById('tour5M5R4');
    r4.onclick = tour5M5batSecondR4;
    var r5 = document.getElementById('tour5M5R5');
    r5.onclick = tour5M5batSecondR5;
    var r6 = document.getElementById('tour5M5R6');
    r6.onclick = tour5M5batSecondR6;
}


 var tour5M5compScore = 0;


function tour5M5bowlFirstR1() {
    let y = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "block";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "0%";
    if (y == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        document.getElementById('tour5M5targetValue').textContent = tour5M5compScore + 1;
        document.getElementById('tour5M5targetChaseUser').style.display = "block";
        document.getElementById('tour5M5runChaseUser').textContent = tour5M5compScore + 1;
        tour5M5batSecond();
    }
    else if (y == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += y;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (y == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += y;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (y == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += y;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (y == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += y;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (y == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
         document.getElementById('tour5M5num-A5').style.display = "none";
         document.getElementById('tour5M5num-A6').style.display = "block";
         tour5M5compScore += y;
         document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
     }


}

 function tour5M5bowlFirstR2() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "block";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let y = Math.floor(Math.random() * 6) + 1;
    if (y == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += y;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (y == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        document.getElementById('tour5M5targetValue').innerText = tour5M5compScore + 1;
        document.getElementById('tour5M5targetChaseUser').style.display = "block";
        document.getElementById('tour5M5runChaseUser').textContent = tour5M5compScore + 1;
        tour5M5batSecond();

    }
    else if (y == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += y;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (y == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += y;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (y == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += y;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (y == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5compScore += y;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }


}

function tour5M5bowlFirstR3() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "block";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        document.getElementById('tour5M5targetValue').innerText = tour5M5compScore + 1;
        document.getElementById('tour5M5targetChaseUser').style.display = "block";
        document.getElementById('tour5M5runChaseUser').textContent = tour5M5compScore + 1;
        tour5M5batSecond();
    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }


}

function tour5M5bowlFirstR4() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "block";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        document.getElementById('tour5M5targetValue').innerText = tour5M5compScore + 1;
        document.getElementById('tour5M5targetChaseUser').style.display = "block";
        document.getElementById('tour5M5runChaseUser').textContent = tour5M5compScore + 1;
        tour5M5batSecond();

    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }


}

function tour5M5bowlFirstR5() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "block";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        document.getElementById('tour5M5targetValue').innerText = tour5M5compScore + 1;
        document.getElementById('tour5M5targetChaseUser').style.display = "block";
        document.getElementById('tour5M5runChaseUser').textContent = tour5M5compScore + 1;
        tour5M5batSecond();

    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }


}

function tour5M5bowlFirstR6() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "block";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;

    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        document.getElementById('tour5M5targetValue').textContent = tour5M5compScore + 1;
        document.getElementById('tour5M5targetChaseUser').style.display = "block";
        document.getElementById('tour5M5runChaseUser').textContent = tour5M5compScore + 1;
        tour5M5batSecond();

    }


}

 var tour5M5userScore = 0;
 // var tour5M5runToChaseUser = (tour5M5userScore + 1);

function tour5M5batSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "block";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "0%";
    /*var halfCentury = false;
    if (userScore >= 50 && halfCentury == false) {
        document.getElementById("halfCenturyUser").style.display = "block";
        halfCentury == true;
    }*/
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 1;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        } else if (tour5M5compScore == tour5M5userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseComp > tour5M5userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M5compWonBy").textContent = (tour5M5runToChaseComp - tour5M5userScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By " + (tour5M5runToChaseComp - tour5M5userScore) + " Runs";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 1;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp < tour5M5userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp < tour5M5userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp < tour5M5userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp < tour5M5userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5userScore = tour5M5userScore + 1;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp < tour5M5userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }


}

function tour5M5batSecondR2() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "block";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 2;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        } else if (tour5M5compScore == tour5M5userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseComp > tour5M5userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M5compWonBy").textContent = (tour5M5runToChaseComp - tour5M5userScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By " + (tour5M5runToChaseComp - tour5M5userScore) + " Runs";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 2;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 2;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                          //If the user chased the target
            document.getElementById("tour5M5matchEnd").style.display = "block";
            document.getElementById("tour5M5userWins").style.display = "block";
            document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
            document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 2;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5userScore = tour5M5userScore + 2;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }


}

function tour5M5batSecondR3() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "block";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 3;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 3;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        } else if (tour5M5compScore == tour5M5userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseComp > tour5M5userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M5compWonBy").textContent = (tour5M5runToChaseComp - tour5M5userScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By " + (tour5M5runToChaseComp - tour5M5userScore) + " Runs";
                var updatedValuecomp = tourecomppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 3;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 3;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5userScore = tour5M5userScore + 3;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }


}

function tour5M5batSecondR4() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "block";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 4;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 4;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 4;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
            }, 1000);
        } else if (tour5M5compScore == tour5M5userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseComp > tour5M5userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M5compWonBy").textContent = (tour5M5runToChaseComp - tour5M5userScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By " + (tour5M5runToChaseComp - tour5M5userScore) + " Runs";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 4;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5userScore = tour5M5userScore + 4;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }


}

function tour5M5batSecondR5() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "block";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 5;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 5;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 5;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 5;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        } else if (tour5M5compScore == tour5M5userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseComp > tour5M5userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M5compWonBy").textContent = (tour5M5runToChaseComp - tour5M5userScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By " + (tour5M5runToChaseComp - tour5M5userScore) + " Runs";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5userScore = tour5M5userScore + 5;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }


}

function tour5M5batSecondR6() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "block";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 6;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 6;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 6;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 6;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 6;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        var tour5M5runToChaseComp = tour5M5compScore + 1;
        if (tour5M5runToChaseComp <= tour5M5userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        } else if (tour5M5compScore == tour5M5userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseComp > tour5M5userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M5compWonBy").textContent = (tour5M5runToChaseComp - tour5M5userScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By " + (tour5M5runToChaseComp - tour5M5userScore) + " Runs";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }


}

function tour5M5matchStartBat() {
        tossing = document.getElementById("tour5M5tossing").style.display = "none";
        tossing = document.getElementById("tour5M5selectionByUser").style.display = "none";
        tossing = document.getElementById("tour5M5main-container").style.display = "block";
        tour5M5batFirst();
}

function tour5M5batFirst() {
    var r1 = document.getElementById('tour5M5R1');
    r1.onclick = tour5M5batFirstR1;
    var r2 = document.getElementById('tour5M5R2');
    r2.onclick = tour5M5batFirstR2;
    var r3 = document.getElementById('tour5M5R3');
    r3.onclick = tour5M5batFirstR3;
    var r4 = document.getElementById('tour5M5R4');
    r4.onclick = tour5M5batFirstR4;
    var r5 = document.getElementById('tour5M5R5');
    r5.onclick = tour5M5batFirstR5;
    var r6 = document.getElementById('tour5M5R6');
    r6.onclick = tour5M5batFirstR6;
}

// let runtextUser = document.getElementById('userRun').innerText;
// var halfCentury = false;
// if (runtextUser >= 50 && halfCentury == false) {
//     document.getElementById("halfCenturyUser").style.display = "block";
//     halfCentury == true;
// }

function tour5M5batFirstR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "block";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        document.getElementById('tour5M5targetValue').textContent = tour5M5userScore + 1;
        document.getElementById('tour5M5targetChaseComp').style.display = "block";
        document.getElementById('tour5M5runChaseComp').textContent = tour5M5userScore + 1;
        tour5M5bowlSecond();
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 1;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 1;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 1;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 1;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5userScore = tour5M5userScore + 1;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }


}

function tour5M5batFirstR2() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "block";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 2;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        document.getElementById('tour5M5targetValue').innerText = tour5M5userScore + 1;
        document.getElementById('tour5M5targetChaseComp').style.display = "block";
        document.getElementById('tour5M5runChaseComp').textContent = tour5M5userScore + 1;
        tour5M5bowlSecond();

    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 2;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 2;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 2;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5userScore = tour5M5userScore + 2;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }


}

function tour5M5batFirstR3() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "block";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 3;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 3;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        document.getElementById('tour5M5targetValue').innerText = tour5M5userScore + 1;
        document.getElementById('tour5M5targetChaseComp').style.display = "block";
        document.getElementById('tour5M5runChaseComp').textContent = tour5M5userScore + 1;
        tour5M5bowlSecond();
    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 3;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 3;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5userScore = tour5M5userScore + 3;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }


}

function tour5M5batFirstR4() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "block";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 4;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 4;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 4;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        document.getElementById('tour5M5targetValue').innerText = tour5M5userScore + 1;
        document.getElementById('tour5M5targetChaseComp').style.display = "block";
        document.getElementById('tour5M5runChaseComp').textContent = tour5M5userScore + 1;
        tour5M5bowlSecond();

    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 4;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5userScore = tour5M5userScore + 4;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }


}

function tour5M5batFirstR5() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "block";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 5;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 5;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 5;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 5;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        document.getElementById('tour5M5targetValue').innerText = tour5M5userScore + 1;
        document.getElementById('tour5M5targetChaseComp').style.display = "block";
        document.getElementById('tour5M5runChaseComp').textContent = tour5M5userScore + 1;
        tour5M5bowlSecond();

    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5userScore = tour5M5userScore + 5;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }


}

function tour5M5batFirstR6() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "block";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 6;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 6;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;

    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 6;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 6;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5userScore = tour5M5userScore + 6;
        document.getElementById('tour5M5userRun').textContent = tour5M5userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        document.getElementById('tour5M5targetValue').innerText = tour5M5userScore + 1;
        document.getElementById('tour5M5targetChaseComp').style.display = "block";
        document.getElementById('tour5M5runChaseComp').textContent = tour5M5userScore + 1;
        tour5M5bowlSecond();

    }


}

function tour5M5bowlSecond() {
    var r1 = document.getElementById('tour5M5R1');
    r1.onclick = tour5M5bowlSecondR1;
    var r2 = document.getElementById('tour5M5R2');
    r2.onclick = tour5M5bowlSecondR2;
    var r3 = document.getElementById('tour5M5R3');
    r3.onclick = tour5M5bowlSecondR3;
    var r4 = document.getElementById('tour5M5R4');
    r4.onclick = tour5M5bowlSecondR4;
    var r5 = document.getElementById('tour5M5R5');
    r5.onclick = tour5M5bowlSecondR5;
    var r6 = document.getElementById('tour5M5R6');
    r6.onclick = tour5M5bowlSecondR6;
}

function tour5M5bowlSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "block";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M5userScore == tour5M5compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseUser > tour5M5compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M5userWonBy").textContent = (tour5M5runToChaseUser - tour5M5compScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By " + (tour5M5runToChaseUser - tour5M5compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }


 }

function tour5M5bowlSecondR2() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "block";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M5userScore == tour5M5compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseUser > tour5M5compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M5userWonBy").textContent = (tour5M5runToChaseUser - tour5M5compScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By " + (tour5M5runToChaseUser - tour5M5compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }


}

function tour5M5bowlSecondR3() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "block";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M5userScore == tour5M5compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseUser > tour5M5compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M5userWonBy").textContent = (tour5M5runToChaseUser - tour5M5compScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By " + (tour5M5runToChaseUser - tour5M5compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }


}

function tour5M5bowlSecondR4() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "block";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M5userScore == tour5M5compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseUser > tour5M5compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M5userWonBy").textContent = (tour5M5runToChaseUser - tour5M5compScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By " + (tour5M5runToChaseUser - tour5M5compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }


}

function tour5M5bowlSecondR5() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "block";
    document.getElementById('tour5M5num-B6').style.display = "none";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M5userScore == tour5M5compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseUser > tour5M5compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M5userWonBy").textContent = (tour5M5runToChaseUser - tour5M5compScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By " + (tour5M5runToChaseUser - tour5M5compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }


}

function tour5M5bowlSecondR6() {
    document.getElementById('tour5M5fist-2').style.display = "none";
    document.getElementById('tour5M5num-B1').style.display = "none";
    document.getElementById('tour5M5num-B2').style.display = "none";
    document.getElementById('tour5M5num-B3').style.display = "none";
    document.getElementById('tour5M5num-B4').style.display = "none";
    document.getElementById('tour5M5num-B5').style.display = "none";
    document.getElementById('tour5M5num-B6').style.display = "block";
    document.getElementById('tour5M5userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "block";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "block";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "block";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "block";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "block";
        document.getElementById('tour5M5num-A6').style.display = "none";
        tour5M5compScore += x;
        document.getElementById('tour5M5compRun').textContent = tour5M5compScore;
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M5compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M5fist-1').style.display = "none";
        document.getElementById('tour5M5num-A1').style.display = "none";
        document.getElementById('tour5M5num-A2').style.display = "none";
        document.getElementById('tour5M5num-A3').style.display = "none";
        document.getElementById('tour5M5num-A4').style.display = "none";
        document.getElementById('tour5M5num-A5').style.display = "none";
        document.getElementById('tour5M5num-A6').style.display = "block";
        var tour5M5runToChaseUser = tour5M5userScore + 1;
        if (tour5M5runToChaseUser <= tour5M5compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5compWins").style.display = "block";
                document.getElementById("tour5M5bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Opponent Won By 1 Wicket";
                var updatedValuecomp = tour5comppoints++;
                localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M5userScore == tour5M5compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5tie").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M5runToChaseUser > tour5M5compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M5userWonBy").textContent = (tour5M5runToChaseUser - tour5M5compScore);
                document.getElementById("tour5M5matchEnd").style.display = "block";
                document.getElementById("tour5M5userWins").style.display = "block";
                document.getElementById("tour5M5batFirstWinUser").style.display = "block";
                document.getElementById("tour5M5main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M5R1").disabled = true;
                document.getElementById("tour5M5R2").disabled = true;
                document.getElementById("tour5M5R3").disabled = true;
                document.getElementById("tour5M5R4").disabled = true;
                document.getElementById("tour5M5R5").disabled = true;
                document.getElementById("tour5M5R6").disabled = true;
                document.getElementById("tour5M5winner-container").style.display = "block";
                document.getElementById('tour5M5winner').textContent = "You Won By " + (tour5M5runToChaseUser - tour5M5compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }


}

function tour5M5nextMatch() {
    document.getElementById("tour5M5main-container").style.display = "none";
    document.getElementById('tour5-match').style.display = "block";
    document.getElementById("tour5M5compWins").style.display = "none";
    document.getElementById("tour5M5userWins").style.display = "none";
    document.getElementById("tour5M5tie").style.display = "none";
    document.getElementById("tour5M5start").style.backgroundColor = '#685d5d';
    document.getElementById("tour5M5start").style.color = 'black';
    document.getElementById("tour5M5return").style.display = "block";
    document.getElementById("tour5-match").style.filter = 'blur(5px)';
    userpts = localStorage.getItem('User Points');
    comppts = localStorage.getItem('Computer Points');
    if(userpts > comppts) {
        document.getElementById("tour5M5wintitle").innerText = "You Won The Tournament!";
        localStorage.clear();
    }
    else if(userpts < comppts) {
        document.getElementById("tour5M5wintitle").innerText = "Opponent Won The Tournament!";
        localStorage.clear();
    }
    else if(userpts == comppts){
        document.getElementById("tour5M5wintitle").innerText = "Series Tied!";
        localStorage.clear();
    }

}

function returnhome() {
    location.reload();
    localStorage.clear();
}

// function btnClose() {
//     document.getElementById("halfCenturyUser").style.display = "none";
// }
