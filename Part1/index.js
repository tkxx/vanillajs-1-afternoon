console.log("what up");


let game=[];

function play(boxId) {
    var playerSpan = document.getElementById("player");
    let clickedElement = document.getElementById(boxId);
    if (playerSpan.innerText === "X") {
        playerSpan.innerText = "O";
        clickedElement.innerText = "X";
        game[boxId] = "X";
    }
    else {
        playerSpan.innerText = "X";
        clickedElement.innerText = "O";
        game[boxId] = "O";
    }
    console.log(game);

    let tL = game[0];
    let m1 = game[1];
    let tR = game[2];
    let mL = game[3];
    let m2 = game[4];
    let mR = game[5];
    let bL = game[6];
    let m3 = game[7];
    let bR = game[8];

    if (tL !== undefined && tL === m1 && tL === tR) {
        alert(`${tL} is the winner!`);
        return;
    }
    if (tL !== undefined && tL === m2 && tL === bR) {
        alert(`${tL} is the winner!`);
        return;
    }
    if (tL !== undefined && tL === mL && tL === bL) {
        alert(`${tL} is the winner!`);
        return;
    }
    if (m1 !== undefined && m1 === m2 && m1 === m3) {
        alert(`${m1} is the winner!`);
        return;
    }
    if (mL !== undefined && mL === m2 && mL == mR) {
        alert(`${mL} is the winner!`);
        return;
    }
    if (bL !== undefined && bL === m3 && bL === bR) {
        alert(`${bL} is the winner!`);
        return;
    }
    if (tR !== undefined && tR === mR && tR === bR) {
        alert(`${tR} is the winner!`);
        return;
    }
    if (tR !== undefined && tR === m2 && tR === bL) {
        alert(`${tR} is the winner!`);
        return;
    }

    let boardFull = true;
    for (let i = 0 ; i <= 8 ; i++) {
        if (game[i] === undefined) {
            boardFull = false;
        }
        }
        if (boardFull === true) { 
            alert("Cat's game!");
}
}


    function reset() {
        game = [];
        document.getElementById("0").innerText = "";
        document.getElementById("1").innerText = "";
        document.getElementById("2").innerText = "";
        document.getElementById("3").innerText = "";
        document.getElementById("4").innerText = "";
        document.getElementById("5").innerText = "";
        document.getElementById("6").innerText = "";
        document.getElementById("7").innerText = "";
        document.getElementById("8").innerText = "";
        return;
    }  