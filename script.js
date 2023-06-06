const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".close-modal");
const showModalButton = document.querySelectorAll(".show-modal");

console.log(showModalButton);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModalButton.length; i++)
  showModalButton[i].addEventListener("click", openModal);

closeModalButton.addEventListener("click", closeModal);
