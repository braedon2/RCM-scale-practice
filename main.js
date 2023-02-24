import {state} from "./state.js"
import { levelButtons, nextButton, resetButton, updateView } from "./view.js"

updateView(state)

for (const button of levelButtons) {
    button.addEventListener("click", levelButtonListener)
}
nextButton.addEventListener("click", nextButtonListener)
resetButton.addEventListener("click", resetButtonListener)

function levelButtonListener(event) {
    state.setLevel(event.target.textContent)
    updateView(state)
}

function nextButtonListener() {
    state.setNextScale()
    updateView(state)
}

function resetButtonListener() {
    state.reset()
    updateView(state)
}
