/*

made by CCN0 v1.03
this is a screamer, so click cancel when it pops up if you dont want to partake, ever.

*/
(function() {
    if (localStorage.getItem('spooky') === "true") {
        const spookyList = [
            ["https://media1.tenor.com/m/So59sDcNM4wAAAAC/fnaf-chica.gif","https://ccn0.github.io/img/audio/plus/fnaf4jumpscare.mp3"],
            ["https://media1.tenor.com/m/ZO1_WS7f-4YAAAAC/fnaf-freddy.gif","https://ccn0.github.io/img/audio/plus/fnaf1jumpscare.mp3"],
            ["https://media.tenor.com/aHR1ThFfmE4AAAAi/fnaf.gif","https://ccn0.github.io/img/audio/plus/fnaf2jumpscare.mp3"],
            ["https://media.tenor.com/E_HSK33-xokAAAAi/fnaf-bunny.gif","https://ccn0.github.io/img/audio/plus/fnaf3jumpscare.mp3"],
            ["https://ccn0.github.io/img/spooky/smilegirl.png","https://ccn0.github.io/img/audio/plus/funandlaughing.mp3"],
            ["https://ccn0.github.io/img/spooky/spookyhillman.gif","https://ccn0.github.io/img/audio/plus/cardrivinghills.mp3"],
            ["https://ccn0.github.io/img/spooky/niceman24kbfile.png","https://ccn0.github.io/img/audio/plus/southparkbestofcousinelvin.mp3"],
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
                    spookElem.style.display = 'none';
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
        links[chosenLink].addEventListener('mousedown',(e)=>{
            console.log(e.button)
            switch (e.button) {
                case 0:
                    scare().then(finale);
                    break;
                case 1:
                    e.preventDefault();
                    scare();
                    window.open(originalDestination, "_blank");
                    break;
            
                default:
                    break;
            }
        });
    
        const css = `
        @keyframes rapidColorChange {
        0% { opacity: 1; }
        10% { opacity: 0; }
        14% { opacity: 1; }
        19% { opacity: 0; }
        28% { opacity: 1; }
        36% { opacity: 0; }
        43% { opacity: 1; }
        52% { opacity: 0; }
        57% { opacity: 1; }
        62% { opacity: 0; }
        64% { opacity: 1; }
        69% { opacity: 0; }
        78% { opacity: 1; }
        81% { opacity: 0; }
        89% { opacity: 1; }
        94% { opacity: 0; }
        97% { opacity: 1; }
        99% { opacity: 0; }
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
    } else {
        if (localStorage.getItem('spooky') != "false") {
            const modalcontainer = document.createElement("div");
            modalcontainer.classList.add('modal');

            const contain = document.createElement('div');
            contain.style.backgroundColor = "#000";
            contain.style.border = "2px dashed #fff";
            contain.style.padding = "15px";

            const h1 = document.createElement('h1');
            h1.textContent = 'WARNING: Flashing lights & loud noises.';
            contain.appendChild(h1);
            
            const par = document.createElement('p');
            par.textContent = 'If you click CONFIRM, you will be participating in the Halloween festivities. Clicking OPT OUT will opt you out of playing any of the Halloween festivities to come.';
            contain.appendChild(par);

            const a = document.createElement('a');
            a.innerHTML = 'For more information, check my blog.<br>';
            a.href = 'https://ccn0guy.blogspot.com/2024/10/halloween-2024.html';
            contain.appendChild(a);

            const confirmbutton = document.createElement('button');
            confirmbutton.textContent = "CONFIRM";
            confirmbutton.classList.add("rec");
            confirmbutton.setAttribute('onclick',"localStorage.setItem('spooky','true');document.querySelector('.modal').remove();");
            contain.appendChild(confirmbutton);

            const optoutbutton = document.createElement('button');
            optoutbutton.textContent = "OPT OUT";
            optoutbutton.setAttribute('onclick',"localStorage.setItem('spooky','false');document.querySelector('.modal').remove();");
            contain.appendChild(optoutbutton);

            const closebutton = document.createElement('button');
            closebutton.textContent = "ask later idk";
            closebutton.setAttribute('onclick',"document.querySelector('.modal').remove();");
            contain.appendChild(closebutton);

            modalcontainer.appendChild(contain);
            document.body.appendChild(modalcontainer);
        };
    };
})();