import { levelData } from "./levels.js"

class View {
    constructor(model) {
        this.levelButtons = []
        this.nextButton = document.querySelectorAll(".next-reset-container button")[0]
        this.resetButton = document.querySelectorAll(".next-reset-container button")[1]
        this.scaleDisplay = document.querySelector(".scale")
        this.fingeringDisplay = document.querySelector(".fingering")
        this.progressDisplayText = document.querySelector(".progress-text")

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
        this.progressDisplayText.textContent = `${model.i + 1} of ${model.shuffledScales.length}`
    }
}

export { View }