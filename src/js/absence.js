const open = document.getElementById('open');
const modal = document.getElementById('modal-container');
var currentColorSelected = "#4CB770";


if (open) {
    open.addEventListener('click', () => {
        modal.classList.add('show');
    });
}


function changeColor(el) {
    if (el.style.backgroundColor === "red") {
        el.style.backgroundColor = "#4CB770";
    } else {
        el.style.backgroundColor = "red";
    }
}

function changeColorSelected(el) {

    this.currentColorSelected = window.getComputedStyle(el, null).getPropertyValue("background-color");
    modal.classList.remove('show');
}

function changeColorCards(el) {
    if(el.style.backgroundColor !== this.currentColorSelected){
        el.style.backgroundColor = this.currentColorSelected;
    }else{
        el.style.backgroundColor = "#4CB770";
    }
}
