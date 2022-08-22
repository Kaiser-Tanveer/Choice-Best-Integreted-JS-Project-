function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueStr);
    return inputFieldValue;
}

document.getElementById('per-calculate').addEventListener('click', function(){
    const perPlayerInput = getInputValue('per-player-input');
    console.log(perPlayerInput)
    const playerNumStr = getArrLength();
    const playerNum = parseInt(playerNumStr);
    console.log(playerNum)
})


