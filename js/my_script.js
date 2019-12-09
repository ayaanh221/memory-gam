

const cards = document.querySelectorAll('.card');


let hasFlippedCard =false;
let lockBoard = false;
let firstCard,secondCard; 


function flipCard(){
    if(lockBoard) return;
    if(this===firstCard)return;
    this.classList.add('visible');
 
        
  
    if(!hasFlippedCard){
    //first click
    hasFlippedCard= true;
    firstCard=this;
   return ;
} 
    //second click
    hasFlippedCard=false;
    secondCard=this;
    
   
     checkForMatch();

}

function checkForMatch(){
  let isMatch =  firstCard.dataset.framework ===
   secondCard.dataset.framework;
   isMatch ? disablCards() : unflipCards();
   
   
function disablCards(){
     firstCard.removeEventListener('click', flipCard);
       secondCard.removeEventListener('click',flipCard);
        resetBoard();
}
function unflipCards(){
    lockBoard= true;
    setTimeout(()=>{
        firstCard.classList.remove('visible');
    secondCard.classList.remove('visible');
    lockBoard =false;
    resetBoard();
},1500);
    } 
}
function resetBoard(){
    [hasFlippedCard,lockBoard]=[false,false];
    [firstCard,secondCard]=[null,null];
}


(function shuffle(){
    cards.forEach(card=>{
        let randomPos = Math.floor(Math.random() *12);
        card.style.order= randomPos;
    });
})();

function play() {
        var audio = document.getElementById('audio');
        if (audio.paused) {
            audio.play();
            ('#play').removeClass('glyphicon-play-circle');
            ('#play').addClass('glyphicon-pause');
        }else{
            audio.pause();
            audio.currentTime = 0;
            ('assets/audio/game background music.mp3').addClass('glyphicon-play-circle');
            ('#play').removeClass('glyphicon-pause');
        }
    }



    
    
    cards.forEach(card => card.addEventListener('click',flipCard));
