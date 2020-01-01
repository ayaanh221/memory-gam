


var flag = 1;
function easy (){
    if(flag==1)
    {
        document.getElementById("easy").style.display="none";
        flag=0;
    }
    else{
        document.getElementById("easy").style.display="block";
               flag=1;
    }
}



var flag = 1;
function medium (){
    if(flag==1)
    {
        document.getElementById("medium").style.display="none";
        flag=0;
    }
    else{
        document.getElementById("medium").style.display="block";
               flag=1;
    }
}



var flag = 1;
function hard (){
    if(flag==1)
    {
        document.getElementById("hard,easy,medium").style.display="none";
        flag=0;
    }
    else{
        document.getElementById("hard").style.display="block";
               flag=1;
    }
}


  class AudioController {
    constructor() {
        this.bgMusic = new Audio('https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Audio/creepy.mp3');
        this.flipSound = new Audio('https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Audio/flip.wav');
        this.matchSound = new Audio('https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Audio/match.wav');
        this.victorySound = new Audio('https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Audio/victory.wav');
        this.gameOverSound = new Audio('Assets/Audio/gameOver.wav');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    
}



var audio, playbtn, mutebtn, seek_bar;
function initAudioPlayer(){
	audio = new Audio();
	audio.src = "https://raw.githubusercontent.com/WebDevSimplified/Mix-Or-Match/master/Assets/Audio/creepy.mp3";
	audio.loop = true;
	audio.play();

	playbtn = document.getElementById("playpausebtn");
	
	playbtn.addEventListener("click",playPause);

	// Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		   
	    } else {
		    audio.pause();
		    playbtn.style.background = "url(images/play.png) no-repeat";
	    }
	}
	function mute(){
		if(audio.muted){
		    audio.muted = false;
		    mutebtn.style.background = "url(images/speaker.png) no-repeat";
	    } else {
		    audio.muted = true;
		    mutebtn.style.background = "url(images/speaker_muted.png) no-repeat";
	    }
	}
}
window.addEventListener("load", initAudioPlayer);





  







const cards = document.querySelectorAll('.card');


let hasFlippedCard =false;
let lockBoard = false;
let firstCard,secondCard; 

function flipCard(){
    if(lockBoard) return;
    if(this===firstCard)return;
    this.classList.add('visible');
   function  startGame() {
        this.totalClicks = 0;
     this.timeRemaining = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
       setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards(this.cardsArray);
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500);
         
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;


    }
  
  


        if(!startGame){
            //first click
    hasFlippedCard= true;
    firstCard=this;
   
   return ;
        }
  
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
    if(this.matchedCards.length === this.cardsArray.length)
            this.victory();
   
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



    
    
    cards.forEach(card => card.addEventListener('click',flipCard));



  


class MixOrMatch {
    constructor(totalTime, cards) {
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }

   
  
    startCountdown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }
    
    
   
  
}

   
  
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}






function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}
