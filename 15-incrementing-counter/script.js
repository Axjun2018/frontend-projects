const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    // initial counter to 0
    counter.innerText = '0'

    // define function
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') // without +, target is a string type
        // console.log(typeof target, target)
        const c = +counter.innerText // empty, 0

        const increment = target / 1000000 // set starting count numbers
        // console.log(increment)
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)  // update counter, each time taking 1ms, until c == target
        }else{
            counter.innerText = target
        }
    }

    // call function
    updateCounter()
})