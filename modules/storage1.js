class Storage1 {
    constructor() {
        this.localStorageKey = "currentLevel"
        this.defaultLevel = "Level 1"
    }

    getCurrentLevelOrDefault() {
        const currentLevel = localStorage.getItem(this.localStorageKey)
        if (currentLevel === null) {
            return this.defaultLevel
        }
        else {
            return currentLevel
        }
    }

    setCurrentLevel(levelName) {
        localStorage.setItem(this.localStorageKey, levelName)
    }
}

export { Storage1 }