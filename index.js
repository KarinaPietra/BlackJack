let rl = require('readline-sync');


// let name = rl.question(`What's your name?` );
// console.log(name);

let playerHand = 0;
let dealerHand = 0;



  // Ask the user to input her choice

  console.log("Welcome to Blackjack");

  let dealGame= rl.question(`select deal to start playing: `);
  dealGameFunction()

  let playerChoice = rl.question(`please select stand, hit: `);
  playerChoiceFunction()

  // let dealerChoice = dealerChoiceFunction();



  // let playerLost = rl.question(`Continue playing? (yes/no)`)

  // determineWinner(userChoice, dealerChoice, score);
  //
  // let continuePlaying = rl.question('Continue playing? (yes/no)');


function dealGameFunction(deal){
  if(dealGame === 'deal'){
    playerHand += Math.round(Math.random() * 11 + 1)
    console.log(playerHand);
  }

}

function bust() {
    if (playerHand > 21) {
    console.log("Bust!")
  }
}

function twentyOne() {
  if (playerHand === 21){
    console.log("You win!")
  }
}


function playerChoiceFunction() {
  let game = true;
  while(game) {
    if (playerChoice === 'hit') {
      playerHand += Math.round(Math.random() * 11 + 1)
      console.log(playerHand);
      bust()
      twentyOne()
      if(playerHand >= 21){

        dealGame = rl.question(`Continue playing? (yes/no)`)
        if(dealGame === "no")
          game = false
        else{
          playerHand = 0
          dealGame= rl.question(`select deal to start playing: `);
          dealGameFunction('deal')
          playerChoice = rl.question(`please select stand, hit: `)
        }
      }
      else
        playerChoice = rl.question('Would you like to hit or stand?');
    }

    else if (playerChoice === 'stand') {
      game = false
      console.log("Its the dealer's turn")
       dealerChoiceFunction(dealerHand);

    } else {
      game = false
      console.log('Invalid Choice!')
    }
  }

}

function dealerChoiceFunction(dealerHand) {
  let dealerGame = true;
  let dealerStart =  dealerHand + Math.round(Math.random() * 11 +1);
  console.log(dealerStart);

  while (dealerGame) {
     if (17 === dealerStart || dealerStart === 21 || (dealerStart > 17 && dealerStart < 21) ){
      console.log(dealerStart);
      determineWinnerFunction(playerHand, dealerStart)
      dealerGame = false
    } else if(dealerStart < 21 || dealerStart < 17) {
      dealerStart += Math.round(Math.random() * 11)
      console.log(dealerStart);
    } else {
      dealerGame = false;
      console.log('Dealer lost!')
      restart();
  }
}
}

// use a while loop
function restart(){
  dealGame = rl.question(`Continue playing? (yes/no)`)
  game = true
  while (game) {
  if(dealGame === "no"){
    game = false
  }else{
    playerHand = 0
    dealGame= rl.question(`select deal to start playing: `);
    dealGameFunction('deal');
    playerChoice = rl.question(`please select stand, hit: `)
    playerChoiceFunction();
}
}
}

function determineWinnerFunction(playerHand, dealerHand) {
  if(playerHand > dealerHand && playerHand <= 21){
    console.log('Player won');
    restart();
  }else if (playerHand < dealerHand && dealerHand <= 21){
    console.log('Dealer won');
    restart();
  }else if (playerHand === dealerHand && playerHand <= 21 && dealerHand <= 21){
    console.log('Draw');
    restart();
  }else if (playerHand >= 21 && dealerHand >= 21){
    console.log('Bust')
    restart();
  }else {
    null
  }
}
