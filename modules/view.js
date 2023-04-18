import { levelData } from "./levels.js"

class View {
    constructor(model) {
        this.levelButtons = []
        this.nextButton = document.querySelectorAll(".next-reset-container button")[0]
        this.resetButton = document.querySelectorAll(".next-reset-container button")[1]
        this.scaleDisplay = document.querySelector(".scale")
        this.fingeringDisplay = document.querySelector(".fingering")
        this.progressTextDisplay = document.querySelector(".progress-text")
        this.progressBarDisplay = document.querySelector(".progress-bar div")

        this.initView()
        this.updateView(model)
    }

    initView() {
        this.initLevelButtons()
    }

    updateView(model) {
        this.updateLevelButtons(model)
        this.updateScaleDisplay(model)
        this.updateFingeringDisplay(model)
        this.updateNextButton(model)
        this.updateProgressDisplay(model)
        this.updateProgressBar(model)
    }

    initLevelButtons() {
        const button_container = document.querySelector(".level-container")
        const buttonsToRender = Object.keys(levelData)
        const firstRowToRender = buttonsToRender.slice(0, buttonsToRender.length/2)
        const secondRowToRender = buttonsToRender.slice(buttonsToRender.length/2)

        for (let row of [firstRowToRender, secondRowToRender]) {
            let div = document.createElement("div")
            button_container.appendChild(div)

            for (let label of row) {
                let buttonColor = levelData[label].color
                let button = document.createElement("button")
                button.style.color = buttonColor
                button.style.borderColor = buttonColor
                button.textContent = label
    
                div.appendChild(button)
                this.levelButtons.push(button)
            }
        }
    }

    updateLevelButtons(model) {
        for (let button of this.levelButtons) {
            let buttonColor = levelData[button.textContent].color
            button.style.color = buttonColor
            button.style.borderColor = buttonColor
            button.style.backgroundColor = "white"
    
            if (button.textContent == model.levelName) {
                button.style.color = "white"
                button.style.backgroundColor = buttonColor
            }
        }
    }

    updateScaleDisplay(model) {
        this.scaleDisplay.textContent = model.getScale()
    }

    updateFingeringDisplay(model) {
        this.fingeringDisplay.textContent = `${model.getPattern()}, ${model.getStroke()}`
    }

    updateNextButton(model) {
        if (model.i == model.shuffledScales.length - 1) {
            this.nextButton.disabled = true
        }
        else {
            this.nextButton.disabled = false
        }
    }

    updateProgressDisplay(model) {
        this.progressTextDisplay.textContent = `${model.i + 1} of ${model.shuffledScales.length}`
    }

    updateProgressBar(model) {
        this.progressBarDisplay.style.backgroundColor = levelData[model.levelName].color

        let width_percent = `${Math.floor((model.i + 1) / model.shuffledScales.length * 100)}%`
        this.progressBarDisplay.style.width = width_percent

        if (model.i + 1 == model.shuffledScales.length) {
            this.progressBarDisplay.style.borderTopRightRadius = '9px'
            this.progressBarDisplay.style.borderBottomRightRadius = '9px'
        }
        else {
            this.progressBarDisplay.style.borderTopRightRadius = '0px'
            this.progressBarDisplay.style.borderBottomRightRadius = '0px'
        }
    }
}

export { View }