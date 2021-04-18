let keycaps = document.querySelectorAll(".keycap");

keycaps.forEach(element => {
    element.addEventListener('click', event => {

        let soundToBePlayed = element.getAttribute('data-sound');
        let audio = new Audio(soundToBePlayed);
        audio.play();

        let activeLoop = setInterval(function(){ 

            if (!audio.paused) {

                element.setAttribute("class", 'keycap--active');
            
            } else {
            
                element.removeAttribute("class", 'keycap--active');
                element.setAttribute("class", 'keycap');

                clearInterval(activeLoop);
            
            }
        }, 50);

    })
});
