const ROCK = "グー";
const SCISSORS = "チョキ";
const PAPER = "パー";
function getPlayerHand() {
    let hand = prompt("じゃんけんの手を選んでください。グー、チョキ、パーから選んでください。");
    while(hand !== ROCK && hand !== SCISSORS && hand !== PAPER) {
        hand = prompt("グー、チョキ、パーから選んでください。");
      }
      return hand;
    }
    function getComputerHand() {
        const hands = [ROCK, SCISSORS, PAPER];
        const randomIndex = Math.floor(Math.random() * hands.length);
        return hands[randomIndex];
      }
      function judge(playerHand, computerHand) {
        if(playerHand === computerHand) {
          return "引き分け";
        } else if((playerHand === ROCK && computerHand === SCISSORS) ||
                  (playerHand === SCISSORS && computerHand === PAPER) ||
                  (playerHand === PAPER && computerHand === ROCK)) {
          return "勝ち";
        } else {
          return "負け";
        }
      }
      function playGame() {
        let playerHand = getPlayerHand();
        let computerHand = getComputerHand();
        
        let result = judge(playerHand, computerHand);
        
        alert(`あなたの手: ${playerHand}, コンピューターの手: ${computerHand}\n結果: ${result}`);
      }
      for(let i = 0; i < 10; i++) {
        playGame();
      }
            