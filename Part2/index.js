console.log("The house always wins!");

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

function reset(){
    let cardReset = document.getElementsByTagName("section");
    for (let i = 0 ; i < cardReset.length ; i++) {
        return cardReset.removeAttribute(colorInput);
    }
}