console.log("The house always wins!");

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

function reset(){
    let cardMods = document.getElementsByTagName("section");
    
    for (let i = 0 ; i < cardMods.length ; i++) {        
        let cardReset = cardMods[i];
        cardReset.removeAttribute("style");
    }
}