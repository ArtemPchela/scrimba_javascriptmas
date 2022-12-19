/**
 *  Review Challenge 4: Taco Tray
 *- Help our chef fill a tray with tacos!
 */

/**
 *Make this function return an array that contains
 *between one and ten taco emojis 🌮
 *Use the following JavaScript concepts:
 *- Math.random()
 *- Math.floor()
 *- new Array()
 *- Array.fill()
 */

function getRandomNumberOfTacos() {
    const generatorTacos = Math.floor(Math.random() * 10)

    // @ts-ignore
    return new Array(generatorTacos).fill('🌮')
}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray();
