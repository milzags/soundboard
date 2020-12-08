const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    
    btn.addEventListener('click', () => {

        stopSounds()

        document.getElementById(sound).play(); //the audio element isn't included here so this won't actually do anything.


    });

    document.getElementById('buttons').appendChild(btn);
});


// this will allow the previously clicked sound to stop playing when you
// click on a new sound --> ensures that they don't overlap.
function stopSounds() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
};