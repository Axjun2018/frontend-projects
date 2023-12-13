const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSounds()
        document.getElementById(sound).play() // use audio API play
    })

    document.getElementById('buttons').appendChild(btn) // create btn group
})

/**
 * stop current playing sound
 */
function stopSounds(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause() // use audio API play
        song.currentTime = 0; // set play time to 0
    })
}