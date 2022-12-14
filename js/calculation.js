// Utility Function for get Input value 
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueStr);
    return inputFieldValue;
}

// Calculation
document.getElementById('per-calculate').addEventListener('click', function(){
    const perPlayerInput = getInputValue('per-player-input');
    const playerCostContainer = document.getElementById('player-cost-container');
    const playerCost = perPlayerInput * emptyArr.length;
    playerCostContainer.innerText = playerCost;
    
})

document.getElementById('total-cost-btn').addEventListener('click', function(){
    const managerCost = getInputValue('manager-cost');
    const coachCost = getInputValue('coach-cost');
    const perPlayerInput = getInputValue('per-player-input');
    const playerCost = perPlayerInput * emptyArr.length;

    document.getElementById('total-cost').innerText = playerCost + managerCost + coachCost;
})


