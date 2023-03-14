import { state } from "./modules/state.js"
import { View } from "./modules/view.js"

let view = new View(state)

for (const button of view.levelButtons) {
    button.addEventListener("click", levelButtonListener)
}
view.nextButton.addEventListener("click", nextButtonListener)
view.resetButton.addEventListener("click", resetButtonListener)

function levelButtonListener(event) {
    state.setLevel(event.target.textContent)
    view.updateView(state)
}

function nextButtonListener() {
    state.setNextScale()
    view.updateView(state)
}

function resetButtonListener() {
    state.reset()
    view.updateView(state)
}
