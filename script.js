//determines which keys will be the black or white notes
const WHITE_KEYS = ['d', 'f', 'g', 'h', 'j', 'k', 'l'];
const BLACK_KEYS = ['r', 't', 'u', 'i', 'o'];

//get all the keys as elements
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
})

document.addEventListener('keydown', e => {
    if(e.repeat) return 
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime=0; //plays note from the beginning
    noteAudio.play();

}