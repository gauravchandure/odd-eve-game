function tour5M4start() {
    document.getElementById('tour5M4start').disabled = true;
    document.getElementById("tour5M4toss").style.display = "block";
    document.getElementById("tour5-match").style.display = "none";
    document.getElementById("gameName").style.fontSize = "20px";

}

// function pressing() {
//     document.getElementById('tour5-match').style.display = "block";
//     document.getElementById('tour5M4toss').style.display = "none";
// }



// var tour5odd1 = document.getElementById('tour5M4odd');
// tour5odd1.onclick = tour5odd;

// let g = Math.floor(Math.random() * 6) + 1;
// console.log("value is", g);

function tour5M4OddStart() {
    document.getElementById("tour5M4toss").style.display = "none";
    document.getElementById("tour5M4fist-T1").style.display = "block";
    document.getElementById("tour5M4fist-T2").style.display = "block";
    document.getElementById("tour5M4numberSelectorT").style.display = "block";

    var tour5M4rt1 = document.getElementById('tour5M4RT1');
    tour5M4rt1.onclick = tour5M4OddRT1;
    var tour5M4rt2 = document.getElementById('tour5M4RT2');
    tour5M4rt2.onclick = tour5M4OddRT2;
    var tour5M4rt3 = document.getElementById('tour5M4RT3');
    tour5M4rt3.onclick = tour5M4OddRT3;
    var tour5M4rt4 = document.getElementById('tour5M4RT4');
    tour5M4rt4.onclick = tour5M4OddRT4;
    var tour5M4rt5 = document.getElementById('tour5M4RT5');
    tour5M4rt5.onclick = tour5M4OddRT5;
    var tour5M4rt6 = document.getElementById('tour5M4RT6');
    tour5M4rt6.onclick = tour5M4OddRT6;
}

// var tour5eve1 = document.getElementById('tour5M4eve');
// tour5eve1.onclick = tour5M4eve;

function tour5M4eve() {
    document.getElementById("tour5M4toss").style.display = "none";
    document.getElementById("tour5M4fist-T1").style.display = "block";
    document.getElementById("tour5M4fist-T2").style.display = "block";
    document.getElementById("tour5M4numberSelectorT").style.display = "block";

    var tour5M4rt1 = document.getElementById('tour5M4RT1');
    tour5M4rt1.onclick = tour5M4EveRT1;
    var tour5M4rt2 = document.getElementById('tour5M4RT2');
    tour5M4rt2.onclick = tour5M4EveRT2;
    var tour5M4rt3 = document.getElementById('tour5M4RT3');
    tour5M4rt3.onclick = tour5M4EveRT3;
    var tour5M4rt4 = document.getElementById('tour5M4RT4');
    tour5M4rt4.onclick = tour5M4EveRT4;
    var tour5M4rt5 = document.getElementById('tour5M4RT5');
    tour5M4rt5.onclick = tour5M4EveRT5;
    var tour5M4rt6 = document.getElementById('tour5M4RT6');
    tour5M4rt6.onclick = tour5M4EveRT6;
}




function tour5M4forOdd1() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour5M4selectionByUser").style.display = "block";

        document.getElementById("tour5M4tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour5M4selectionByUser").style.display = "none";
        document.getElementById("tour5M4tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M4selectionByComp").style.display = "block";
        document.getElementById("tour5M4RT1").disabled = true;
        document.getElementById("tour5M4RT2").disabled = true;
        document.getElementById("tour5M4RT3").disabled = true;
        document.getElementById("tour5M4RT4").disabled = true;
        document.getElementById("tour5M4RT5").disabled = true;
        document.getElementById("tour5M4RT6").disabled = true;
        var tour5M4opt = ['Bat', 'Bowl'];
        const tour5M4chose = Math.floor(Math.random() * tour5M4opt.length);
        const tour5M4selectedopt = tour5M4opt[tour5M4chose];
        document.getElementById("tour5M4compOpt").innerText = tour5M4selectedopt;
        var tour5M4selected = 'Bat';
        if (tour5M4selectedopt.includes(tour5M4selected)) {
            // console.log(`bat selected`);
            tour5M4matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour5M4matchStartBat();
        }
    }
}
function tour5M4forOdd2() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour5M4selectionByUser").style.display = "block";

        document.getElementById("tour5M4tossing").style.filter = 'blur(5px)';

    }
    else {
        document.getElementById("tour5M4selectionByUser").style.display = "none";
        document.getElementById("tour5M4tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M4selectionByComp").style.display = "block";
        document.getElementById("tour5M4RT1").disabled = true;
        document.getElementById("tour5M4RT2").disabled = true;
        document.getElementById("tour5M4RT3").disabled = true;
        document.getElementById("tour5M4RT4").disabled = true;
        document.getElementById("tour5M4RT5").disabled = true;
        document.getElementById("tour5M4RT6").disabled = true;
        var tour5M4opt = ['Bat', 'Bowl'];
        const tour5M4chose = Math.floor(Math.random() * tour5M4opt.length);
        const tour5M4selectedopt = tour5M4opt[tour5M4chose];
        document.getElementById("tour5M4compOpt").innerText = tour5M4selectedopt;
        var tour5M4selected = 'Bat';
        if (tour5M4selectedopt.includes(tour5M4selected)) {
            // console.log(`bat selected`);
            tour5M4matchStartBowl();
        } else {
            // console.log('bowl selected');
            tour5M4matchStartBat();
        }
    }
}

function tour5M4forEve1() {
    if (y == 1 || y == 3 || y == 5) {
        document.getElementById("tour5M4selectionByUser").style.display = "block";

        document.getElementById("tour5M4tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour5M4selectionByUser").style.display = "none";
        document.getElementById("tour5M4tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M4RT1").disabled = true;
        document.getElementById("tour5M4RT2").disabled = true;
        document.getElementById("tour5M4RT3").disabled = true;
        document.getElementById("tour5M4RT4").disabled = true;
        document.getElementById("tour5M4RT5").disabled = true;
        document.getElementById("tour5M4RT6").disabled = true;
        document.getElementById("tour5M4selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour5M4compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour5M4matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour5M4matchStartBat();
        }
    }
}
function tour5M4forEve2() {

    if (y == 2 || y == 4 || y == 6) {
        document.getElementById("tour5M4selectionByUser").style.display = "block";

        document.getElementById("tour5M4tossing").style.filter = 'blur(5px)';
    }
    else {
        document.getElementById("tour5M4selectionByUser").style.display = "none";
        document.getElementById("tour5M4tossing").style.filter = 'blur(5px)';
        document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
        document.getElementById("tour5M4RT1").disabled = true;
        document.getElementById("tour5M4RT2").disabled = true;
        document.getElementById("tour5M4RT3").disabled = true;
        document.getElementById("tour5M4RT4").disabled = true;
        document.getElementById("tour5M4RT5").disabled = true;
        document.getElementById("tour5M4RT6").disabled = true;
        document.getElementById("tour5M4selectionByComp").style.display = "block";
        var opt = ['Bat', 'Bowl'];
        const chose = Math.floor(Math.random() * opt.length);
        const selectedopt = opt[chose];
        document.getElementById("tour5M4compOpt").innerText = selectedopt;
        var selected = 'Bat';
        if (selectedopt.includes(selected)) {
            // //console.log()(`bat selected`);
            tour5M4matchStartBowl();
        } else {
            // //console.log()('bowl selected');
            tour5M4matchStartBat();
        }
    }
}
//CHECK FROM HERE

//console.log()(x);

// If user chose odd
function tour5M4OddRT1() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "block";
    document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    document.getElementById("tour5M4num-TB2").style.display = "none";
    document.getElementById("tour5M4num-TB3").style.display = "none";
    document.getElementById("tour5M4num-TB4").style.display = "none";
    document.getElementById("tour5M4num-TB5").style.display = "none";
    document.getElementById("tour5M4num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M4forOdd1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}

function tour5M4OddRT2() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "none";
    document.getElementById("tour5M4num-TB2").style.display = "block";
    document.getElementById("tour5M4num-TB2").style.marginLeft = "550px";
    document.getElementById("tour5M4num-TB3").style.display = "none";
    document.getElementById("tour5M4num-TB4").style.display = "none";
    document.getElementById("tour5M4num-TB5").style.display = "none";
    document.getElementById("tour5M4num-TB6").style.display = "none";

    setTimeout(function () {
        tour5M4forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}

function tour5M4OddRT3() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "none";
    document.getElementById("tour5M4num-TB2").style.display = "none";
    document.getElementById("tour5M4num-TB3").style.display = "block";
    document.getElementById("tour5M4num-TB3").style.marginLeft = "570px";
    document.getElementById("tour5M4num-TB4").style.display = "none";
    document.getElementById("tour5M4num-TB5").style.display = "none";
    document.getElementById("tour5M4num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M4forOdd1();
    }, 1000);
    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}

function tour5M4OddRT4() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "none";
    document.getElementById("tour5M4num-TB2").style.display = "none";
    document.getElementById("tour5M4num-TB3").style.display = "none";
    document.getElementById("tour5M4num-TB4").style.display = "block";
    document.getElementById("tour5M4num-TB4").style.marginLeft = "550px";
    document.getElementById("tour5M4num-TB5").style.display = "none";
    document.getElementById("tour5M4num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M4forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}

function tour5M4OddRT5() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "none";
    document.getElementById("tour5M4num-TB2").style.display = "none";
    document.getElementById("tour5M4num-TB3").style.display = "none";
    document.getElementById("tour5M4num-TB4").style.display = "none";
    document.getElementById("tour5M4num-TB5").style.display = "block";
    document.getElementById("tour5M4num-TB5").style.marginLeft = "540px";
    document.getElementById("tour5M4num-TB6").style.display = "none";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M4forOdd1();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}

function tour5M4OddRT6() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "none";
    document.getElementById("tour5M4num-TB2").style.display = "none";
    document.getElementById("tour5M4num-TB3").style.display = "none";
    document.getElementById("tour5M4num-TB4").style.display = "none";
    document.getElementById("tour5M4num-TB5").style.display = "none";
    document.getElementById("tour5M4num-TB6").style.display = "block";
    document.getElementById("tour5M4num-TB6").style.marginLeft = "570px";
    var odd = document.getElementById('odd');

    setTimeout(function () {
        tour5M4forOdd2();
    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}
// If user chose Eve
function tour5M4EveRT1() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "block";
    document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    document.getElementById("tour5M4num-TB2").style.display = "none";
    document.getElementById("tour5M4num-TB3").style.display = "none";
    document.getElementById("tour5M4num-TB4").style.display = "none";
    document.getElementById("tour5M4num-TB5").style.display = "none";
    document.getElementById("tour5M4num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M4forEve1();

    }, 1000);

    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}

function tour5M4EveRT2() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "none";
    document.getElementById("tour5M4num-TB2").style.marginLeft = "570px";
    document.getElementById("tour5M4num-TB2").style.display = "block";
    document.getElementById("tour5M4num-TB3").style.display = "none";
    document.getElementById("tour5M4num-TB4").style.display = "none";
    document.getElementById("tour5M4num-TB5").style.display = "none";
    document.getElementById("tour5M4num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M4forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}

function tour5M4EveRT3() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "none";
    document.getElementById("tour5M4num-TB3").style.marginLeft = "570px";
    document.getElementById("tour5M4num-TB2").style.display = "none";
    document.getElementById("tour5M4num-TB3").style.display = "block";
    document.getElementById("tour5M4num-TB4").style.display = "none";
    document.getElementById("tour5M4num-TB5").style.display = "none";
    document.getElementById("tour5M4num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M4forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}

function tour5M4EveRT4() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "none";
    document.getElementById("tour5M4num-TB4").style.marginLeft = "570px";
    document.getElementById("tour5M4num-TB2").style.display = "none";
    document.getElementById("tour5M4num-TB3").style.display = "none";
    document.getElementById("tour5M4num-TB4").style.display = "block";
    document.getElementById("tour5M4num-TB5").style.display = "none";
    document.getElementById("tour5M4num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M4forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}

function tour5M4EveRT5() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "none";
    document.getElementById("tour5M4num-TB5").style.marginLeft = "570px";
    document.getElementById("tour5M4num-TB2").style.display = "none";
    document.getElementById("tour5M4num-TB3").style.display = "none";
    document.getElementById("tour5M4num-TB4").style.display = "none";
    document.getElementById("tour5M4num-TB5").style.display = "block";
    document.getElementById("tour5M4num-TB6").style.display = "none";
    //console.log()(x);
    setTimeout(function () {

        tour5M4forEve1();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}

function tour5M4EveRT6() {
    document.getElementById("tour5M4fist-T2").style.display = "none";
    document.getElementById("tour5M4num-TB1").style.display = "none";
    document.getElementById("tour5M4num-TB6").style.marginLeft = "570px";
    document.getElementById("tour5M4num-TB2").style.display = "none";
    document.getElementById("tour5M4num-TB3").style.display = "none";
    document.getElementById("tour5M4num-TB4").style.display = "none";
    document.getElementById("tour5M4num-TB5").style.display = "none";
    document.getElementById("tour5M4num-TB6").style.display = "block";
    //console.log()(x);
    setTimeout(function () {

        tour5M4forEve2();

    }, 1000);

    //      setTimeout(function () {
    //      forOdd1();
    //  }, 1000);



    if (y == 1) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "block";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";


    }
    else if (y == 2) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TB1").style.marginLeft = "570px";
    }
    else if (y == 3) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "block";
        document.getElementById("tour5M4num-TA3").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 4) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "block";
        document.getElementById("tour5M4num-TA4").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 5) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "block";
        document.getElementById("tour5M4num-TA5").style.marginLeft = "40%";
        document.getElementById("tour5M4num-TA6").style.display = "none";
    }
    else if (y == 6) {
        document.getElementById("tour5M4fist-T1").style.display = "none";
        document.getElementById("tour5M4num-TA1").style.display = "none";
        document.getElementById("tour5M4num-TA2").style.display = "none";
        document.getElementById("tour5M4num-TA3").style.display = "none";
        document.getElementById("tour5M4num-TA4").style.display = "none";
        document.getElementById("tour5M4num-TA5").style.display = "none";
        document.getElementById("tour5M4num-TA6").style.display = "block";
        document.getElementById("tour5M4num-TA6").style.marginLeft = "40%";
    }
}

/* TOSS END */

/* ENTERING MATCH */
function tour5M4cont() {
    document.getElementById("tour5M4tossing").style.display = "none";
    document.getElementById("tour5M4selectionByComp").style.display = "none";
    document.getElementById("tour5M4main-container").style.display = "block";
    document.getElementById("tour5M4main-container").style.filter = 'blur(0px)';
    document.getElementById("tour5M4R1").disabled = false;
    document.getElementById("tour5M4R2").disabled = false;
    document.getElementById("tour5M4R3").disabled = false;
    document.getElementById("tour5M4R4").disabled = false;
    document.getElementById("tour5M4R5").disabled = false;
    document.getElementById("tour5M4R6").disabled = false;
}
function tour5M4contChaseUser() {
    document.getElementById('tour5M4targetChaseComp').style.display = "none";
    document.getElementById('tour5M4targetChaseUser').style.display = "none";
    document.getElementById("tour5M4R1").disabled = false;
    document.getElementById("tour5M4R2").disabled = false;
    document.getElementById("tour5M4R3").disabled = false;
    document.getElementById("tour5M4R4").disabled = false;
    document.getElementById("tour5M4R5").disabled = false;
    document.getElementById("tour5M4R6").disabled = false;
}
function tour5M4contChaseComp() {
    document.getElementById('tour5M4targetChaseComp').style.display = "none";
    document.getElementById('tour5M4targetChaseUser').style.display = "none";
    document.getElementById("tour5M4R1").disabled = false;
    document.getElementById("tour5M4R2").disabled = false;
    document.getElementById("tour5M4R3").disabled = false;
    document.getElementById("tour5M4R4").disabled = false;
    document.getElementById("tour5M4R5").disabled = false;
    document.getElementById("tour5M4R6").disabled = false;
}


function tour5M4matchStartBowl() {
    tossing = document.getElementById("tour5M4tossing").style.display = "none";
    tossing = document.getElementById("tour5M4selectionByUser").style.display = "none";
    tossing = document.getElementById("tour5M4main-container").style.display = "block";
    tour5M4bowlfirst();
}

function tour5M4bowlfirst() {
    var r1 = document.getElementById('tour5M4R1');
    r1.onclick = tour5M4bowlFirstR1;
    var r2 = document.getElementById('tour5M4R2');
    r2.onclick = tour5M4bowlFirstR2;
    var r3 = document.getElementById('tour5M4R3');
    r3.onclick = tour5M4bowlFirstR3;
    var r4 = document.getElementById('tour5M4R4');
    r4.onclick = tour5M4bowlFirstR4;
    var r5 = document.getElementById('tour5M4R5');
    r5.onclick = tour5M4bowlFirstR5;
    var r6 = document.getElementById('tour5M4R6');
    r6.onclick = tour5M4bowlFirstR6;
}

function tour5M4batSecond() {
    var r1 = document.getElementById('tour5M4R1');
    r1.onclick = tour5M4batSecondR1;
    var r2 = document.getElementById('tour5M4R2');
    r2.onclick = tour5M4batSecondR2;
    var r3 = document.getElementById('tour5M4R3');
    r3.onclick = tour5M4batSecondR3;
    var r4 = document.getElementById('tour5M4R4');
    r4.onclick = tour5M4batSecondR4;
    var r5 = document.getElementById('tour5M4R5');
    r5.onclick = tour5M4batSecondR5;
    var r6 = document.getElementById('tour5M4R6');
    r6.onclick = tour5M4batSecondR6;
}


 var tour5M4compScore = 0;


function tour5M4bowlFirstR1() {
    let y = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "block";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "0%";
    if (y == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        document.getElementById('tour5M4targetValue').textContent = tour5M4compScore + 1;
        document.getElementById('tour5M4targetChaseUser').style.display = "block";
        document.getElementById('tour5M4runChaseUser').textContent = tour5M4compScore + 1;
        tour5M4batSecond();
    }
    else if (y == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += y;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (y == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += y;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (y == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += y;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (y == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += y;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (y == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
         document.getElementById('tour5M4num-A5').style.display = "none";
         document.getElementById('tour5M4num-A6').style.display = "block";
         tour5M4compScore += y;
         document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
     }


}

 function tour5M4bowlFirstR2() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "block";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let y = Math.floor(Math.random() * 6) + 1;
    if (y == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += y;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (y == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        document.getElementById('tour5M4targetValue').innerText = tour5M4compScore + 1;
        document.getElementById('tour5M4targetChaseUser').style.display = "block";
        document.getElementById('tour5M4runChaseUser').textContent = tour5M4compScore + 1;
        tour5M4batSecond();

    }
    else if (y == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += y;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (y == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += y;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (y == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += y;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (y == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4compScore += y;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }


}

function tour5M4bowlFirstR3() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "block";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        document.getElementById('tour5M4targetValue').innerText = tour5M4compScore + 1;
        document.getElementById('tour5M4targetChaseUser').style.display = "block";
        document.getElementById('tour5M4runChaseUser').textContent = tour5M4compScore + 1;
        tour5M4batSecond();
    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }


}

function tour5M4bowlFirstR4() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "block";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        document.getElementById('tour5M4targetValue').innerText = tour5M4compScore + 1;
        document.getElementById('tour5M4targetChaseUser').style.display = "block";
        document.getElementById('tour5M4runChaseUser').textContent = tour5M4compScore + 1;
        tour5M4batSecond();

    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }


}

function tour5M4bowlFirstR5() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "block";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        document.getElementById('tour5M4targetValue').innerText = tour5M4compScore + 1;
        document.getElementById('tour5M4targetChaseUser').style.display = "block";
        document.getElementById('tour5M4runChaseUser').textContent = tour5M4compScore + 1;
        tour5M4batSecond();

    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }


}

function tour5M4bowlFirstR6() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "block";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;

    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        document.getElementById('tour5M4targetValue').textContent = tour5M4compScore + 1;
        document.getElementById('tour5M4targetChaseUser').style.display = "block";
        document.getElementById('tour5M4runChaseUser').textContent = tour5M4compScore + 1;
        tour5M4batSecond();

    }


}

 var tour5M4userScore = 0;
 // var tour5M4runToChaseUser = (tour5M4userScore + 1);

function tour5M4batSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "block";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "0%";
    /*var halfCentury = false;
    if (userScore >= 50 && halfCentury == false) {
        document.getElementById("halfCenturyUser").style.display = "block";
        halfCentury == true;
    }*/
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 1;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        } else if (tour5M4compScore == tour5M4userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseComp > tour5M4userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M4compWonBy").textContent = (tour5M4runToChaseComp - tour5M4userScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By " + (tour5M4runToChaseComp - tour5M4userScore) + " Runs";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 1;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp < tour5M4userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp < tour5M4userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp < tour5M4userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 1;
        /*var halfCentury = false;
        if (userScore >= 50 && halfCentury == false) {
            document.getElementById("halfCenturyUser").style.display = "block";
            halfCentury == true;
        }*/
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp < tour5M4userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4userScore = tour5M4userScore + 1;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp < tour5M4userScore) { //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }


}

function tour5M4batSecondR2() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "block";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 2;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        } else if (tour5M4compScore == tour5M4userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseComp > tour5M4userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M4compWonBy").textContent = (tour5M4runToChaseComp - tour5M4userScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By " + (tour5M4runToChaseComp - tour5M4userScore) + " Runs";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 2;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 2;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                          //If the user chased the target
            document.getElementById("tour5M4matchEnd").style.display = "block";
            document.getElementById("tour5M4userWins").style.display = "block";
            document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
            document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 2;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4userScore = tour5M4userScore + 2;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }


}

function tour5M4batSecondR3() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "block";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 3;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 3;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        } else if (tour5M4compScore == tour5M4userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseComp > tour5M4userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M4compWonBy").textContent = (tour5M4runToChaseComp - tour5M4userScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By " + (tour5M4runToChaseComp - tour5M4userScore) + " Runs";
                tourecomppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 3;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 3;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4userScore = tour5M4userScore + 3;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }


}

function tour5M4batSecondR4() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "block";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 4;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 4;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 4;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
            }, 1000);
        } else if (tour5M4compScore == tour5M4userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseComp > tour5M4userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M4compWonBy").textContent = (tour5M4runToChaseComp - tour5M4userScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By " + (tour5M4runToChaseComp - tour5M4userScore) + " Runs";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 4;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4userScore = tour5M4userScore + 4;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }


}

function tour5M4batSecondR5() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "block";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 5;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 5;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 5;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 5;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        } else if (tour5M4compScore == tour5M4userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseComp > tour5M4userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M4compWonBy").textContent = (tour5M4runToChaseComp - tour5M4userScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By " + (tour5M4runToChaseComp - tour5M4userScore) + " Runs";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4userScore = tour5M4userScore + 5;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }


}

function tour5M4batSecondR6() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "block";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 6;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 6;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 6;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 6;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 6;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        var tour5M4runToChaseComp = tour5M4compScore + 1;
        if (tour5M4runToChaseComp <= tour5M4userScore) {                    //If the user chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By 1 Wicket";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        } else if (tour5M4compScore == tour5M4userScore) { //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseComp > tour5M4userScore) {
            setTimeout(function () {         //If user do not chase the target
                document.getElementById("tour5M4compWonBy").textContent = (tour5M4runToChaseComp - tour5M4userScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By " + (tour5M4runToChaseComp - tour5M4userScore) + " Runs";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }


}

function tour5M4matchStartBat() {
        tossing = document.getElementById("tour5M4tossing").style.display = "none";
        tossing = document.getElementById("tour5M4selectionByUser").style.display = "none";
        tossing = document.getElementById("tour5M4main-container").style.display = "block";
        tour5M4batFirst();
}

function tour5M4batFirst() {
    var r1 = document.getElementById('tour5M4R1');
    r1.onclick = tour5M4batFirstR1;
    var r2 = document.getElementById('tour5M4R2');
    r2.onclick = tour5M4batFirstR2;
    var r3 = document.getElementById('tour5M4R3');
    r3.onclick = tour5M4batFirstR3;
    var r4 = document.getElementById('tour5M4R4');
    r4.onclick = tour5M4batFirstR4;
    var r5 = document.getElementById('tour5M4R5');
    r5.onclick = tour5M4batFirstR5;
    var r6 = document.getElementById('tour5M4R6');
    r6.onclick = tour5M4batFirstR6;
}

// let runtextUser = document.getElementById('userRun').innerText;
// var halfCentury = false;
// if (runtextUser >= 50 && halfCentury == false) {
//     document.getElementById("halfCenturyUser").style.display = "block";
//     halfCentury == true;
// }

function tour5M4batFirstR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "block";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        document.getElementById('tour5M4targetValue').textContent = tour5M4userScore + 1;
        document.getElementById('tour5M4targetChaseComp').style.display = "block";
        document.getElementById('tour5M4runChaseComp').textContent = tour5M4userScore + 1;
        tour5M4bowlSecond();
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 1;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 1;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 1;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 1;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4userScore = tour5M4userScore + 1;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }


}

function tour5M4batFirstR2() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "block";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 2;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        document.getElementById('tour5M4targetValue').innerText = tour5M4userScore + 1;
        document.getElementById('tour5M4targetChaseComp').style.display = "block";
        document.getElementById('tour5M4runChaseComp').textContent = tour5M4userScore + 1;
        tour5M4bowlSecond();

    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 2;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 2;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 2;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4userScore = tour5M4userScore + 2;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }


}

function tour5M4batFirstR3() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "block";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 3;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 3;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        document.getElementById('tour5M4targetValue').innerText = tour5M4userScore + 1;
        document.getElementById('tour5M4targetChaseComp').style.display = "block";
        document.getElementById('tour5M4runChaseComp').textContent = tour5M4userScore + 1;
        tour5M4bowlSecond();
    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 3;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 3;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4userScore = tour5M4userScore + 3;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }


}

function tour5M4batFirstR4() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "block";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 4;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 4;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 4;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        document.getElementById('tour5M4targetValue').innerText = tour5M4userScore + 1;
        document.getElementById('tour5M4targetChaseComp').style.display = "block";
        document.getElementById('tour5M4runChaseComp').textContent = tour5M4userScore + 1;
        tour5M4bowlSecond();

    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 4;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4userScore = tour5M4userScore + 4;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }


}

function tour5M4batFirstR5() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "block";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 5;
        document.getElementById('userRun').textContent = userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 5;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 5;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 5;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        document.getElementById('tour5M4targetValue').innerText = tour5M4userScore + 1;
        document.getElementById('tour5M4targetChaseComp').style.display = "block";
        document.getElementById('tour5M4runChaseComp').textContent = tour5M4userScore + 1;
        tour5M4bowlSecond();

    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4userScore = tour5M4userScore + 5;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }


}

function tour5M4batFirstR6() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "block";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 6;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 6;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;

    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 6;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 6;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4userScore = tour5M4userScore + 6;
        document.getElementById('tour5M4userRun').textContent = tour5M4userScore;
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        document.getElementById('tour5M4targetValue').innerText = tour5M4userScore + 1;
        document.getElementById('tour5M4targetChaseComp').style.display = "block";
        document.getElementById('tour5M4runChaseComp').textContent = tour5M4userScore + 1;
        tour5M4bowlSecond();

    }


}

function tour5M4bowlSecond() {
    var r1 = document.getElementById('tour5M4R1');
    r1.onclick = tour5M4bowlSecondR1;
    var r2 = document.getElementById('tour5M4R2');
    r2.onclick = tour5M4bowlSecondR2;
    var r3 = document.getElementById('tour5M4R3');
    r3.onclick = tour5M4bowlSecondR3;
    var r4 = document.getElementById('tour5M4R4');
    r4.onclick = tour5M4bowlSecondR4;
    var r5 = document.getElementById('tour5M4R5');
    r5.onclick = tour5M4bowlSecondR5;
    var r6 = document.getElementById('tour5M4R6');
    r6.onclick = tour5M4bowlSecondR6;
}

function tour5M4bowlSecondR1() {
    let x = Math.floor(Math.random() * 6) + 1;
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "block";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "0%";
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M4userScore == tour5M4compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseUser > tour5M4compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M4userWonBy").textContent = (tour5M4runToChaseUser - tour5M4compScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By " + (tour5M4runToChaseUser - tour5M4compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }


 }

function tour5M4bowlSecondR2() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "block";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-380%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M4userScore == tour5M4compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseUser > tour5M4compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M4userWonBy").textContent = (tour5M4runToChaseUser - tour5M4compScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By " + (tour5M4runToChaseUser - tour5M4compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-320%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-400%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }


}

function tour5M4bowlSecondR3() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "block";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-270%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M4userScore == tour5M4compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseUser > tour5M4compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M4userWonBy").textContent = (tour5M4runToChaseUser - tour5M4compScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By " + (tour5M4runToChaseUser - tour5M4compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }


}

function tour5M4bowlSecondR4() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "block";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M4userScore == tour5M4compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseUser > tour5M4compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M4userWonBy").textContent = (tour5M4runToChaseUser - tour5M4compScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By " + (tour5M4runToChaseUser - tour5M4compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }


}

function tour5M4bowlSecondR5() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "block";
    document.getElementById('tour5M4num-B6').style.display = "none";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M4userScore == tour5M4compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseUser > tour5M4compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M4userWonBy").textContent = (tour5M4runToChaseUser - tour5M4compScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By " + (tour5M4runToChaseUser - tour5M4compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }


}

function tour5M4bowlSecondR6() {
    document.getElementById('tour5M4fist-2').style.display = "none";
    document.getElementById('tour5M4num-B1').style.display = "none";
    document.getElementById('tour5M4num-B2').style.display = "none";
    document.getElementById('tour5M4num-B3').style.display = "none";
    document.getElementById('tour5M4num-B4').style.display = "none";
    document.getElementById('tour5M4num-B5').style.display = "none";
    document.getElementById('tour5M4num-B6').style.display = "block";
    document.getElementById('tour5M4userRunTable').style.marginLeft = "-300%";
    let x = Math.floor(Math.random() * 6) + 1;
    if (x == 1) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "block";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }
    }
    else if (x == 2) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "block";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }


    }
    else if (x == 3) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-250%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "block";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 4) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-350%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "block";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 5) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-300%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "block";
        document.getElementById('tour5M4num-A6').style.display = "none";
        tour5M4compScore += x;
        document.getElementById('tour5M4compRun').textContent = tour5M4compScore;
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        }

    }
    else if (x == 6) {
        document.getElementById('tour5M4compRunTable').style.marginLeft = "-200%";
        document.getElementById('tour5M4fist-1').style.display = "none";
        document.getElementById('tour5M4num-A1').style.display = "none";
        document.getElementById('tour5M4num-A2').style.display = "none";
        document.getElementById('tour5M4num-A3').style.display = "none";
        document.getElementById('tour5M4num-A4').style.display = "none";
        document.getElementById('tour5M4num-A5').style.display = "none";
        document.getElementById('tour5M4num-A6').style.display = "block";
        var tour5M4runToChaseUser = tour5M4userScore + 1;
        if (tour5M4runToChaseUser <= tour5M4compScore) {                       //If computer chased the target
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4compWins").style.display = "block";
                document.getElementById("tour5M4bowlFirstWinComp").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Opponent Won By 1 Wicket";
                tour5comppoints++;
                //localStorage.setItem('Computer Points', updatedValuecomp);
            }, 1000);
        } else if (tour5M4userScore == tour5M4compScore) {               //If runs are equal
            setTimeout(function () {
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4tie").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "Match Tied";
            }, 1000);
        } else if (tour5M4runToChaseUser > tour5M4compScore) {                //If computer do not chased the target
            setTimeout(function () {
                document.getElementById("tour5M4userWonBy").textContent = (tour5M4runToChaseUser - tour5M4compScore);
                document.getElementById("tour5M4matchEnd").style.display = "block";
                document.getElementById("tour5M4userWins").style.display = "block";
                document.getElementById("tour5M4batFirstWinUser").style.display = "block";
                document.getElementById("tour5M4main-container").style.filter = 'blur(5px)';
                document.getElementById("tour5M4R1").disabled = true;
                document.getElementById("tour5M4R2").disabled = true;
                document.getElementById("tour5M4R3").disabled = true;
                document.getElementById("tour5M4R4").disabled = true;
                document.getElementById("tour5M4R5").disabled = true;
                document.getElementById("tour5M4R6").disabled = true;
                document.getElementById("tour5M4winner-container").style.display = "block";
                document.getElementById('tour5M4winner').textContent = "You Won By " + (tour5M4runToChaseUser - tour5M4compScore) + " Runs";
                var updatedValueuser = tour5userpoints++;
                localStorage.setItem('User Points', updatedValueuser);
            }, 1000);
        }


    }


}

function tour5M4nextMatch() {
    document.getElementById("tour5M4main-container").style.display = "none";
    document.getElementById('tour5-match').style.display = "block";
    document.getElementById('tour5M5start').disabled = false;
    document.getElementById("tour5M4compWins").style.display = "none";
    document.getElementById("tour5M4userWins").style.display = "none";
    document.getElementById("tour5M4tie").style.display = "none";
    document.getElementById("tour5M4start").style.backgroundColor = '#685d5d';
    document.getElementById("tour5M4start").style.color = 'black';
    document.getElementById("tour5M5start").style.backgroundColor = 'rgb(13, 204, 13)';
    document.getElementById("tour5M5start").style.color = 'black';
    
    
    if(tour5userpoints == 3) {
    document.getElementById("tour5M4return").style.display = "block";
    document.getElementById("tour5-match").style.filter = 'blur(5px)';
        document.getElementById("tour5M4wintitle").innerText = "You Won The Tournament!";
        localStorage.clear();
    }
    else if(tour5comppoints == 3) {
        document.getElementById("tour5M4return").style.display = "block";
        document.getElementById("tour5-match").style.filter = 'blur(5px)';
        document.getElementById("tour5M4wintitle").innerText = "Opponent Won The Tournament!";
        localStorage.clear();
    }
    
}

function returnhome() {
    location.reload();
    localStorage.clear();
}

// document.getElementById("tour5return").style.display = "block";
// document.getElementById("tour5-match").style.filter = 'blur(5px)';
// function returnhome() {
//     location.reload();
// }

// function btnClose() {
//     document.getElementById("halfCenturyUser").style.display = "none";
// }
