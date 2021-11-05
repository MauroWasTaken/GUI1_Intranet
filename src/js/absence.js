const open = document.getElementById('open');
const modal = document.getElementById('modal-container');

if(open){
  open.addEventListener('click',() => {
    modal.classList.add('show');
  });
}

function closeModale(el) {
  modal.classList.remove('show');
}

function changeColor(el) {
  if (el.style.backgroundColor === "red") {
    el.style.backgroundColor = "#4CB770FF";
  } else {
    el.style.backgroundColor = "red";
  }
}
