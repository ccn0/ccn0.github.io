/*

just some experimental code, nothing to see here
made by CCN0, no use it! source available or something!

*/
(function() {
    const css = `
    @keyframes rapidColorChange {
    0% { color: #000; }
    10% { color: #0ff; }
    14% { color: #000; }
    19% { color: #0ff; }
    28% { color: #000; }
    36% { color: #0ff; }
    43% { color: #000; }
    52% { color: #0ff; }
    57% { color: #000; }
    62% { color: #0ff; }
    64% { color: #000; }
    69% { color: #0ff; }
    78% { color: #000; }
    81% { color: #0ff; }
    89% { color: #000; }
    94% { color: #0ff; }
    97% { color: #000; }
    99% { color: #0ff; }
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

    const spookyList = [
        ["https://media1.tenor.com/m/So59sDcNM4wAAAAC/fnaf-chica.gif","https://ccn0.github.io/img/audio/plus/fnaf4jumpscare.mp3"],
        ["https://media1.tenor.com/m/ZO1_WS7f-4YAAAAC/fnaf-freddy.gif","https://ccn0.github.io/img/audio/plus/fnaf1jumpscare.mp3"],
        ["https://media.tenor.com/aHR1ThFfmE4AAAAi/fnaf.gif","https://ccn0.github.io/img/audio/plus/fnaf2jumpscare.mp3"],
        ["https://ccn0.github.io/img/spooky/smilegirl.png","https://ccn0.github.io/img/audio/plus/funandlaughing.mp3"],
        ["https://ccn0.github.io/img/spooky/spookyhillman.gif","https://ccn0.github.io/img/audio/plus/cardrivinghills.mp3"],
    ];
    const chosenScare = spookyList[Math.floor(spookyList.length * Math.random())];
    console.log(chosenScare.toString());

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

    links[chosenLink].classList.add('spooky');
    links[chosenLink].setAttribute('title',links[chosenLink].href);
    links[chosenLink].removeAttribute('href');
    links[chosenLink].addEventListener('click',()=>{
        scare().then(finale);
    });
})();