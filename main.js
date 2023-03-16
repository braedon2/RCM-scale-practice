import { levelData } from "./modules/levels.js"
import { View } from "./modules/view.js"
import { Model } from "./modules/model.js"

let model = new Model(
    "Level 1", 
    shuffleArray(levelData["Level 1"].scales),
    levelData["Level 1"].patterns
)

let view = new View(model)

for (const button of view.levelButtons) {
    button.addEventListener("click", levelButtonListener)
}
view.nextButton.addEventListener("click", nextButtonListener)
view.resetButton.addEventListener("click", resetButtonListener)

function levelButtonListener(event) {
    let levelName = event.target.textContent
    model = new Model(
        event.target.textContent,
        shuffleArray(levelData[levelName].scales),
        levelData[levelName].patterns
    )
    view.updateView(model)
}

function nextButtonListener() {
    model = new Model(
        model.levelName, 
        model.shuffledScales, 
        model.patterns, model.i + 1
    )
    view.updateView(model)
}

function resetButtonListener() {
    model = new Model(
        model.levelName,
        shuffleArray(model.shuffledScales),
        model.patterns
    )
    view.updateView(model)
}

function shuffleArray(array) {
    let copy = [...array]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy
}
