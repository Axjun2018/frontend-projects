const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup()

smallCups.forEach((cup, idx) => {
    //console.log(idx)
    cup.addEventListener('click', () => highlightCups(idx))

    
})

// highlight clicked cup at idx
function highlightCups(idx){ // idx is the one clicked on 
    //console.log(idx)

    // toggle: if the clicked cup and next cup is full, remove full status behind the clicked one
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--;
    }
    // full the cups to clicked cup
    smallCups.forEach((cup, idx2) => { // idx2 is for all smallCups
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

// updateBigCup after clicked small cups
function updateBigCup(){
    const fullCups  = document.querySelectorAll('.cup-small.full').length
    // console.log(fullCups)
    const totalCups = smallCups.length
    // console.log(totalCups)

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px` // calculate %, and change height (the big cup height is 330px)
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups == totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

}
