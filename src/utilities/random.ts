export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function processRandom(random: number, min: number, max: number) {
    return Math.floor(random * (max - min)) + min;
}