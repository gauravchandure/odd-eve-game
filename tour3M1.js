function tour3Start() {
    document.getElementById("tour3-match").style.display = "flex";
    document.getElementById("tour3-match").style.width = "35%";
    document.getElementById("tour3-match").style.marginTop = "10%";
    document.getElementById("tour-selection").style.display = "none";
}

function tour3M1start() {
    document.getElementById('tour3M1start').disabled = true;
    document.getElementById('tour3M2start').disabled = false;
    document.getElementById("tour3M1toss").style.display = "block";
    document.getElementById("tour3-match").style.display = "none";
    document.getElementById("gameName").style.fontSize = "20px";

}

// function pressing() {
//     document.getElementById('tour3-match').style.display = "block";
//     document.getElementById('tour3M1toss').style.display = "none";
// }



// var tour3odd1 = document.getElementById('tour3M1odd');
// tour3odd1.onclick = tour3odd;

 let y = Math.floor(Math.random() * 6) + 1;
// console.log("value is", y);

function tour3M1OddStart() {
    document.getElementById("tour3M1toss").style.display = "none";
    document.getElementById("tour3M1fist-T1").style.display = "block";
    document.getElementById("tour3M1fist-T2").style.display = "block";
    document.getElementById("tour3M1numberSelectorT").style.display = "block";

    var tour3M1rt1 = document.getElementById('tour3M1RT1');
    tour3M1rt1.onclick = tour3M1OddRT1;
    var tour3M1rt2 = document.getElementById('tour3M1RT2');
    tour3M1rt2.onclick = tour3M1OddRT2;
    var tour3M1rt3 = document.getElementById('tour3M1RT3');
    tour3M1rt3.onclick = tour3M1OddRT3;
    var tour3M1rt4 = document.getElementById('tour3M1RT4');
    tour3M1rt4.onclick = tour3M1OddRT4;
    var tour3M1rt5 = document.getElementById('tour3M1RT5');
    tour3M1rt5.onclick = tour3M1OddRT5;
    var tour3M1rt6 = document.getElementById('tour3M1RT6');
    tour3M1rt6.onclick = tour3M1OddRT6;
}

// var tour3eve1 = document.getElementById('tour3M1eve');
// tour3eve1.onclick = tour3M1eve;

function tour3M1eve() {
    document.getElementById("tour3M1toss").style.display = "none";
    document.getElementById("tour3M1fist-T1").style.display = "block";
    document.getElementById("tour3M1fist-T2").style.display = "block";
    document.getElementById("tour3M1numberSelectorT").style.display = "block";

    var tour3M1rt1 = document.getElementById('tour3M1RT1');
    tour3M1rt1.onclick = tour3M1EveRT1;
    var tour3M1rt2 = document.getElementById('tour3M1RT2');
    tour3M1rt2.onclick = tour3M1EveRT2;
    var tour3M1rt3 = document.getElementById('tour3M1RT3');
    tour3M1rt3.onclick = tour3M1EveRT3;
    var tour3M1rt4 = document.getElementById('tour3M1RT4');
    tour3M1rt4.onclick = tour3M1EveRT4;
    var tour3M1rt5 = document.getElementById('tour3M1RT5');
    tour3M1rt5.onclick = tour3M1EveRT5;
    var tour3M1rt6 = document.getElementById('tour3M1RT6');
    tour3M1rt6.onclick = tour3M1EveRT6;
}




function tour3M1forOdd1() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour3M1selectionByUser").style.display = "block";

        document.getElementById("tour3M1tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour3M1selectionByUser").style.display = "none";
        document.getElementById("tour3M1tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M1selectionByComp").style.display = "block";
        document.getElementById("tour3M1RT1").disabled = true;
        document.getElementById("tour3M1RT2").disabled = true;
        document.getElementById("tour3M1RT3").disabled = true;
        document.getElementById("tour3M1RT4").disabled = true;
        document.getElementById("tour3M1RT5").disabled = true;
        document.getElementById("tour3M1RT6").disabled = true;
        var tour3M1opt = ['Bat', 'Bowl'];
        const tour3M1chose = Math.floor(Math.random() * tour3M1opt.length);
        const tour3M1selectedopt = tour3M1opt[tour3M1chose];
        document.getElementById("tour3M1compOpt").innerText = tour3M1selectedopt;
        var tour3M1selected = 'Bat';
        if (tour3M1selectedopt.includes(tour3M1selected)) {
            // console.log(`bat selected`);
            tour3M1matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour3M1matchStartBat();
        }
    }
}
function tour3M1forOdd2() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour3M1selectionByUser").style.display = "block";

        document.getElementById("tour3M1tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour3M1selectionByUser").style.display = "none";
        document.getElementById("tour3M1tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M1selectionByComp").style.display = "block";
        document.getElementById("tour3M1RT1").disabled = true;
        document.getElementById("tour3M1RT2").disabled = true;
        document.getElementById("tour3M1RT3").disabled = true;
        document.getElementById("tour3M1RT4").disabled = true;
        document.getElementById("tour3M1RT5").disabled = true;
        document.getElementById("tour3M1RT6").disabled = true;
        var tour3M1opt = ['Bat', 'Bowl'];
        const tour3M1chose = Math.floor(Math.random() * tour3M1opt.length);
        const tour3M1selectedopt = tour3M1opt[tour3M1chose];
        document.getElementById("tour3M1compOpt").innerText = tour3M1selectedopt;
        var tour3M1selected = 'Bat';
        if (tour3M1selectedopt.includes(tour3M1selected)) {
            // console.log(`bat selected`);
            tour3M1matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour3M1matchStartBat();
        }
    }
}

function tour3M1forEve1() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour3M1selectionByUser").style.display = "block";

        document.getElementById("tour3M1tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour3M1selectionByUser").style.display = "none";
        document.getElementById("tour3M1tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M1RT1").disabled = true;
        document.getElementById("tour3M1RT2").disabled = true;
        document.getElementById("tour3M1RT3").disabled = true;
        document.getElementById("tour3M1RT4").disabled = true;
        document.getElementById("tour3M1RT5").disabled = true;
        document.getElementById("tour3M1RT6").disabled = true;
        document.getElementById("tour3M1selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour3M1compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour3M1matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour3M1matchStartBat();
        }
    }
}
function tour3M1forEve2() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour3M1selectionByUser").style.display = "block";

        document.getElementById("tour3M1tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour3M1selectionByUser").style.display = "none";
        document.getElementById("tour3M1tossing").style.filter = 'blur(5px)';
        document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
        document.getElementById("tour3M1RT1").disabled = true;
        document.getElementById("tour3M1RT2").disabled = true;
        document.getElementById("tour3M1RT3").disabled = true;
        document.getElementById("tour3M1RT4").disabled = true;
        document.getElementById("tour3M1RT5").disabled = true;
        document.getElementById("tour3M1RT6").disabled = true;
        document.getElementById("tour3M1selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour3M1compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour3M1matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour3M1matchStartBat();
        }
    }
}
//CHECK FROM HERE

//console.log()(x);

// If user chose odd
function tour3M1OddRT1() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "block";
    document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    document.getElementById("tour3M1num-TB2").style.display = "none";
    document.getElementById("tour3M1num-TB3").style.display = "none";
    document.getElementById("tour3M1num-TB4").style.display = "none";
    document.getElementById("tour3M1num-TB5").style.display = "none";
    document.getElementById("tour3M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M1forOdd1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}

function tour3M1OddRT2() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "none";
    document.getElementById("tour3M1num-TB2").style.display = "block";
    document.getElementById("tour3M1num-TB2").style.marginLeft = "550px";
    document.getElementById("tour3M1num-TB3").style.display = "none";
    document.getElementById("tour3M1num-TB4").style.display = "none";
    document.getElementById("tour3M1num-TB5").style.display = "none";
    document.getElementById("tour3M1num-TB6").style.display = "none";

    setTimeout(function () {
        tour3M1forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}

function tour3M1OddRT3() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "none";
    document.getElementById("tour3M1num-TB2").style.display = "none";
    document.getElementById("tour3M1num-TB3").style.display = "block";
    document.getElementById("tour3M1num-TB3").style.marginLeft = "570px";
    document.getElementById("tour3M1num-TB4").style.display = "none";
    document.getElementById("tour3M1num-TB5").style.display = "none";
    document.getElementById("tour3M1num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M1forOdd1();
    }, 1000);
    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}

function tour3M1OddRT4() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "none";
    document.getElementById("tour3M1num-TB2").style.display = "none";
    document.getElementById("tour3M1num-TB3").style.display = "none";
    document.getElementById("tour3M1num-TB4").style.display = "block";
    document.getElementById("tour3M1num-TB4").style.marginLeft = "550px";
    document.getElementById("tour3M1num-TB5").style.display = "none";
    document.getElementById("tour3M1num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M1forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}

function tour3M1OddRT5() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "none";
    document.getElementById("tour3M1num-TB2").style.display = "none";
    document.getElementById("tour3M1num-TB3").style.display = "none";
    document.getElementById("tour3M1num-TB4").style.display = "none";
    document.getElementById("tour3M1num-TB5").style.display = "block";
    document.getElementById("tour3M1num-TB5").style.marginLeft = "540px";
    document.getElementById("tour3M1num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M1forOdd1();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}

function tour3M1OddRT6() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "none";
    document.getElementById("tour3M1num-TB2").style.display = "none";
    document.getElementById("tour3M1num-TB3").style.display = "none";
    document.getElementById("tour3M1num-TB4").style.display = "none";
    document.getElementById("tour3M1num-TB5").style.display = "none";
    document.getElementById("tour3M1num-TB6").style.display = "block";
    document.getElementById("tour3M1num-TB6").style.marginLeft = "570px";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour3M1forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}
// If user chose Eve
function tour3M1EveRT1() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "block";
    document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    document.getElementById("tour3M1num-TB2").style.display = "none";
    document.getElementById("tour3M1num-TB3").style.display = "none";
    document.getElementById("tour3M1num-TB4").style.display = "none";
    document.getElementById("tour3M1num-TB5").style.display = "none";
    document.getElementById("tour3M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M1forEve1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}

function tour3M1EveRT2() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "none";
    document.getElementById("tour3M1num-TB2").style.marginLeft = "570px";
    document.getElementById("tour3M1num-TB2").style.display = "block";
    document.getElementById("tour3M1num-TB3").style.display = "none";
    document.getElementById("tour3M1num-TB4").style.display = "none";
    document.getElementById("tour3M1num-TB5").style.display = "none";
    document.getElementById("tour3M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M1forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}

function tour3M1EveRT3() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "none";
    document.getElementById("tour3M1num-TB3").style.marginLeft = "570px";
    document.getElementById("tour3M1num-TB2").style.display = "none";
    document.getElementById("tour3M1num-TB3").style.display = "block";
    document.getElementById("tour3M1num-TB4").style.display = "none";
    document.getElementById("tour3M1num-TB5").style.display = "none";
    document.getElementById("tour3M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M1forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}

function tour3M1EveRT4() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "none";
    document.getElementById("tour3M1num-TB4").style.marginLeft = "570px";
    document.getElementById("tour3M1num-TB2").style.display = "none";
    document.getElementById("tour3M1num-TB3").style.display = "none";
    document.getElementById("tour3M1num-TB4").style.display = "block";
    document.getElementById("tour3M1num-TB5").style.display = "none";
    document.getElementById("tour3M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M1forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}

function tour3M1EveRT5() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "none";
    document.getElementById("tour3M1num-TB5").style.marginLeft = "570px";
    document.getElementById("tour3M1num-TB2").style.display = "none";
    document.getElementById("tour3M1num-TB3").style.display = "none";
    document.getElementById("tour3M1num-TB4").style.display = "none";
    document.getElementById("tour3M1num-TB5").style.display = "block";
    document.getElementById("tour3M1num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour3M1forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}

function tour3M1EveRT6() {
    document.getElementById("tour3M1fist-T2").style.display = "none";
    document.getElementById("tour3M1num-TB1").style.display = "none";
    document.getElementById("tour3M1num-TB6").style.marginLeft = "570px";
    document.getElementById("tour3M1num-TB2").style.display = "none";
    document.getElementById("tour3M1num-TB3").style.display = "none";
    document.getElementById("tour3M1num-TB4").style.display = "none";
    document.getElementById("tour3M1num-TB5").style.display = "none";
    document.getElementById("tour3M1num-TB6").style.display = "block";
    //console.log()(x);
    setTimeout(function () {

        tour3M1forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "block";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "block";
        document.getElementById("tour3M1num-TA3").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "block";
        document.getElementById("tour3M1num-TA4").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "block";
        document.getElementById("tour3M1num-TA5").style.marginLeft = "40%";
        document.getElementById("tour3M1num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour3M1fist-T1").style.display = "none";
        document.getElementById("tour3M1num-TA1").style.display = "none";
        document.getElementById("tour3M1num-TA2").style.display = "none";
        document.getElementById("tour3M1num-TA3").style.display = "none";
        document.getElementById("tour3M1num-TA4").style.display = "none";
        document.getElementById("tour3M1num-TA5").style.display = "none";
        document.getElementById("tour3M1num-TA6").style.display = "block";
        document.getElementById("tour3M1num-TA6").style.marginLeft = "40%";
    }
}

/* TOSS END */

/* ENTERING MATCH */
function tour3M1cont() {
    document.getElementById("tour3M1tossing").style.display = "none";
    document.getElementById("tour3M1selectionByComp").style.display = "none";
    document.getElementById("tour3M1main-container").style.display = "block";
    document.getElementById("tour3M1main-container").style.filter = 'blur(0px)';
    document.getElementById("tour3M1R1").disabled = false;
    document.getElementById("tour3M1R2").disabled = false;
    document.getElementById("tour3M1R3").disabled = false;
    document.getElementById("tour3M1R4").disabled = false;
    document.getElementById("tour3M1R5").disabled = false;
    document.getElementById("tour3M1R6").disabled = false;
}
function tour3M1contChaseUser() {
    document.getElementById('tour3M1targetChaseComp').style.display = "none";
    document.getElementById('tour3M1targetChaseUser').style.display = "none";
    document.getElementById("tour3M1R1").disabled = false;
    document.getElementById("tour3M1R2").disabled = false;
    document.getElementById("tour3M1R3").disabled = false;
    document.getElementById("tour3M1R4").disabled = false;
    document.getElementById("tour3M1R5").disabled = false;
    document.getElementById("tour3M1R6").disabled = false;
}
function tour3M1contChaseComp() {
    document.getElementById('tour3M1targetChaseComp').style.display = "none";
    document.getElementById('tour3M1targetChaseUser').style.display = "none";
    document.getElementById("tour3M1R1").disabled = false;
    document.getElementById("tour3M1R2").disabled = false;
    document.getElementById("tour3M1R3").disabled = false;
    document.getElementById("tour3M1R4").disabled = false;
    document.getElementById("tour3M1R5").disabled = false;
    document.getElementById("tour3M1R6").disabled = false;
}


function tour3M1matchStartBowl() {
    tossing = document.getElementById("tour3M1tossing").style.display = "none";
    tossing = document.getElementById("tour3M1selectionByUser").style.display = "none";
    tossing = document.getElementById("tour3M1main-container").style.display = "block";
    tour3M1bowlfirst();
}

function tour3M1bowlfirst() {
    var r1 = document.getElementById('tour3M1R1');
    r1.onclick = tour3M1bowlFirstR1;
    var r2 = document.getElementById('tour3M1R2');
    r2.onclick = tour3M1bowlFirstR2;
    var r3 = document.getElementById('tour3M1R3');
    r3.onclick = tour3M1bowlFirstR3;
    var r4 = document.getElementById('tour3M1R4');
    r4.onclick = tour3M1bowlFirstR4;
    var r5 = document.getElementById('tour3M1R5');
    r5.onclick = tour3M1bowlFirstR5;
    var r6 = document.getElementById('tour3M1R6');
    r6.onclick = tour3M1bowlFirstR6;
}

function tour3M1batSecond() {
    var r1 = document.getElementById('tour3M1R1');
    r1.onclick = tour3M1batSecondR1;
    var r2 = document.getElementById('tour3M1R2');
    r2.onclick = tour3M1batSecondR2;
    var r3 = document.getElementById('tour3M1R3');
    r3.onclick = tour3M1batSecondR3;
    var r4 = document.getElementById('tour3M1R4');
    r4.onclick = tour3M1batSecondR4;
    var r5 = document.getElementById('tour3M1R5');
    r5.onclick = tour3M1batSecondR5;
    var r6 = document.getElementById('tour3M1R6');
    r6.onclick = tour3M1batSecondR6;
}


var tour3M1compScore = 0;


function tour3M1bowlFirstR1() {
    let y = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "block";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "0%";
    if (y == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        document.getElementById('tour3M1targetValue').textContent = tour3M1compScore + 1;
        document.getElementById('tour3M1targetChaseUser').style.display = "block";
        document.getElementById('tour3M1runChaseUser').textContent = tour3M1compScore + 1;
        tour3M1batSecond();
    }
    else if (y == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += y;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (y == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += y;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (y == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += y;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (y == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += y;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (y == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1compScore += y;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }


}

function tour3M1bowlFirstR2() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "block";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let y = Math.floor(Math.random() * 6) + 1;
    if (y == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += y;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (y == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        document.getElementById('tour3M1targetValue').innerText = tour3M1compScore + 1;
        document.getElementById('tour3M1targetChaseUser').style.display = "block";
        document.getElementById('tour3M1runChaseUser').textContent = tour3M1compScore + 1;
        tour3M1batSecond();

    }
    else if (y == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += y;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (y == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += y;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (y == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += y;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (y == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1compScore += y;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }


}

function tour3M1bowlFirstR3() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "block";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        document.getElementById('tour3M1targetValue').innerText = tour3M1compScore + 1;
        document.getElementById('tour3M1targetChaseUser').style.display = "block";
        document.getElementById('tour3M1runChaseUser').textContent = tour3M1compScore + 1;
        tour3M1batSecond();
    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }


}

function tour3M1bowlFirstR4() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "block";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        document.getElementById('tour3M1targetValue').innerText = tour3M1compScore + 1;
        document.getElementById('tour3M1targetChaseUser').style.display = "block";
        document.getElementById('tour3M1runChaseUser').textContent = tour3M1compScore + 1;
        tour3M1batSecond();

    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }


}

function tour3M1bowlFirstR5() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "block";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;

    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        document.getElementById('tour3M1targetValue').innerText = tour3M1compScore + 1;
        document.getElementById('tour3M1targetChaseUser').style.display = "block";
        document.getElementById('tour3M1runChaseUser').textContent = tour3M1compScore + 1;
        tour3M1batSecond();

    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }


}

function tour3M1bowlFirstR6() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "block";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;

    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;

    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        document.getElementById('tour3M1targetValue').textContent = tour3M1compScore + 1;
        document.getElementById('tour3M1targetChaseUser').style.display = "block";
        document.getElementById('tour3M1runChaseUser').textContent = tour3M1compScore + 1;
        tour3M1batSecond();

    }


}

var tour3M1userScore = 0;
// var tour3M1runToChaseUser = (tour3M1userScore + 1);
var tour3userpoints = 0;
var tour3comppoints = 0;
function tour3M1batSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "block";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "0%";
    /*var halfCentury = false;
    if (userScore >= 50 && halfCentury == false) {
        document.getElementById("halfCenturyUser").style.display = "block";
        halfCentury == true;
    }*/
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 1;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M1compScore == tour3M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseComp > tour3M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M1compWonBy").textContent = (tour3M1runToChaseComp - tour3M1userScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By " + (tour3M1runToChaseComp - tour3M1userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 1;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp < tour3M1userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp < tour3M1userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp < tour3M1userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp < tour3M1userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1userScore = tour3M1userScore + 1;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp < tour3M1userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M1batSecondR2() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "block";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 2;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M1compScore == tour3M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseComp > tour3M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M1compWonBy").textContent = (tour3M1runToChaseComp - tour3M1userScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By " + (tour3M1runToChaseComp - tour3M1userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 2;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 2;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                          //If the user chased the target
            document.getElementById("tour3M1matchEnd").style.display = "block";
            document.getElementById("tour3M1userWins").style.display = "block";
            document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
            document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
            document.getElementById("tour3M1winner-container").style.display = "block";
            document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
            tour3userpoints++;
            
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 2;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1userScore = tour3M1userScore + 2;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M1batSecondR3() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "block";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 3;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 3;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M1compScore == tour3M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseComp > tour3M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M1compWonBy").textContent = (tour3M1runToChaseComp - tour3M1userScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By " + (tour3M1runToChaseComp - tour3M1userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 3;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 3;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1userScore = tour3M1userScore + 3;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M1batSecondR4() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "block";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 4;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 4;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 4;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M1compScore == tour3M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseComp > tour3M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M1compWonBy").textContent = (tour3M1runToChaseComp - tour3M1userScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By " + (tour3M1runToChaseComp - tour3M1userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 4;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1userScore = tour3M1userScore + 4;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M1batSecondR5() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "block";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 5;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 5;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 5;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 5;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M1compScore == tour3M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseComp > tour3M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M1compWonBy").textContent = (tour3M1runToChaseComp - tour3M1userScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By " + (tour3M1runToChaseComp - tour3M1userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1userScore = tour3M1userScore + 5;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }


}

function tour3M1batSecondR6() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "block";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 6;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 6;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 6;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 6;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 6;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        var tour3M1runToChaseComp = tour3M1compScore + 1;
        if (tour3M1runToChaseComp <= tour3M1userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By 1 Wicket";
                tour3userpoints++;
                
            }, 1000);
        } else if (tour3M1compScore == tour3M1userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseComp > tour3M1userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour3M1compWonBy").textContent = (tour3M1runToChaseComp - tour3M1userScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By " + (tour3M1runToChaseComp - tour3M1userScore) + " Runs";
                tour3comppoints++;
                
            }, 1000);
        }

    }


}

function tour3M1matchStartBat() {
    tossing = document.getElementById("tour3M1tossing").style.display = "none";
    tossing = document.getElementById("tour3M1selectionByUser").style.display = "none";
    tossing = document.getElementById("tour3M1main-container").style.display = "block";
    tour3M1batFirst();
}

function tour3M1batFirst() {
    var r1 = document.getElementById('tour3M1R1');
    r1.onclick = tour3M1batFirstR1;
    var r2 = document.getElementById('tour3M1R2');
    r2.onclick = tour3M1batFirstR2;
    var r3 = document.getElementById('tour3M1R3');
    r3.onclick = tour3M1batFirstR3;
    var r4 = document.getElementById('tour3M1R4');
    r4.onclick = tour3M1batFirstR4;
    var r5 = document.getElementById('tour3M1R5');
    r5.onclick = tour3M1batFirstR5;
    var r6 = document.getElementById('tour3M1R6');
    r6.onclick = tour3M1batFirstR6;
}

// let runtextUser = document.getElementById('userRun').innerText;
// var halfCentury = false;
// if (runtextUser >= 50 && halfCentury == false) {
//     document.getElementById("halfCenturyUser").style.display = "block";
//     halfCentury == true;
// }

function tour3M1batFirstR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "block";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        document.getElementById('tour3M1targetValue').textContent = tour3M1userScore + 1;
        document.getElementById('tour3M1targetChaseComp').style.display = "block";
        document.getElementById('tour3M1runChaseComp').textContent = tour3M1userScore + 1;
        tour3M1bowlSecond();
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 1;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 1;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 1;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 1;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1userScore = tour3M1userScore + 1;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }


}

function tour3M1batFirstR2() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "block";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 2;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        document.getElementById('tour3M1targetValue').innerText = tour3M1userScore + 1;
        document.getElementById('tour3M1targetChaseComp').style.display = "block";
        document.getElementById('tour3M1runChaseComp').textContent = tour3M1userScore + 1;
        tour3M1bowlSecond();

    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 2;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 2;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 2;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1userScore = tour3M1userScore + 2;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }


}

function tour3M1batFirstR3() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "block";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 3;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 3;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        document.getElementById('tour3M1targetValue').innerText = tour3M1userScore + 1;
        document.getElementById('tour3M1targetChaseComp').style.display = "block";
        document.getElementById('tour3M1runChaseComp').textContent = tour3M1userScore + 1;
        tour3M1bowlSecond();
    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 3;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 3;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1userScore = tour3M1userScore + 3;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }


}

function tour3M1batFirstR4() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "block";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 4;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 4;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 4;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        document.getElementById('tour3M1targetValue').innerText = tour3M1userScore + 1;
        document.getElementById('tour3M1targetChaseComp').style.display = "block";
        document.getElementById('tour3M1runChaseComp').textContent = tour3M1userScore + 1;
        tour3M1bowlSecond();

    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 4;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1userScore = tour3M1userScore + 4;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }


}

function tour3M1batFirstR5() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "block";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 5;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 5;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 5;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 5;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        document.getElementById('tour3M1targetValue').innerText = tour3M1userScore + 1;
        document.getElementById('tour3M1targetChaseComp').style.display = "block";
        document.getElementById('tour3M1runChaseComp').textContent = tour3M1userScore + 1;
        tour3M1bowlSecond();

    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1userScore = tour3M1userScore + 5;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }


}

function tour3M1batFirstR6() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "block";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 6;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 6;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;

    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 6;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 6;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1userScore = tour3M1userScore + 6;
        document.getElementById('tour3M1userRun').textContent = tour3M1userScore;
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        document.getElementById('tour3M1targetValue').innerText = tour3M1userScore + 1;
        document.getElementById('tour3M1targetChaseComp').style.display = "block";
        document.getElementById('tour3M1runChaseComp').textContent = tour3M1userScore + 1;
        tour3M1bowlSecond();

    }


}

function tour3M1bowlSecond() {
    var r1 = document.getElementById('tour3M1R1');
    r1.onclick = tour3M1bowlSecondR1;
    var r2 = document.getElementById('tour3M1R2');
    r2.onclick = tour3M1bowlSecondR2;
    var r3 = document.getElementById('tour3M1R3');
    r3.onclick = tour3M1bowlSecondR3;
    var r4 = document.getElementById('tour3M1R4');
    r4.onclick = tour3M1bowlSecondR4;
    var r5 = document.getElementById('tour3M1R5');
    r5.onclick = tour3M1bowlSecondR5;
    var r6 = document.getElementById('tour3M1R6');
    r6.onclick = tour3M1bowlSecondR6;
}

function tour3M1bowlSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "block";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M1userScore == tour3M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseUser > tour3M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M1userWonBy").textContent = (tour3M1runToChaseUser - tour3M1compScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By " + (tour3M1runToChaseUser - tour3M1compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M1bowlSecondR2() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "block";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M1userScore == tour3M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseUser > tour3M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M1userWonBy").textContent = (tour3M1runToChaseUser - tour3M1compScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By " + (tour3M1runToChaseUser - tour3M1compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M1bowlSecondR3() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "block";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M1userScore == tour3M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseUser > tour3M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M1userWonBy").textContent = (tour3M1runToChaseUser - tour3M1compScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By " + (tour3M1runToChaseUser - tour3M1compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M1bowlSecondR4() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "block";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M1userScore == tour3M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseUser > tour3M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M1userWonBy").textContent = (tour3M1runToChaseUser - tour3M1compScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By " + (tour3M1runToChaseUser - tour3M1compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M1bowlSecondR5() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "block";
    document.getElementById('tour3M1num-B6').style.display = "none";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M1userScore == tour3M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseUser > tour3M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M1userWonBy").textContent = (tour3M1runToChaseUser - tour3M1compScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By " + (tour3M1runToChaseUser - tour3M1compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }


    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }


}

function tour3M1bowlSecondR6() {
    document.getElementById('tour3M1fist-2').style.display = "none";
    document.getElementById('tour3M1num-B1').style.display = "none";
    document.getElementById('tour3M1num-B2').style.display = "none";
    document.getElementById('tour3M1num-B3').style.display = "none";
    document.getElementById('tour3M1num-B4').style.display = "none";
    document.getElementById('tour3M1num-B5').style.display = "none";
    document.getElementById('tour3M1num-B6').style.display = "block";
    document.getElementById('tour3M1userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "block";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "block";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "block";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "block";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "block";
        document.getElementById('tour3M1num-A6').style.display = "none";
        tour3M1compScore += x;
        document.getElementById('tour3M1compRun').textContent = tour3M1compScore;
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour3M1compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour3M1fist-1').style.display = "none";
        document.getElementById('tour3M1num-A1').style.display = "none";
        document.getElementById('tour3M1num-A2').style.display = "none";
        document.getElementById('tour3M1num-A3').style.display = "none";
        document.getElementById('tour3M1num-A4').style.display = "none";
        document.getElementById('tour3M1num-A5').style.display = "none";
        document.getElementById('tour3M1num-A6').style.display = "block";
        var tour3M1runToChaseUser = tour3M1userScore + 1;
        if (tour3M1runToChaseUser <= tour3M1compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1compWins").style.display = "block";
                document.getElementById("tour3M1bowlFirstWinComp").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Opponent Won By 1 Wicket";
                tour3comppoints++;
                
            }, 1000);
        } else if (tour3M1userScore == tour3M1compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1tie").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour3M1runToChaseUser > tour3M1compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour3M1userWonBy").textContent = (tour3M1runToChaseUser - tour3M1compScore);
                document.getElementById("tour3M1matchEnd").style.display = "block";
                document.getElementById("tour3M1userWins").style.display = "block";
                document.getElementById("tour3M1batFirstWinUser").style.display = "block";
                document.getElementById("tour3M1main-container").style.filter = 'blur(5px)';
                document.getElementById("tour3M1R1").disabled = true;
                document.getElementById("tour3M1R2").disabled = true;
                document.getElementById("tour3M1R3").disabled = true;
                document.getElementById("tour3M1R4").disabled = true;
                document.getElementById("tour3M1R5").disabled = true;
                document.getElementById("tour3M1R6").disabled = true;
                document.getElementById("tour3M1winner-container").style.display = "block";
                document.getElementById('tour3M1winner').textContent = "You Won By " + (tour3M1runToChaseUser - tour3M1compScore) + " Runs";
                tour3userpoints++;
                
            }, 1000);
        }


    }


}

function tour3M1nextMatch() {
    document.getElementById("tour3M1main-container").style.display = "none";
    document.getElementById('tour3-match').style.display = "flex";
    document.getElementById('tour3M2start').disabled = false;
    document.getElementById("tour3M1compWins").style.display = "none";
    document.getElementById("tour3M1userWins").style.display = "none";
    document.getElementById("tour3M1tie").style.display = "none";
    document.getElementById("tour3M1start").style.backgroundColor = '#685d5d';
    document.getElementById("tour3M1start").style.color = 'black';
    document.getElementById("tour3M2start").style.backgroundColor = 'rgb(13, 204, 13)';
    document.getElementById("tour3M2start").style.color = 'black';


}


