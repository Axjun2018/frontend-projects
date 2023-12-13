const boxes = document.querySelectorAll('.box')

// add event listener on window for scroll
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    // console.log(window.innerHeight)
    const triggerBottom = window.innerHeight / 5 * 4
    // console.log(triggerBottom)
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // get the top value of the box
        if (boxTop < triggerBottom) { // if boxTop is uppon the triggerBottom
            box.classList.add('show') // show this box
        } else { // otherwise, remove it
            box.classList.remove('show')
        }
    })

}
