let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}

const saveEl = document.getElementById("save-el")

function save() {
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
}