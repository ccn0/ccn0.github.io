/*

just some experimental code, nothing to see here
made by CCN0, no use it! source available or something!

*/
(function() {
    const spookyList = [
        ["https://media1.tenor.com/m/So59sDcNM4wAAAAC/fnaf-chica.gif","https://ccn0.github.io/img/audio/plus/fnaf4jumpscare.mp3"],
        ["https://media1.tenor.com/m/ZO1_WS7f-4YAAAAC/fnaf-freddy.gif","https://ccn0.github.io/img/audio/plus/fnaf1jumpscare.mp3"],
        ["https://media.tenor.com/aHR1ThFfmE4AAAAi/fnaf.gif","https://ccn0.github.io/img/audio/plus/fnaf2jumpscare.mp3"],
        ["https://media.tenor.com/E_HSK33-xokAAAAi/fnaf-bunny.gif","https://ccn0.github.io/img/audio/plus/fnaf3jumpscare.mp3"],
        ["https://ccn0.github.io/img/spooky/smilegirl.png","https://ccn0.github.io/img/audio/plus/funandlaughing.mp3"],
        ["https://ccn0.github.io/img/spooky/spookyhillman.gif","https://ccn0.github.io/img/audio/plus/cardrivinghills.mp3"],
    ];
    const chosenScare = spookyList[Math.floor(spookyList.length * Math.random())];

    const spookySound = new Audio();
    spookySound.src = chosenScare[1];
    spookySound.preload = 'auto';
    const spookyPhoto = chosenScare[0];

    const spookElem = document.createElement('img');
    spookElem.style.display = 'none';
    spookElem.src = spookyPhoto;
    spookElem.style.width = '100%';
    spookElem.style.height = '100vh';
    spookElem.style.position = 'fixed';
    spookElem.style.top = '0';
    spookElem.style.left = '0';
    document.body.appendChild(spookElem);

    const links = document.querySelectorAll('a');
    if (links.length === 0) return;
    const chosenLink = Math.floor(links.length * Math.random());
    const originalDestination = links[chosenLink].href;

    function scare() {
        return new Promise((resolve) => {
            spookySound.volume = 1;
            spookySound.play();
            spookElem.style.display = 'block';
            spookySound.addEventListener('ended', () => {
                resolve();
            });
        });
    };
    
    function finale() {
        spookElem.style.display = 'none';
        location.href = originalDestination;
    };

    console.log(links[chosenLink].textContent);
    links[chosenLink].classList.add('spooky');
    links[chosenLink].setAttribute('title',links[chosenLink].href);
    links[chosenLink].removeAttribute('href');
    links[chosenLink].addEventListener('click',()=>{
        scare().then(finale);
    });

    const flick = ['#0000',window.getComputedStyle(links[chosenLink]).color];
    const css = `
    @keyframes rapidColorChange {
    0% { color: ${flick[0]}; }
    10% { color: ${flick[1]}; }
    14% { color: ${flick[0]}; }
    19% { color: ${flick[1]}; }
    28% { color: ${flick[0]}; }
    36% { color: ${flick[1]}; }
    43% { color: ${flick[0]}; }
    52% { color: ${flick[1]}; }
    57% { color: ${flick[0]}; }
    62% { color: ${flick[1]}; }
    64% { color: ${flick[0]}; }
    69% { color: ${flick[1]}; }
    78% { color: ${flick[0]}; }
    81% { color: ${flick[1]}; }
    89% { color: ${flick[0]}; }
    94% { color: ${flick[1]}; }
    97% { color: ${flick[0]}; }
    99% { color: ${flick[1]}; }
    }
    .spooky {
        animation: rapidColorChange 10s infinite;
        cursor: grab;
        &:active {
            cursor: grabbing;
        }
    }
    `;
    
    const style = document.createElement('style');
    style.innerHTML = css;
    
    document.head.appendChild(style);
})();