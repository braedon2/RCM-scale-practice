import { levelData } from "./levels.js"

const strokes = ["free stroke", "rest stroke"]

class State {
    constructor() {
        this.setLevel("Level 1")
    }

    setNextScale() {
        this.i += 1
        this.currentScale = this.scales[this.i]

        // want to make sure all combinations of patterns and styles are covered
        // choose a random combination after all eight combinations have been covered
        if (this.i < 8) {
            this.pattern = this.patterns[this.i % 4]
            if (this.i < 4) {
                this.stroke = strokes[0]
            }
            else {
                this.stroke = strokes[1]
            }
        }
        else {
            this.pattern = this.patterns[Math.floor(Math.random() * this.patterns.length)]
            this.stroke = strokes[Math.floor(Math.random() * strokes.length)]
        }
    }

    setLevel(level) {
        this.level = level
        this.scales = levelData[level]["scales"]
        this.patterns = levelData[level]["patterns"]

        shuffleArray(this.scales)

        this.i = 0
        this.currentScale = this.scales[0]
        this.pattern = this.patterns[0]
        this.stroke = strokes[0]
    }

    reset() {
        this.setLevel(this.level)
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export const state = new State()