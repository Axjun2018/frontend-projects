const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// asynchronous fetch: using async await
async function generateJoke(){
    // config network object
    const config = { 
        headers: {
            'Accept': 'application/json'
        }
    }
    
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
} 

// synchronous fetch: using .then()
// function generateJoke(){
//     // config network object
//     const config = { 
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config) // fetch('URL', networkObject)
//     .then((res) => res.json()) //.then: after above finished, do sth
//     .then((data) => {
//         jokeEl.innerHTML = data.joke  // get joke's value from data
//     })
// } 