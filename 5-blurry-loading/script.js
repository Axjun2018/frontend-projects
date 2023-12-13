const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;
let int = setInterval(blurring, 30) // every 30ns add 1 load

function blurring() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    //console.log(load)

    // set the text content in HTML
    loadText.innerText = `${load}%`

    // map text 0 - 100 to opacity 1 to 0
    loadText.style.opacity = scale(load, 0, 100, 1, 0)//opacity is a %: 1 to 0 --> transparent to sharp
    // map text 0 - 100 to blur 30 to 0
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

/* Map a varying number from one range to another*/
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// const scale = (number, inMin, inMax, outMin, outMax) => {
//     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
