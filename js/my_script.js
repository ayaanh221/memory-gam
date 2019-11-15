
if (document.readyState ==='loading') {
    document.addEventListener('DOMContentLoaded',ready());
    
} else{
    ready();
    
}
function ready(){
    let overlays= Array.from(document.getElementsByClassName('overlay-text'));
    let cards=Array.from(document.getElementsByClassName('card'));
   
   
   
   
     overlays.forEach(overLay =>{
          overlay.addEventListener('click',()=>{
            overlay.classList.remove('visible');
        });
    });
    cards.forEach(Card =>{
        card.addEventListener('click',()=>{
            // game.flipCard(card);
        });
    });
}
     