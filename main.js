const levelData = {
    "Level 1": [
        "G Major (2 octaves)", 
        "E Minor Harmonic (2 octaves)", 
        "E Minor Melodic (2 octaves)", 
        "D Major", "B Minor Harmonic", 
        "B Minor Melodic",
        "F Major",
        "D Minor Harmonic",
        "D Minor Melodic",
        "Chromatic on D (1 octave)"
    ],
    "Level 2": [
        "C Major",
        "A Minor Harmonic (2 octaves)",
        "A Minor Melodic (2 octaves",
        "G Major",
        "E Minor Harmonic",
        "E Minor Melodic",
        "A Major",
        "F# Minor Harmonic",
        "F# Minor Melodic",
        "Chromatic on A (1 octave)"
    ]
}

class State {
    constructor() {
        this.level = "Level 1"
        this.scales = levelData[this.level]
        this.i = 0
        this.currentScale = this.scales[0]
    }

    setNextScale() {
        this.i += 1
        this.currentScale = this.scales[this.i]
    }

    setLevel(level) {
        this.level = level
        this.scales = levelData[level]
        this.i = 0
        this.currentScale = this.scales[0]
    }

    reset() {
        this.i = 0
        this.currentScale = this.scales[0]
    }
}

const state = new State()
const levelButtons = document.querySelectorAll(".level-container button")
const scaleDisplay = document.querySelector(".scale")
const [nextButton, resetButton] = document.querySelectorAll(".next-reset-container button")

updateLevelButtons(state.level)
updateScaleDisplay(state.currentScale)

for (const button of levelButtons) {
    button.addEventListener("click", levelButtonListener)
}
nextButton.addEventListener("click", nextButtonListener)
resetButton.addEventListener("click", resetButtonListener)

function levelButtonListener(event) {
    state.setLevel(event.target.textContent)

    updateLevelButtons(state.level)
    updateScaleDisplay(state.currentScale)
    updateNextButton(state)
}

function nextButtonListener() {
    state.setNextScale()

    updateScaleDisplay(state.currentScale)
    updateNextButton(state)
}

function resetButtonListener() {
    state.reset()

    updateScaleDisplay(state.currentScale)
    updateNextButton(state)
}

function updateLevelButtons(level) {
    for (const button of levelButtons) {
        button.classList.remove("level-button-selected")

        if (button.textContent == level) {
            button.classList.add("level-button-selected")
        }
    }   
}

function updateScaleDisplay(scale) {
    scaleDisplay.textContent = scale
}

function updateNextButton(state) {
    if (state.i == state.scales.length - 1) {
        nextButton.disabled = true
    }
    else {
        nextButton.disabled = false
    }
}