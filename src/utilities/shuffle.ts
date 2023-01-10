export const shuffle = (options: any[]) => {
    const [...shuffleArr] = options
    for (let i = shuffleArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = shuffleArr[i]
        shuffleArr[i] = shuffleArr[j]
        shuffleArr[j] = temp
    }

    return shuffleArr
}