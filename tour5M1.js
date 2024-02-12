function tour5Start() {
    document.getElementById("tour5-match").style.display = "block";
    // document.getElementById("tour5-match").style.flexWrap = "wrap";
    document.getElementById("tour5-match").style.width = "35%";
    document.getElementById("tour5-match").style.marginTop = "0%";
    document.getElementById("tour-selection").style.display = "none";
}

function tour5M1start() {
    document.getElementById('tour5M1start').disabled = true;
    document.getElementById('tour5M2start').disabled = false;
    document.getElementById("tour5M1toss").style.display = "block";
    document.getElementById("tour5-match").style.display = "none";
    document.getElementById("gameName").style.fontSize = "20px";

}

// function pressing() {
//     document.getElementById('tour5-match').style.display = "block";
//     document.getElementById('tour5M1toss').style.display = "none";
// }



// var tour5odd1 = document.getElementById('tour5M1odd');
// tour5odd1.onclick = tour5odd;

// let b = Math.floor(Math.random() * 6) + 1;
// console.log("value is", b);

function tour5M1OddStart() {
    document.getElementById("tour5M1toss").style.display = "none";
    document.getElementById("tour5M1fist-T1").style.display = "block";
    document.getElementById("tour5M1fist-T2").style.display = "block";
    document.getElementById("tour5M1numberSelectorT").style.display = "block";

    var tour5M1rt1 = document.getElementById('tour5M1RT1');
    tour5M1rt1.onclick = tour5M1OddRT1;
    var tour5M1rt2 = document.getElementById('tour5M1RT2');
    tour5M1rt2.onclick = tour5M1OddRT2;
    var tour5M1rt3 = document.getElementById('tour5M1RT3');
    tour5M1rt3.onclick = tour5M1OddRT3;
    var tour5M1rt4 = document.getElementById('tour5M1RT4');
    tour5M1rt4.onclick = tour5M1OddRT4;
    var tour5M1rt5 = document.getElementById('tour5M1RT5');
    tour5M1rt5.onclick = tour5M1OddRT5;
    var tour5M1rt6 = document.getElementById('tour5M1RT6');
    tour5M1rt6.onclick = tour5M1OddRT6;
}

// var tour5eve1 = document.getElementById('tour5M1eve');
// tour5eve1.onclick = tour5M1eve;

function tour5M1eve() {
    document.getElementById("tour5M1toss").style.display = "none";
    document.getElementById("tour5M1fist-T1").style.display = "block";
    document.getElementById("tour5M1fist-T2").style.display = "block";
    document.getElementById("tour5M1numberSelectorT").style.display = "block";

    var tour5M1rt1 = document.getElementById('tour5M1RT1');
    tour5M1rt1.onclick = tour5M1EveRT1;
    var tour5M1rt2 = document.getElementById('tour5M1RT2');
    tour5M1rt2.onclick = tour5M1EveRT2;
    var tour5M1rt3 = document.getElementById('tour5M1RT3');
    tour5M1rt3.onclick = tour5M1EveRT3;
    var tour5M1rt4 = document.getElementById('tour5M1RT4');
    tour5M1rt4.onclick = tour5M1EveRT4;
    var tour5M1rt5 = document.getElementById('tour5M1RT5');
    tour5M1rt5.onclick = tour5M1EveRT5;
    var tour5M1rt6 = document.getElementById('tour5M1RT6');
    tour5M1rt6.onclick = tour5M1EveRT6;
}




function tour5M1forOdd1() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour5M1selectionByUser").style.display = "block";

        document.getElementById("tour5M1tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour5M1selectionByUser").style.display = "none";
        document.getElementById("tour5M1tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M1selectionByComp").style.display = "block";
        document.getElementById("tour5M1RT1").disabled = true;
        document.getElementById("tour5M1RT2").disabled = true;
        document.getElementById("tour5M1RT3").disabled = true;
        document.getElementById("tour5M1RT4").disabled = true;
        document.getElementById("tour5M1RT5").disabled = true;
        document.getElementById("tour5M1RT6").disabled = true;
        var tour5M1opt = ['Bat', 'Bowl'];
        const tour5M1chose = Math.floor(Math.random() * tour5M1opt.length);
        const tour5M1selectedopt = tour5M1opt[tour5M1chose];
        document.getElementById("tour5M1compOpt").innerText = tour5M1selectedopt;
        var tour5M1selected = 'Bat';
        if (tour5M1selectedopt.includes(tour5M1selected)) {
            // console.log(`bat selected`);
            tour5M1matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour5M1matchStartBat();
        }
    }
}
function tour5M1forOdd2() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour5M1selectionByUser").style.display = "block";

        document.getElementById("tour5M1tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour5M1selectionByUser").style.display = "none";
        document.getElementById("tour5M1tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M1selectionByComp").style.display = "block";
        document.getElementById("tour5M1RT1").disabled = true;
        document.getElementById("tour5M1RT2").disabled = true;
        document.getElementById("tour5M1RT3").disabled = true;
        document.getElementById("tour5M1RT4").disabled = true;
        document.getElementById("tour5M1RT5").disabled = true;
        document.getElementById("tour5M1RT6").disabled = true;
        var tour5M1opt = ['Bat', 'Bowl'];
        const tour5M1chose = Math.floor(Math.random() * tour5M1opt.length);
        const tour5M1selectedopt = tour5M1opt[tour5M1chose];
        document.getElementById("tour5M1compOpt").innerText = tour5M1selectedopt;
        var tour5M1selected = 'Bat';
        if (tour5M1selectedopt.includes(tour5M1selected)) {
            // console.log(`bat selected`);
            tour5M1matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour5M1matchStartBat();
        }
    }
}

function tour5M1forEve1() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour5M1selectionByUser").style.display = "block";

        document.getElementById("tour5M1tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour5M1selectionByUser").style.display = "none";
        document.getElementById("tour5M1tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M1RT1").disabled = true;
        document.getElementById("tour5M1RT2").disabled = true;
        document.getElementById("tour5M1RT3").disabled = true;
        document.getElementById("tour5M1RT4").disabled = true;
        document.getElementById("tour5M1RT5").disabled = true;
        document.getElementById("tour5M1RT6").disabled = true;
        document.getElementById("tour5M1selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour5M1compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour5M1matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour5M1matchStartBat();
        }
    }
}
function tour5M1forEve2() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour5M1selectionByUser").style.display = "block";

        document.getElementById("tour5M1tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour5M1selectionByUser").style.display = "none";
        document.getElementById("tour5M1tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M1RT1").disabled = true;
        document.getElementById("tour5M1RT2").disabled = true;
        document.getElementById("tour5M1RT3").disabled = true;
        document.getElementById("tour5M1RT4").disabled = true;
        document.getElementById("tour5M1RT5").disabled = true;
        document.getElementById("tour5M1RT6").disabled = true;
        document.getElementById("tour5M1selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour5M1compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour5M1matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour5M1matchStartBat();
        }
    }
}
//CHECK FROM HERE

//console.log()(x);

// If user chose odd
function tour5M1OddRT1() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "block";
    document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    document.getElementById("tour5M1num-TB2").style.display = "none";
    document.getElementById("tour5M1num-TB3").style.display = "none";
    document.getElementById("tour5M1num-TB4").style.display = "none";
    document.getElementById("tour5M1num-TB5").style.display = "none";
    document.getElementById("tour5M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M1forOdd1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}

function tour5M1OddRT2() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "none";
    document.getElementById("tour5M1num-TB2").style.display = "block";
    document.getElementById("tour5M1num-TB2").style.marginLeft = "550px";
    document.getElementById("tour5M1num-TB3").style.display = "none";
    document.getElementById("tour5M1num-TB4").style.display = "none";
    document.getElementById("tour5M1num-TB5").style.display = "none";
    document.getElementById("tour5M1num-TB6").style.display = "none";

    setTimeout(function () {
        tour5M1forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}

function tour5M1OddRT3() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "none";
    document.getElementById("tour5M1num-TB2").style.display = "none";
    document.getElementById("tour5M1num-TB3").style.display = "block";
    document.getElementById("tour5M1num-TB3").style.marginLeft = "570px";
    document.getElementById("tour5M1num-TB4").style.display = "none";
    document.getElementById("tour5M1num-TB5").style.display = "none";
    document.getElementById("tour5M1num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M1forOdd1();
    }, 1000);
    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}

function tour5M1OddRT4() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "none";
    document.getElementById("tour5M1num-TB2").style.display = "none";
    document.getElementById("tour5M1num-TB3").style.display = "none";
    document.getElementById("tour5M1num-TB4").style.display = "block";
    document.getElementById("tour5M1num-TB4").style.marginLeft = "550px";
    document.getElementById("tour5M1num-TB5").style.display = "none";
    document.getElementById("tour5M1num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M1forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}

function tour5M1OddRT5() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "none";
    document.getElementById("tour5M1num-TB2").style.display = "none";
    document.getElementById("tour5M1num-TB3").style.display = "none";
    document.getElementById("tour5M1num-TB4").style.display = "none";
    document.getElementById("tour5M1num-TB5").style.display = "block";
    document.getElementById("tour5M1num-TB5").style.marginLeft = "540px";
    document.getElementById("tour5M1num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M1forOdd1();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}

function tour5M1OddRT6() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "none";
    document.getElementById("tour5M1num-TB2").style.display = "none";
    document.getElementById("tour5M1num-TB3").style.display = "none";
    document.getElementById("tour5M1num-TB4").style.display = "none";
    document.getElementById("tour5M1num-TB5").style.display = "none";
    document.getElementById("tour5M1num-TB6").style.display = "block";
    document.getElementById("tour5M1num-TB6").style.marginLeft = "570px";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M1forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}
// If user chose Eve
function tour5M1EveRT1() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "block";
    document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    document.getElementById("tour5M1num-TB2").style.display = "none";
    document.getElementById("tour5M1num-TB3").style.display = "none";
    document.getElementById("tour5M1num-TB4").style.display = "none";
    document.getElementById("tour5M1num-TB5").style.display = "none";
    document.getElementById("tour5M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M1forEve1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}

function tour5M1EveRT2() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "none";
    document.getElementById("tour5M1num-TB2").style.marginLeft = "570px";
    document.getElementById("tour5M1num-TB2").style.display = "block";
    document.getElementById("tour5M1num-TB3").style.display = "none";
    document.getElementById("tour5M1num-TB4").style.display = "none";
    document.getElementById("tour5M1num-TB5").style.display = "none";
    document.getElementById("tour5M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M1forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}

function tour5M1EveRT3() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "none";
    document.getElementById("tour5M1num-TB3").style.marginLeft = "570px";
    document.getElementById("tour5M1num-TB2").style.display = "none";
    document.getElementById("tour5M1num-TB3").style.display = "block";
    document.getElementById("tour5M1num-TB4").style.display = "none";
    document.getElementById("tour5M1num-TB5").style.display = "none";
    document.getElementById("tour5M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M1forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}

function tour5M1EveRT4() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "none";
    document.getElementById("tour5M1num-TB4").style.marginLeft = "570px";
    document.getElementById("tour5M1num-TB2").style.display = "none";
    document.getElementById("tour5M1num-TB3").style.display = "none";
    document.getElementById("tour5M1num-TB4").style.display = "block";
    document.getElementById("tour5M1num-TB5").style.display = "none";
    document.getElementById("tour5M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M1forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}

function tour5M1EveRT5() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "none";
    document.getElementById("tour5M1num-TB5").style.marginLeft = "570px";
    document.getElementById("tour5M1num-TB2").style.display = "none";
    document.getElementById("tour5M1num-TB3").style.display = "none";
    document.getElementById("tour5M1num-TB4").style.display = "none";
    document.getElementById("tour5M1num-TB5").style.display = "block";
    document.getElementById("tour5M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M1forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}

function tour5M1EveRT6() {
    document.getElementById("tour5M1fist-T2").style.display = "none";
    document.getElementById("tour5M1num-TB1").style.display = "none";
    document.getElementById("tour5M1num-TB6").style.marginLeft = "570px";
    document.getElementById("tour5M1num-TB2").style.display = "none";
    document.getElementById("tour5M1num-TB3").style.display = "none";
    document.getElementById("tour5M1num-TB4").style.display = "none";
    document.getElementById("tour5M1num-TB5").style.display = "none";
    document.getElementById("tour5M1num-TB6").style.display = "block";
    //console.log()(x);
    setTimeout(function () {

        tour5M1forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "block";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "block";
        document.getElementById("tour5M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "block";
        document.getElementById("tour5M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "block";
        document.getElementById("tour5M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M1fist-T1").style.display = "none";
        document.getElementById("tour5M1num-TA1").style.display = "none";
        document.getElementById("tour5M1num-TA2").style.display = "none";
        document.getElementById("tour5M1num-TA3").style.display = "none";
        document.getElementById("tour5M1num-TA4").style.display = "none";
        document.getElementById("tour5M1num-TA5").style.display = "none";
        document.getElementById("tour5M1num-TA6").style.display = "block";
        document.getElementById("tour5M1num-TA6").style.marginLeft = "40%";
    }
}

/* TOSS END */

/* ENTERING MATCH */
function tour5M1cont() {
    document.getElementById("tour5M1tossing").style.display = "none";
    document.getElementById("tour5M1selectionByComp").style.display = "none";
    document.getElementById("tour5M1main-container").style.display = "block";
    document.getElementById("tour5M1main-container").style.filter = 'blur(0px)';
    document.getElementById("tour5M1R1").disabled = false;
    document.getElementById("tour5M1R2").disabled = false;
    document.getElementById("tour5M1R3").disabled = false;
    document.getElementById("tour5M1R4").disabled = false;
    document.getElementById("tour5M1R5").disabled = false;
    document.getElementById("tour5M1R6").disabled = false;
}
function tour5M1contChaseUser() {
    document.getElementById('tour5M1targetChaseComp').style.display = "none";
    document.getElementById('tour5M1targetChaseUser').style.display = "none";
    document.getElementById("tour5M1R1").disabled = false;
    document.getElementById("tour5M1R2").disabled = false;
    document.getElementById("tour5M1R3").disabled = false;
    document.getElementById("tour5M1R4").disabled = false;
    document.getElementById("tour5M1R5").disabled = false;
    document.getElementById("tour5M1R6").disabled = false;
}
function tour5M1contChaseComp() {
    document.getElementById('tour5M1targetChaseComp').style.display = "none";
    document.getElementById('tour5M1targetChaseUser').style.display = "none";
    document.getElementById("tour5M1R1").disabled = false;
    document.getElementById("tour5M1R2").disabled = false;
    document.getElementById("tour5M1R3").disabled = false;
    document.getElementById("tour5M1R4").disabled = false;
    document.getElementById("tour5M1R5").disabled = false;
    document.getElementById("tour5M1R6").disabled = false;
}


function tour5M1matchStartBowl() {
    tossing = document.getElementById("tour5M1tossing").style.display = "none";
    tossing = document.getElementById("tour5M1selectionByUser").style.display = "none";
    tossing = document.getElementById("tour5M1main-container").style.display = "block";
    tour5M1bowlfirst();
}

function tour5M1bowlfirst() {
    var r1 = document.getElementById('tour5M1R1');
    r1.onclick = tour5M1bowlFirstR1;
    var r2 = document.getElementById('tour5M1R2');
    r2.onclick = tour5M1bowlFirstR2;
    var r3 = document.getElementById('tour5M1R3');
    r3.onclick = tour5M1bowlFirstR3;
    var r4 = document.getElementById('tour5M1R4');
    r4.onclick = tour5M1bowlFirstR4;
    var r5 = document.getElementById('tour5M1R5');
    r5.onclick = tour5M1bowlFirstR5;
    var r6 = document.getElementById('tour5M1R6');
    r6.onclick = tour5M1bowlFirstR6;
}

function tour5M1batSecond() {
    var r1 = document.getElementById('tour5M1R1');
    r1.onclick = tour5M1batSecondR1;
    var r2 = document.getElementById('tour5M1R2');
    r2.onclick = tour5M1batSecondR2;
    var r3 = document.getElementById('tour5M1R3');
    r3.onclick = tour5M1batSecondR3;
    var r4 = document.getElementById('tour5M1R4');
    r4.onclick = tour5M1batSecondR4;
    var r5 = document.getElementById('tour5M1R5');
    r5.onclick = tour5M1batSecondR5;
    var r6 = document.getElementById('tour5M1R6');
    r6.onclick = tour5M1batSecondR6;
}


 var tour5M1compScore = 0;


function tour5M1bowlFirstR1() {
    let y = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "block";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "0%";
    if (y == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        document.getElementById('tour5M1targetValue').textContent = tour5M1compScore + 1;
        document.getElementById('tour5M1targetChaseUser').style.display = "block";
        document.getElementById('tour5M1runChaseUser').textContent = tour5M1compScore + 1;
        tour5M1batSecond();
    }
    else if (y == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += y;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (y == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += y;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (y == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += y;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (y == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += y;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (y == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
         document.getElementById('tour5M1num-A5').style.display = "none";
         document.getElementById('tour5M1num-A6').style.display = "block";
         tour5M1compScore += y;
         document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
     }


}

 function tour5M1bowlFirstR2() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "block";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let y = Math.floor(Math.random() * 6) + 1;
    if (y == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += y;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (y == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        document.getElementById('tour5M1targetValue').innerText = tour5M1compScore + 1;
        document.getElementById('tour5M1targetChaseUser').style.display = "block";
        document.getElementById('tour5M1runChaseUser').textContent = tour5M1compScore + 1;
        tour5M1batSecond();

    }
    else if (y == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += y;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (y == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += y;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (y == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += y;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (y == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1compScore += y;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }


}

function tour5M1bowlFirstR3() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "block";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        document.getElementById('tour5M1targetValue').innerText = tour5M1compScore + 1;
        document.getElementById('tour5M1targetChaseUser').style.display = "block";
        document.getElementById('tour5M1runChaseUser').textContent = tour5M1compScore + 1;
        tour5M1batSecond();
    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }


}

function tour5M1bowlFirstR4() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "block";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        document.getElementById('tour5M1targetValue').innerText = tour5M1compScore + 1;
        document.getElementById('tour5M1targetChaseUser').style.display = "block";
        document.getElementById('tour5M1runChaseUser').textContent = tour5M1compScore + 1;
        tour5M1batSecond();

    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }


}

function tour5M1bowlFirstR5() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "block";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        document.getElementById('tour5M1targetValue').innerText = tour5M1compScore + 1;
        document.getElementById('tour5M1targetChaseUser').style.display = "block";
        document.getElementById('tour5M1runChaseUser').textContent = tour5M1compScore + 1;
        tour5M1batSecond();

    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }


}

function tour5M1bowlFirstR6() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "block";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;

    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        document.getElementById('tour5M1targetValue').textContent = tour5M1compScore + 1;
        document.getElementById('tour5M1targetChaseUser').style.display = "block";
        document.getElementById('tour5M1runChaseUser').textContent = tour5M1compScore + 1;
        tour5M1batSecond();

    }


}

 var tour5M1userScore = 0;
 // var tour5M1runToChaseUser = (tour5M1userScore + 1);
var tour5userpoints = 0;
var tour5comppoints = 0;

function tour5M1batSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "block";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "0%";
    /*var halfCentury = false;
    if (userScore >= 50 && halfCentury == false) {
        document.getElementById("halfCenturyUser").style.display = "block";
        halfCentury == true;
    }*/
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 1;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M1compScore == tour5M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseComp > tour5M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M1compWonBy").textContent = (tour5M1runToChaseComp - tour5M1userScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By " + (tour5M1runToChaseComp - tour5M1userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 1;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp < tour5M1userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp < tour5M1userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp < tour5M1userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp < tour5M1userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1userScore = tour5M1userScore + 1;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp < tour5M1userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M1batSecondR2() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "block";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 2;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M1compScore == tour5M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseComp > tour5M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M1compWonBy").textContent = (tour5M1runToChaseComp - tour5M1userScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By " + (tour5M1runToChaseComp - tour5M1userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 2;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 2;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                          //If the user chased the target
            document.getElementById("tour5M1matchEnd").style.display = "block";
            document.getElementById("tour5M1userWins").style.display = "block";
            document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
            document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 2;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1userScore = tour5M1userScore + 2;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M1batSecondR3() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "block";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 3;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 3;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M1compScore == tour5M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseComp > tour5M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M1compWonBy").textContent = (tour5M1runToChaseComp - tour5M1userScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By " + (tour5M1runToChaseComp - tour5M1userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 3;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 3;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1userScore = tour5M1userScore + 3;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M1batSecondR4() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "block";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 4;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 4;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 4;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M1compScore == tour5M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseComp > tour5M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M1compWonBy").textContent = (tour5M1runToChaseComp - tour5M1userScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By " + (tour5M1runToChaseComp - tour5M1userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 4;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1userScore = tour5M1userScore + 4;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M1batSecondR5() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "block";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 5;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 5;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 5;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 5;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M1compScore == tour5M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseComp > tour5M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M1compWonBy").textContent = (tour5M1runToChaseComp - tour5M1userScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By " + (tour5M1runToChaseComp - tour5M1userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1userScore = tour5M1userScore + 5;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }


}

function tour5M1batSecondR6() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "block";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 6;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 6;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 6;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 6;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 6;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        var tour5M1runToChaseComp = tour5M1compScore + 1;
        if (tour5M1runToChaseComp <= tour5M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By 1 Wicket";
                tour5userpoints++;
                
            }, 1000);
        } else if (tour5M1compScore == tour5M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseComp > tour5M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M1compWonBy").textContent = (tour5M1runToChaseComp - tour5M1userScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By " + (tour5M1runToChaseComp - tour5M1userScore) + " Runs";
                tour5comppoints++;
                
            }, 1000);
        }

    }


}

function tour5M1matchStartBat() {
        tossing = document.getElementById("tour5M1tossing").style.display = "none";
        tossing = document.getElementById("tour5M1selectionByUser").style.display = "none";
        tossing = document.getElementById("tour5M1main-container").style.display = "block";
        tour5M1batFirst();
}

function tour5M1batFirst() {
    var r1 = document.getElementById('tour5M1R1');
    r1.onclick = tour5M1batFirstR1;
    var r2 = document.getElementById('tour5M1R2');
    r2.onclick = tour5M1batFirstR2;
    var r3 = document.getElementById('tour5M1R3');
    r3.onclick = tour5M1batFirstR3;
    var r4 = document.getElementById('tour5M1R4');
    r4.onclick = tour5M1batFirstR4;
    var r5 = document.getElementById('tour5M1R5');
    r5.onclick = tour5M1batFirstR5;
    var r6 = document.getElementById('tour5M1R6');
    r6.onclick = tour5M1batFirstR6;
}

// let runtextUser = document.getElementById('userRun').innerText;
// var halfCentury = false;
// if (runtextUser >= 50 && halfCentury == false) {
//     document.getElementById("halfCenturyUser").style.display = "block";
//     halfCentury == true;
// }

function tour5M1batFirstR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "block";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        document.getElementById('tour5M1targetValue').textContent = tour5M1userScore + 1;
        document.getElementById('tour5M1targetChaseComp').style.display = "block";
        document.getElementById('tour5M1runChaseComp').textContent = tour5M1userScore + 1;
        tour5M1bowlSecond();
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 1;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 1;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 1;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 1;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1userScore = tour5M1userScore + 1;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }


}

function tour5M1batFirstR2() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "block";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 2;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        document.getElementById('tour5M1targetValue').innerText = tour5M1userScore + 1;
        document.getElementById('tour5M1targetChaseComp').style.display = "block";
        document.getElementById('tour5M1runChaseComp').textContent = tour5M1userScore + 1;
        tour5M1bowlSecond();

    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 2;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 2;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 2;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1userScore = tour5M1userScore + 2;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }


}

function tour5M1batFirstR3() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "block";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 3;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 3;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        document.getElementById('tour5M1targetValue').innerText = tour5M1userScore + 1;
        document.getElementById('tour5M1targetChaseComp').style.display = "block";
        document.getElementById('tour5M1runChaseComp').textContent = tour5M1userScore + 1;
        tour5M1bowlSecond();
    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 3;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 3;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1userScore = tour5M1userScore + 3;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }


}

function tour5M1batFirstR4() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "block";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 4;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 4;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 4;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        document.getElementById('tour5M1targetValue').innerText = tour5M1userScore + 1;
        document.getElementById('tour5M1targetChaseComp').style.display = "block";
        document.getElementById('tour5M1runChaseComp').textContent = tour5M1userScore + 1;
        tour5M1bowlSecond();

    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 4;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1userScore = tour5M1userScore + 4;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }


}

function tour5M1batFirstR5() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "block";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 5;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 5;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 5;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 5;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        document.getElementById('tour5M1targetValue').innerText = tour5M1userScore + 1;
        document.getElementById('tour5M1targetChaseComp').style.display = "block";
        document.getElementById('tour5M1runChaseComp').textContent = tour5M1userScore + 1;
        tour5M1bowlSecond();

    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1userScore = tour5M1userScore + 5;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }


}

function tour5M1batFirstR6() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "block";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 6;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 6;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;

    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 6;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 6;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1userScore = tour5M1userScore + 6;
        document.getElementById('tour5M1userRun').textContent = tour5M1userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        document.getElementById('tour5M1targetValue').innerText = tour5M1userScore + 1;
        document.getElementById('tour5M1targetChaseComp').style.display = "block";
        document.getElementById('tour5M1runChaseComp').textContent = tour5M1userScore + 1;
        tour5M1bowlSecond();

    }


}

function tour5M1bowlSecond() {
    var r1 = document.getElementById('tour5M1R1');
    r1.onclick = tour5M1bowlSecondR1;
    var r2 = document.getElementById('tour5M1R2');
    r2.onclick = tour5M1bowlSecondR2;
    var r3 = document.getElementById('tour5M1R3');
    r3.onclick = tour5M1bowlSecondR3;
    var r4 = document.getElementById('tour5M1R4');
    r4.onclick = tour5M1bowlSecondR4;
    var r5 = document.getElementById('tour5M1R5');
    r5.onclick = tour5M1bowlSecondR5;
    var r6 = document.getElementById('tour5M1R6');
    r6.onclick = tour5M1bowlSecondR6;
}

function tour5M1bowlSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "block";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M1userScore == tour5M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseUser > tour5M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M1userWonBy").textContent = (tour5M1runToChaseUser - tour5M1compScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By " + (tour5M1runToChaseUser - tour5M1compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


 }

function tour5M1bowlSecondR2() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "block";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M1userScore == tour5M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseUser > tour5M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M1userWonBy").textContent = (tour5M1runToChaseUser - tour5M1compScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By " + (tour5M1runToChaseUser - tour5M1compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M1bowlSecondR3() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "block";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M1userScore == tour5M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseUser > tour5M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M1userWonBy").textContent = (tour5M1runToChaseUser - tour5M1compScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By " + (tour5M1runToChaseUser - tour5M1compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M1bowlSecondR4() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "block";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M1userScore == tour5M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseUser > tour5M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M1userWonBy").textContent = (tour5M1runToChaseUser - tour5M1compScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By " + (tour5M1runToChaseUser - tour5M1compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M1bowlSecondR5() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "block";
    document.getElementById('tour5M1num-B6').style.display = "none";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M1userScore == tour5M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseUser > tour5M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M1userWonBy").textContent = (tour5M1runToChaseUser - tour5M1compScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By " + (tour5M1runToChaseUser - tour5M1compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }


}

function tour5M1bowlSecondR6() {
    document.getElementById('tour5M1fist-2').style.display = "none";
    document.getElementById('tour5M1num-B1').style.display = "none";
    document.getElementById('tour5M1num-B2').style.display = "none";
    document.getElementById('tour5M1num-B3').style.display = "none";
    document.getElementById('tour5M1num-B4').style.display = "none";
    document.getElementById('tour5M1num-B5').style.display = "none";
    document.getElementById('tour5M1num-B6').style.display = "block";
    document.getElementById('tour5M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "block";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "block";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "block";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "block";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "block";
        document.getElementById('tour5M1num-A6').style.display = "none";
        tour5M1compScore += x;
        document.getElementById('tour5M1compRun').textContent = tour5M1compScore;
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M1fist-1').style.display = "none";
        document.getElementById('tour5M1num-A1').style.display = "none";
        document.getElementById('tour5M1num-A2').style.display = "none";
        document.getElementById('tour5M1num-A3').style.display = "none";
        document.getElementById('tour5M1num-A4').style.display = "none";
        document.getElementById('tour5M1num-A5').style.display = "none";
        document.getElementById('tour5M1num-A6').style.display = "block";
        var tour5M1runToChaseUser = tour5M1userScore + 1;
        if (tour5M1runToChaseUser <= tour5M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1compWins").style.display = "block";
                document.getElementById("tour5M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                
            }, 1000);
        } else if (tour5M1userScore == tour5M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1tie").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M1runToChaseUser > tour5M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M1userWonBy").textContent = (tour5M1runToChaseUser - tour5M1compScore);
                document.getElementById("tour5M1matchEnd").style.display = "block";
                document.getElementById("tour5M1userWins").style.display = "block";
                document.getElementById("tour5M1batFirstWinUser").style.display = "block";
                document.getElementById("tour5M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M1R1").disabled = true;
                document.getElementById("tour5M1R2").disabled = true;
                document.getElementById("tour5M1R3").disabled = true;
                document.getElementById("tour5M1R4").disabled = true;
                document.getElementById("tour5M1R5").disabled = true;
                document.getElementById("tour5M1R6").disabled = true;
                document.getElementById("tour5M1winner-container").style.display = "block";
                document.getElementById('tour5M1winner').textContent = "You Won By " + (tour5M1runToChaseUser - tour5M1compScore) + " Runs";
                tour5userpoints++;
                
            }, 1000);
        }


    }


}

function tour5M1nextMatch() {
    document.getElementById("tour5M1main-container").style.display = "none";
    document.getElementById('tour5-match').style.display = "block";
    document.getElementById('tour5M2start').disabled = false;
    document.getElementById("tour5M1compWins").style.display = "none";
    document.getElementById("tour5M1userWins").style.display = "none";
    document.getElementById("tour5M1tie").style.display = "none";
    document.getElementById("tour5M1start").style.backgroundColor = '#685d5d';
    document.getElementById("tour5M1start").style.color = 'black';
    document.getElementById("tour5M2start").style.backgroundColor = 'rgb(13, 204, 13)';
    document.getElementById("tour5M2start").style.color = 'black';
    

}
