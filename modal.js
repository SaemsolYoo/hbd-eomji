const btns = document.querySelector(".btns");
const modal = btns.querySelector(".letter");
const modalBtn = btns.querySelector(".btn");

modalBtn.addEventListener("click", function (event) {
  if (this.showing) {
    modal.classList.remove("showing");
    modalBtn.innerText = "💌";
  } else {
    modal.classList.add("showing");
    modalBtn.innerText = "📩";
  }

  this.showing = !this.showing;
});

modalBtn.showing = false;
