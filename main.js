var value = document.getElementById("result")

function roll() {
    document.getElementById("crit").innerHTML = "";
    var x = document.getElementById("selectDie").selectedIndex;
    console.log(document.getElementsByTagName("option")[x].value);
    var randomNum = Math.floor(Math.random() * document.getElementsByTagName("option")[x].value + 1);
    console.log(randomNum);
    if (randomNum == document.getElementsByTagName("option")[x].value) {
        critical();
    }
    value.innerText = randomNum;
}

function critical() {
    var str = "Critical!!!";
    var result = str.blink();
    document.getElementById("crit").innerHTML = result;
}

