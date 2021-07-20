const modal = document.querySelector(".modal"),
  loginBtn = document.querySelector(".login-btn"),
  closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}
