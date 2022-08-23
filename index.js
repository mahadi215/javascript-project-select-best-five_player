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
        return;
    }
    // console.log(selectedBox.children.length);
    });
};
function getInputValue(inputId){
    const inputValue = parseFloat(document.getElementById(inputId).value);
    return inputValue;
};

 document.getElementById('player-expense-btn').addEventListener('click', function(){
     const count = document.getElementById('player-selected').childElementCount;
     const playerCostInput = getInputValue('perPlayerCost');
    if (isNaN(playerCostInput)) {
        alert('please enter amount in input field')
    } else {
     const playerExpense = count * playerCostInput;
     const playerExpenseElement = document.getElementById('player-expense');
     playerExpenseElement.innerText = playerExpense;
    }
 });

 document.getElementById('total-btn').addEventListener('click', function(){
     const previousPlayerCost = parseFloat(document.getElementById('player-expense').innerText);
     if (previousPlayerCost === 0 ) {
        alert('please first check and calculate player cost')
     } 
     else if( isNaN(getInputValue('manager-cost')) || isNaN(getInputValue('couch-cost')) ){
        alert('please enter number in input field')
     }
     else {
     const totalCost = getInputValue('manager-cost') + getInputValue('couch-cost') + previousPlayerCost;
     const totalCostElement = document.getElementById('total-cost');
     totalCostElement.innerText = totalCost;
     }
    
 });

