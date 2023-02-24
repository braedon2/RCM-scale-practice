import { levelData } from "./levels.js"

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

class State {
    constructor() {
        this.setLevel("Level 1")
    }

    setNextScale() {
        this.i += 1
        this.currentScale = this.scales[this.i]
    }

    setLevel(level) {
        this.level = level
        this.scales = levelData[level]
        shuffleArray(this.scales)

        this.i = 0
        this.currentScale = this.scales[0]
    }

    reset() {
        this.setLevel(this.level)
    }
}

export const state = new State()