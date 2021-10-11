window.onload = function(){windowLoad()}
    //loads window
    function windowLoad(){
        var blocks = document.getElementById("board").childNodes;
        blocks.forEach(element => {element.className = "square";});


        const xClass= "X"
        const oClass = "O"
        let circleTurn 

        let stateOfGame= [];
        blocks.forEach(element => {element.addEventListener("click", isClicked)})
        function isClicked(element){
            const space = element.target
            const currentPlayer = circleTurn ? oClass : xClass

            placePlay(space,currentPlayer )
            stateOfGame.push(currentPlayer )
            circleTurn =! circleTurn
            //console.log("button clicked");
          
            function placePlay(space, currentPlayer ){
              space.textContent = currentPlayer 
              space.classList.add(currentPlayer)
              space.style.pointerEvents = "none"
          }

          playerWon()
          /*if (playerWon(currentPlayer)) {
            endGame(false)
          } else if (isDraw()) {
            endGame(true)
          } else {
            swapTurns()
          }*/
        }
          
        

        
        blocks.forEach(function(element){
            //allows hover
            element.addEventListener("mouseover", function(hoverPlay){
                hoverPlay.target.classList.add("hover");
            });
    
            //allows hover colour to be removed
            element.addEventListener("mouseout", function(hoverPlay){
                hoverPlay.target.classList.remove("hover");
            })
        })
        

        /*function swapTurns() {
          circleTurn = !circleTurn
        }*/

        
        
        
        
       /* const WINNING_COMBINATIONS = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ]*/
        

        
        //const strategy = document.querySelector('status')
        //const currentPlayer = circleTurn ? oClass : xClass
        //const text = document.querySelector('#heading');

        

        const currentPlayer = circleTurn ? oClass : xClass

        const playerWon = () => {
          let winnerMessage= document.getElementById("status");
          winnerMessage.textContent= `Congragulations! ${currentPlayer} is the Winner!`
          winnerMessage.classList += "you-won";
            if (stateOfGame[0].innerText == currentPlayer) {
              if (stateOfGame[1].innerText == currentPlayer && stateOfGame[2].innerText == currentPlayer) {
                winnerMessage
                return true;
              }
              if (stateOfGame[3].innerText == currentPlayer && stateOfGame[6].innerText== currentPlayer) {
                winnerMessage
                return true;
              }
              if (stateOfGame[4].innerText== currentPlayer && stateOfGame[8].innerText == currentPlayer) {
                winnerMessage
                return true;
              }
            }
            if (stateOfGame[8].innerText == currentPlayer) {
              if (stateOfGame[2].innerText == currentPlayer && stateOfGame[5].innerText == currentPlayer) {
                console.log(`${currentPlayer} wins`);
                return true;
              }
              if (stateOfGame[6].innerText == currentPlayer &&stateOfGame[7].innerText == currentPlayer) {
                winnerMessage
                return true;
              }
            }
            if (stateOfGame[4].innerText == currentPlayer) {
              if (stateOfGame[1].innerText == currentPlayer && stateOfGame[7].innerText == currentPlayer) {
                winnerMessage
                return true;
              }
              if (stateOfGame[3].innerText == currentPlayer && stateOfGame[5].innerText == currentPlayer) {
                winnerMessage
                return true;
              }
              if (stateOfGame[2].innerText == currentPlayer && stateOfGame[6].innerText == currentPlayer) {
                winnerMessage
                return true;
            
              }
            }

            
          
          
        

}}