import { levelData } from "./modules/levels.js"
import { View } from "./modules/view.js"
import { Model } from "./modules/model.js"
import { getCurrentLevelOrDefault, setCurrentLevel } from "./modules/storage.js"

let currentOrDefaultLevel = getCurrentLevelOrDefault()
let model = new Model(
    currentOrDefaultLevel, 
    shuffleArray(levelData[currentOrDefaultLevel].scales),
    levelData[currentOrDefaultLevel].patterns
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
    setCurrentLevel(levelName)
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