window.onload = function(){windowLoad()}
    function windowLoad(){
        var blocks = document.getElementById("board").childNodes;
        blocks.forEach(element => {element.className = "square";});



        
        const xClass= "X"
        const oClass = "O"
        let circleTurn 

        const stateOfGame =[]
        blocks.forEach(element => {element.addEventListener("click", isClicked)})
        function isClicked(element){
            const space = element.target
            const currentClass = circleTurn ? oClass : xClass

            function placePlay(space, currentClass){
                space.textContent = currentClass
                space.classList.add(currentClass)
                space.style.pointerEvents = "none"
            }
            placePlay(space,currentClass)
            stateOfGame.push(currentClass)
            circleTurn =! circleTurn
            //console.log("button clicked");
        }


       

}


