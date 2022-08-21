// Utility Function to get Player names
function getNames(elementId){
    const nameField = document.getElementById(elementId);
    const nameFieldStr = nameField.innerText;
    return nameFieldStr;
}





// Card-1 Event Listener
    const cr7Btn = document.getElementById('cr7-btn');
    cr7Btn.addEventListener('click', function(){
    const name = getNames('cr7-name');
    const li = document.createElement('li');
    li.innerText = name;
    const playerList = document.getElementById('player-list');
    playerList.appendChild(li);
    cr7Btn.setAttribute('disabled', true);
});
// Card-2 Event Listener
    const messiBtn = document.getElementById('messi-btn');
    messiBtn.addEventListener('click', function(){
    const name = getNames('messi-name');
    const li = document.createElement('li');
    li.innerText = name;
    const playerList = document.getElementById('player-list');
    playerList.appendChild(li);
    messiBtn.setAttribute('disabled', true);
})
// Card-3 Event Listener
    const nymarBtn = document.getElementById('nymer-btn');
    nymarBtn.addEventListener('click', function(){
    const name = getNames('nymer-name');
    const li = document.createElement('li');
    li.innerText = name;
    const playerList = document.getElementById('player-list');
    playerList.appendChild(li);
    nymarBtn.setAttribute('disabled', true);
})
// Card-4 Event Listener
    const salahBtn = document.getElementById('salah-btn')
    salahBtn.addEventListener('click', function(){
    const name = getNames('salah-name');
    const li = document.createElement('li');
    li.innerText = name;
    const playerList = document.getElementById('player-list');
    playerList.appendChild(li);
    salahBtn.setAttribute('disabled', true);
})
// Card-5 Event Listener
    const mbappeBtn = document.getElementById('mbappe-btn')
    mbappeBtn.addEventListener('click', function(){
    const name = getNames('mbappe-name');
    const li = document.createElement('li');
    li.innerText = name;
    const playerList = document.getElementById('player-list');
    playerList.appendChild(li);
    mbappeBtn.setAttribute('disabled', true);
})
// Card-6 Event Listener
    const lewandowskiBtn = document.getElementById('lewandowski-btn');
    lewandowskiBtn.addEventListener('click', function(){
    const name = getNames('lewandowski-name');
    const li = document.createElement('li');
    li.innerText = name;
    const playerList = document.getElementById('player-list');
    playerList.appendChild(li);
    lewandowskiBtn.setAttribute('disabled', true);
})


// Calculation Section 
// const playerPlate = document.getElementById('player-plate');
// console.log(playerPlate.length)