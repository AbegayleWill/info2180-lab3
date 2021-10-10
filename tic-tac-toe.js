window.onload = function(){windowLoad()}
    //loads window
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
       

}


