function setStyle(element) {
    element.style.color = "whitesmoke";
    element.style.fontWeight ="bold";
    element.style.letterSpacing ="2px"
    return element;
}

const buttons = document.getElementsByClassName('btn');

for( const button of buttons){
    button.addEventListener('click', function (){
    const player = button.parentNode.children[0].innerText;
    const selectedBox = document.getElementById('player-selected');
    const playerList = document.createElement('li')
    if ( selectedBox.children.length < 5 ) {
        selectedBox.appendChild(playerList).innerText = player;
        setStyle(selectedBox);
        button.disabled = true;
        
    }
    else{
       
        alert('sorry you can not select more than five player')
    }
    console.log(selectedBox.children.length);
    });
};
function countSelectedPlayer(id) {
    const count = document.getElementById(id).children.length;
    return count;
}
 console.log(countSelectedPlayer('player-selected'));

// function