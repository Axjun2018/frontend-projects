const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => { // when keyup:
    createTags(e.target.value); //create tags by target value in textarea

    if(e.key == 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10) // wait for 10 sec before next operation
        randomSelect();
    }
})

function createTags(input){
    const tags = input.split(',') // split tag by , to a string array
        .filter(tag => tag.trim() !== '') // filter empty string after trimmed
        .map(tag => tag.trim()); //return trimmed strings
    // console.log(tags);

    tagsEl.innerHTML = ''; //clear old tags in HTML

    // create tag elements
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect(){
    // console.log(123)
    const times = 30;

    // shifting tags, highlight & unhighlight
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100)
    }, 100);

    // stop and pick up a tag to highlight
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
     // highlight a tag in a random index
    return tags[Math.floor(Math.random() * tags.length)]; //Get a random number from 0 to that num:
}

function highlightTag(tag){
    tag.classList.add('highlight');
}

function unHighlightTag(tag){
    tag.classList.remove('highlight');
}