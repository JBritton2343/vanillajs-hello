/* eslint-disable */



window.onload = function() {
  //write your code here
  
  function getCardValue(cardValue=0){
  
  switch(cardValue){
    case 1: return "A";
    break;
    case 2: return 2;
    break;
    case 3: return 3;
    break;
    case 4: return 4;
    break;
    case 5: return 5;
    break;
    case 6: return 6;
    break;
    case 7: return 7;
    break;
    case 8: return 8;
    break;
    case 9: return 9;
    break;
    case 10: return 10;
    break;
    case 11: return "J";
    break;
    case 12: return "Q";
    break;
    case 13: return "K";
    break;
    default: return null;
  }}
  let suitsArr=["♦", "♥", "♠", "♣"];
  let randVal=(Math.floor(Math.random()*13)+1);
  let suit=suitsArr[Math.floor(Math.random()*3)]
  document.body.innerHTML=`<div class="card">
  <div class="topSuit ${suit=="♦"||suit=="♥"?"red":""}">${suit}</div>
  <div class="cardValue">${getCardValue(randVal)}</div>
  <div class="bottomSuit ${suit=="♦"||suit=="♥"?"red":""}">${suit}</div>
  </div>`
};


