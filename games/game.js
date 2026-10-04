const gameframe = document.querySelector("#gameframe");
const fullscreenbtn = document.querySelector("#fullscreen");
const refreshbtn = document.querySelector("#refresh");

fullscreenbtn.addEventListener("click",()=>{
    gameframe.requestFullscreen();
});
refreshbtn.addEventListener("click",()=>{
    gameframe.contentWindow.location.reload();
});