const localStorageKey = "currentLevel"
const defaultLevel = "Level 1"

function getCurrentLevelOrDefault() {
    const currentLevel = localStorage.getItem(localStorageKey)
    if (currentLevel === null) {
        return defaultLevel
    }
    else {
        return currentLevel
    }
}

function setCurrentLevel(levelName) {
    localStorage.setItem(localStorageKey, levelName)
}

export { getCurrentLevelOrDefault, setCurrentLevel }