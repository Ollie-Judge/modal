const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".show-modal");

console.log(showModal);

const openModal = function () {
  modal.classList.remove("hidden");
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", openModal);
