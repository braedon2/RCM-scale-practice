class Model {
    constructor(levelName, shuffledScales, patterns, i = 0) {
        this.levelName = levelName
        this.shuffledScales = shuffledScales
        this.patterns = patterns
        this.strokes = ["free stroke", "rest stroke"]
        this.i = i
    }

    getScale() {
        return this.shuffledScales[this.i]
    }

    getStroke() {
        if (this.i < this.patterns.length * 2) {
            if (this.i < this.patterns.length) {
                return this.strokes[0]
            }
            else {
                return this.strokes[1]
            }
        }
        else {
            return this.strokes[Math.floor(Math.random() * this.strokes.length)]
        }
    }

    getPattern() {
        if (this.i < this.patterns.length * 2) {
            return this.patterns[this.i % this.patterns.length]
        }
        else {
            return this.patterns[Math.floor(Math.random() * this.patterns.length)]
        }
    }
}

export {Model}