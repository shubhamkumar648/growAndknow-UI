const modelAvtive = document.querySelector("#btn-modal-active")
const modelBox = document.querySelector("#model-box")
const modalClose = document.querySelector("#model-close")

console.log(modelAvtive);

modelAvtive.addEventListener("click", () => {
    modelBox.style.display="block"
})

modalClose.addEventListener('click', () => {
    modelBox.style.display="none"

})