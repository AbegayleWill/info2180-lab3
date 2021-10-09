window.onload = function(){windowLoad()}
function windowLoad(){
    var blocks = document.getElementById("board").childNodes;
    blocks.forEach(element => {element.className = "square";});
}