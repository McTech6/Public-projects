const playButton=document.getElementById('play-btn');
const pauseButton =document.getElementById('pause-btn');
const stopButton = document.getElementById('stop-btn');
const textInput =document.getElementById('text');
const speedInput =document.getElementById('speed');

playButton.addEventListener('click', ()=>{
    playText(textInput.value)
})

function playText(text){
   const utterance= new SpeechSynthesisUtterance(text);
   utterance.rate= speedInput.value || 1
   speechSynthesis.speak(utterance)
}