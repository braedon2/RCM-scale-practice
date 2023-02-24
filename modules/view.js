const levelButtons = document.querySelectorAll(".level-container button")
const scaleDisplay = document.querySelector(".scale")
const [nextButton, resetButton] = document.querySelectorAll(".next-reset-container button")

function updateView(state) {
    updateLevelButtons(state)
    updateScaleDisplay(state)
    updateNextButton(state)
}

function updateLevelButtons(state) {
    for (const button of levelButtons) {
        button.classList.remove("level-button-selected")

        if (button.textContent == state.level) {
            button.classList.add("level-button-selected")
        }
    }   
}

function updateScaleDisplay(state) {
    scaleDisplay.textContent = state.currentScale
}

function updateNextButton(state) {
    if (state.i == state.scales.length - 1) {
        nextButton.disabled = true
    }
    else {
        nextButton.disabled = false
    }
}

export { 
    levelButtons, 
    nextButton, 
    resetButton, 
    updateView
}