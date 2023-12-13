/* getElementById('html-tag-id') */
// get a single element: 
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')


/* querySelectorAll('.html-class-name') */
// '.circle' return an array of circles
const circles = document.querySelectorAll('.circle')

let currentActive = 1

// when click Next
next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    // console.log(currentActive)
    update()
})

// when click Prve
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})

/**
 * update the circle style when active
 */
function update() {
    /* arr.forEach(value: elem, key: idx) */
    circles.forEach((circle, idx) => { //pass circle and index as params, idx starts from 0
        if (idx < currentActive) { // colored circle from currentActive to the leftmost
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    // calculate progress line in each progress
    // the width in CSS take %, so just concatenate '%'
    // each part should be around 33% width: 100% / 3
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    if (currentActive == 1) {
        prev.disabled = true // when begin, set prev disabled
    } else if (currentActive == circles.length) { // when end, set next disabled
        next.disabled = true
    } else { // otherwise, both active
        prev.disabled = false
        next.disabled = false
    }

}
