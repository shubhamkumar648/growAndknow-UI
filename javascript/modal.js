const modelAvtive = document.querySelector("#btn-modal-active");
const modelBox = document.querySelector("#model-box");
const modalClose = document.querySelector("#model-close");

modelAvtive.addEventListener("click", function () {
  modelBox.style.display = "block";
});

modalClose.addEventListener("click", function () {
  modelBox.style.display = "none";
});
