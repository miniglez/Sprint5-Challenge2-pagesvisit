const counterID = document.getElementById("contadorVisitas")
const buttonReset = document.getElementById("btnReestablecer")
let counter = localStorage.getItem("Visitas");



const setView = () => {
    counter++
    localStorage.setItem("Visitas", counter)
    
    counterID.innerText = localStorage.getItem("Visitas")
}

const resetView = () => {
    counter = 0;
    setView();
}

setView()

buttonReset.addEventListener("click", () => {
    resetView()
})